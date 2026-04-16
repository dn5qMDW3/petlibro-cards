import { html, nothing, type TemplateResult } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import type { DeviceEntities, HomeAssistant } from '../types';

/** Render a single metric tile (icon + label + value). */
export function renderMetricItem(
  icon: string,
  label: string,
  value: string | number,
  alertClass = '',
): TemplateResult {
  return html`
    <div class="metric-item ${alertClass}">
      <ha-icon class="metric-icon" icon="${icon}"></ha-icon>
      <div class="metric-content">
        <div class="metric-label">${label}</div>
        <div class="metric-value">${value}</div>
      </div>
    </div>
  `;
}

/** Render a metric tile with an inline gauge fill bar (uses styleMap, not inline string). */
export function renderGaugeMetric(
  icon: string,
  label: string,
  value: string | number,
  percent: number,
  gaugeClass = '',
  alertClass = '',
): TemplateResult {
  return html`
    <div class="metric-item ${alertClass}">
      <ha-icon class="metric-icon" icon="${icon}"></ha-icon>
      <div class="metric-content">
        <div class="metric-label">${label}</div>
        <div class="metric-value">${value}</div>
        <div class="gauge-track">
          <div
            class="gauge-fill ${gaugeClass}"
            style=${styleMap({ width: `${Math.min(100, Math.max(0, percent))}%` })}
          ></div>
        </div>
      </div>
    </div>
  `;
}

/** Render a stepper input (− value +) for a number entity. */
export function renderNumberStepper(
  hass: HomeAssistant,
  entityId: string | undefined,
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
    <div class="setting-row">
      <span class="setting-label">${label}</span>
      <div class="number-control">
        <button
          class="number-btn"
          @click=${() => onNumberChange(entityId, Math.max(min, current - step))}
        >−</button>
        <span class="value">${current}${unit}</span>
        <button
          class="number-btn"
          @click=${() => onNumberChange(entityId, Math.min(max, current + step))}
        >+</button>
      </div>
    </div>
  `;
}

/** Render a select dropdown for a select entity. */
export function renderSelectRow(
  hass: HomeAssistant,
  entityId: string | undefined,
  label: string,
  onSelectChange: (entityId: string, option: string) => void,
): TemplateResult | typeof nothing {
  if (!entityId || !hass.states[entityId]) return nothing;
  const options: string[] = (hass.states[entityId].attributes?.['options'] as string[] | undefined) ?? [];
  const current = hass.states[entityId].state;

  return html`
    <div class="setting-row">
      <span class="setting-label">${label}</span>
      <div class="setting-control">
        <select
          @change=${(e: Event) => onSelectChange(entityId, (e.target as HTMLSelectElement).value)}
        >
          ${options.map((opt) => html`
            <option value=${opt} ?selected=${current === opt}>${opt}</option>
          `)}
        </select>
      </div>
    </div>
  `;
}

/** Render the light toggle button (handles missing light_on or light_off correctly). */
export function renderLightToggleButton(
  entities: DeviceEntities,
  lightOn: boolean,
  onButtonPress: (entityId: string) => void,
): TemplateResult | typeof nothing {
  const targetId = lightOn ? entities.buttons.light_off : entities.buttons.light_on;
  if (!targetId) return nothing;

  return html`
    <button
      class="control-button ${lightOn ? 'active' : 'secondary'}"
      @click=${() => onButtonPress(targetId)}
    >
      <ha-icon icon="mdi:lightbulb${lightOn ? '' : '-outline'}"></ha-icon>
      Light
    </button>
  `;
}
