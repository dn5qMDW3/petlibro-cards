import { html, nothing, type TemplateResult } from 'lit';
import type { PetColor } from '../components/shape-icon';
import type { CardContext, DeviceEntities, HomeAssistant } from '../types';
import { entityLabel, isEntityOn } from '../utils';

/**
 * Render an entity-row wrapping a native <select>. Kept as a helper because
 * at least three call sites need it (feeder feeding_plan_select, litter-box
 * clean_mode + deodorization_wind_speed).
 */
export function renderSelectRow(
  hass: HomeAssistant,
  entityId: string | undefined,
  icon: string,
  color: PetColor,
  label: string,
  onSelectChange: (entityId: string, option: string) => void,
): TemplateResult | typeof nothing {
  if (!entityId || !hass.states[entityId]) return nothing;
  const options: string[] = (hass.states[entityId].attributes?.['options'] as string[] | undefined) ?? [];
  const current = hass.states[entityId].state;

  return html`
    <petlibro-entity-row .icon=${icon} .color=${color} .primary=${label}>
      <select
        slot="trailing"
        class="pet-select"
        @change=${(e: Event) => onSelectChange(entityId, (e.target as HTMLSelectElement).value)}
      >
        ${options.map((opt) => html`
          <option value=${opt} ?selected=${current === opt}>${opt}</option>
        `)}
      </select>
    </petlibro-entity-row>
  `;
}

/**
 * Render an entity-row wrapping a <petlibro-stepper> for a number entity.
 * Called three times from litter-box (volume, auto_delay_sec, duration_after_deodorization).
 */
export function renderNumberStepper(
  hass: HomeAssistant,
  entityId: string | undefined,
  icon: string,
  color: PetColor,
  label: string,
  unit: string,
  onNumberChange: (entityId: string, value: number) => void,
  defaultStep = 1,
): TemplateResult | typeof nothing {
  if (!entityId || !hass.states[entityId]) return nothing;
  const attrs = hass.states[entityId].attributes ?? {};
  const current = Number(hass.states[entityId].state ?? 0);
  const min = Number(attrs['min'] ?? 0);
  const max = Number(attrs['max'] ?? 100);
  const step = Number(attrs['step'] ?? defaultStep);

  return html`
    <petlibro-entity-row .icon=${icon} .color=${color} .primary=${label}>
      <petlibro-stepper
        slot="trailing"
        .value=${current}
        .min=${min}
        .max=${max}
        .step=${step}
        .unit=${unit}
        @petlibro-stepper-change=${(e: CustomEvent<{ value: number }>) =>
          onNumberChange(entityId, e.detail.value)}
      ></petlibro-stepper>
    </petlibro-entity-row>
  `;
}

/**
 * Render the Light pill button, resolving the correct target button id
 * (light_on vs light_off) from the entity map. Used by feeder + fountain.
 */
export function renderLightToggleButton(
  entities: DeviceEntities,
  lightOn: boolean,
  onButtonPress: (entityId: string) => void,
): TemplateResult | typeof nothing {
  const targetId = lightOn ? entities.buttons.light_off : entities.buttons.light_on;
  if (!targetId) return nothing;

  return html`
    <petlibro-pill-button
      icon="mdi:lightbulb${lightOn ? '' : '-outline'}"
      ?active=${lightOn}
      @click=${() => onButtonPress(targetId)}
    >Light</petlibro-pill-button>
  `;
}


/**
 * Render every notification toggle the device exposes, inside a collapsed
 * section.
 *
 * Deliberately generic: it picks up any switch whose key starts with `notice_`
 * and takes its label from the entity registry. A device can have a dozen of
 * these and the integration keeps adding more, so enumerating them here would
 * only go stale — and the registry label is already localised.
 */
export function renderAlertsSection(ctx: CardContext): TemplateResult | typeof nothing {
  const { hass, entities } = ctx;

  const alerts = Object.entries(entities.switches)
    .filter(([key]) => key.startsWith('notice_'))
    .map(([key, entityId]) => ({ key, entityId }))
    .filter(({ entityId }) => hass.states[entityId] !== undefined)
    .map(({ key, entityId }) => ({
      key,
      entityId,
      label: entityLabel(hass, entityId),
      on: isEntityOn(hass, entityId),
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  if (alerts.length === 0) return nothing;

  const enabled = alerts.filter((a) => a.on).length;

  return html`
    <petlibro-section
      label="Alerts"
      icon="mdi:bell-outline"
      summary="${enabled} of ${alerts.length} on"
    >
      ${alerts.map(
        (a) => html`
          <petlibro-entity-row
            .icon=${a.on ? 'mdi:bell' : 'mdi:bell-off-outline'}
            .color=${a.on ? 'amber' : 'default'}
            .primary=${a.label}
          >
            <ha-switch
              slot="trailing"
              ?checked=${a.on}
              @change=${() => ctx.actions.toggle(a.entityId)}
            ></ha-switch>
          </petlibro-entity-row>
        `,
      )}
    </petlibro-section>
  `;
}
