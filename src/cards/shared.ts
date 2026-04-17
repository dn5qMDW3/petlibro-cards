import { html, nothing, type TemplateResult } from 'lit';
import type { PetColor } from '../components/shape-icon';
import type { DeviceEntities, HomeAssistant } from '../types';

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
