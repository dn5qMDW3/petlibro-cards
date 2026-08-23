import { html, nothing, type TemplateResult } from 'lit';
import type { CardContext } from '../types';
import { formatState, getNumericState, getStateValue, isEntityOn } from '../utils';
import { renderNumberStepper, renderSelectRow } from './shared';

/** Icon for the pet's species, falling back to a generic paw. */
function speciesIcon(type: string | undefined): string {
  const t = (type ?? '').toLowerCase();
  if (t.includes('cat')) return 'mdi:cat';
  if (t.includes('dog')) return 'mdi:dog';
  return 'mdi:paw';
}

/**
 * Card for a pet profile.
 *
 * Pets are their own devices in the integration, carrying identity (breed,
 * age, sex), a current weight and a set of goals. Unlike the appliance cards
 * there is nothing to actuate — everything here is either information or a
 * target the user sets, so the layout is tiles for facts and a settings block
 * for the goals.
 */
export function renderPetCard(ctx: CardContext): TemplateResult {
  const { hass, entities, showControls } = ctx;
  const { toggle: onSwitchToggle, select: onSelectChange, setNumber: onNumberChange } = ctx.actions;

  const petType = getStateValue(hass, entities.sensors.type);
  const breed = getStateValue(hass, entities.sensors.breed_name);
  const age = getStateValue(hass, entities.sensors.age);
  const rfid = getStateValue(hass, entities.sensors.rfid);
  const linked = getNumericState(hass, entities.sensors.bound_device_nums);

  const weight = formatState(hass, entities.numbers.weight);
  const weightNum = getNumericState(hass, entities.numbers.weight);
  const weightGoalNum = getNumericState(hass, entities.numbers.weight_goal);
  const weightGoal = formatState(hass, entities.numbers.weight_goal);

  const neutered = isEntityOn(hass, entities.switches.sterilization);
  const sex = getStateValue(hass, entities.selects.pet_sex);
  const hasSex = sex !== undefined && sex !== 'none';

  // A goal of 0 means "not set" rather than a real target of zero, so the
  // weight tile only shows progress once the user has picked one.
  const hasWeightGoal = weightGoalNum !== undefined && weightGoalNum > 0;
  const weightProgress =
    hasWeightGoal && weightNum !== undefined
      ? Math.min(100, Math.round((weightNum / weightGoalNum) * 100))
      : undefined;

  const hasGoalSettings =
    entities.numbers.weight_goal ||
    entities.selects.feeding_goal ||
    entities.numbers.drinking_goal ||
    entities.numbers.walking_goal ||
    entities.numbers.playing_goal ||
    entities.numbers.training_goal;

  const hasProfileSettings = entities.selects.pet_sex || entities.switches.sterilization;

  return html`
    <div class="chip-row">
      ${petType ? html`
        <petlibro-chip icon=${speciesIcon(petType)}>${petType}</petlibro-chip>
      ` : nothing}
      ${hasSex ? html`
        <petlibro-chip icon=${sex === 'female' ? 'mdi:gender-female' : 'mdi:gender-male'}>
          ${sex}
        </petlibro-chip>
      ` : nothing}
      ${neutered ? html`
        <petlibro-chip icon="mdi:content-cut">Neutered</petlibro-chip>
      ` : nothing}
      ${linked !== undefined && linked > 0 ? html`
        <petlibro-chip icon="mdi:link-variant">${linked} linked</petlibro-chip>
      ` : nothing}
    </div>

    <div class="tile-grid">
      ${weight !== undefined ? html`
        <petlibro-tile
          icon="mdi:scale-bathroom"
          color="green"
          label=${hasWeightGoal ? `Weight (goal ${weightGoal})` : 'Weight'}
          value=${weight}
          .progress=${weightProgress}
          progress-variant="ok"
        ></petlibro-tile>
      ` : nothing}

      ${age !== undefined ? html`
        <petlibro-tile icon="mdi:cake-variant" color="pink" label="Age" value=${age}></petlibro-tile>
      ` : nothing}

      ${breed !== undefined ? html`
        <petlibro-tile
          .icon=${speciesIcon(petType)}
          color="purple"
          label="Breed"
          value=${breed}
        ></petlibro-tile>
      ` : nothing}

      ${rfid ? html`
        <petlibro-tile icon="mdi:nfc-variant" color="blue" label="RFID" value=${rfid}></petlibro-tile>
      ` : nothing}
    </div>

    ${showControls && hasGoalSettings ? html`
      <petlibro-section label="Goals" icon="mdi:target" open>
        ${renderSelectRow(
          hass,
          entities.selects.feeding_goal,
          'mdi:food-drumstick',
          'amber',
          'Dry Food',
          onSelectChange,
        )}
        ${renderNumberStepper(
          hass, entities.numbers.weight_goal, 'mdi:scale-bathroom', 'green', 'Weight', 'kg', onNumberChange, 0.1,
        )}
        ${renderNumberStepper(
          hass, entities.numbers.drinking_goal, 'mdi:cup-water', 'blue', 'Drinking', 'mL', onNumberChange, 10,
        )}
        ${renderNumberStepper(
          hass, entities.numbers.walking_goal, 'mdi:walk', 'green', 'Walking', 'min', onNumberChange, 5,
        )}
        ${renderNumberStepper(
          hass, entities.numbers.playing_goal, 'mdi:tennis-ball', 'purple', 'Playing', 'min', onNumberChange, 5,
        )}
        ${renderNumberStepper(
          hass, entities.numbers.training_goal, 'mdi:school', 'amber', 'Training', 'min', onNumberChange, 5,
        )}
      </petlibro-section>
    ` : nothing}

    ${showControls && hasProfileSettings ? html`
      <petlibro-section label="Profile" icon="mdi:card-account-details-outline">
        ${renderSelectRow(hass, entities.selects.pet_sex, 'mdi:gender-male-female', 'pink', 'Sex', onSelectChange)}
        ${entities.switches.sterilization ? html`
          <petlibro-entity-row
            icon="mdi:content-cut"
            .color=${neutered ? 'green' : 'default'}
            primary="Neutered / Spayed"
          >
            <ha-switch
              slot="trailing"
              ?checked=${neutered}
              @change=${() => onSwitchToggle(entities.switches.sterilization)}
            ></ha-switch>
          </petlibro-entity-row>
        ` : nothing}
      </petlibro-section>
    ` : nothing}
  `;
}
