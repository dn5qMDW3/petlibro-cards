import { html, nothing, type TemplateResult } from 'lit';
import type { DeviceEntities, HomeAssistant } from '../types';
import { getNumericState, getStateValue, isEntityOn } from '../utils';

export function renderFountainCard(
  hass: HomeAssistant,
  entities: DeviceEntities,
  onButtonPress: (entityId: string) => void,
): TemplateResult {
  const battery = getNumericState(hass, entities.sensors.electric_quantity);
  const waterPercent = getNumericState(hass, entities.sensors.weight_percent);
  const remainingWater = getStateValue(hass, entities.sensors.remaining_water);
  const remainingWaterUnit = hass.states[entities.sensors.remaining_water ?? '']?.attributes?.unit_of_measurement ?? 'mL';
  const todayDrinking = getStateValue(hass, entities.sensors.today_drinking_amount);
  const todayDrinkingUnit = hass.states[entities.sensors.today_drinking_amount ?? '']?.attributes?.unit_of_measurement ?? 'mL';
  const filterDays = getStateValue(hass, entities.sensors.remaining_filter_days);
  const cleaningDays = getStateValue(hass, entities.sensors.remaining_cleaning_days);
  const lightOn = isEntityOn(hass, entities.binary_sensors.light_switch);

  const waterGaugeClass = waterPercent !== undefined
    ? waterPercent <= 10 ? 'error' : waterPercent <= 25 ? 'warning' : ''
    : '';

  return html`
    <div class="metrics-grid">
      ${battery !== undefined ? html`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="${getBatteryIcon(battery)}"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Battery</div>
            <div class="metric-value">${Math.round(battery)}%</div>
          </div>
        </div>
      ` : nothing}

      ${waterPercent !== undefined ? html`
        <div class="metric-item ${waterPercent <= 10 ? 'alert' : ''}">
          <ha-icon class="metric-icon" icon="mdi:water-percent"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Water Level</div>
            <div class="metric-value">${Math.round(waterPercent)}%</div>
            <div class="gauge-bar">
              <div class="gauge-fill ${waterGaugeClass}" style="width: ${Math.min(100, waterPercent)}%"></div>
            </div>
          </div>
        </div>
      ` : nothing}

      ${remainingWater !== undefined ? html`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:water"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Remaining Water</div>
            <div class="metric-value">${Math.round(Number(remainingWater))} ${remainingWaterUnit}</div>
          </div>
        </div>
      ` : nothing}

      ${todayDrinking !== undefined ? html`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:cup-water"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Today's Drinking</div>
            <div class="metric-value">${todayDrinking} ${todayDrinkingUnit}</div>
          </div>
        </div>
      ` : nothing}

      ${filterDays !== undefined ? html`
        <div class="metric-item ${Number(filterDays) <= 3 ? 'alert' : ''}">
          <ha-icon class="metric-icon" icon="mdi:air-filter"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Filter</div>
            <div class="metric-value">${filterDays} days</div>
          </div>
        </div>
      ` : nothing}

      ${cleaningDays !== undefined ? html`
        <div class="metric-item ${Number(cleaningDays) <= 1 ? 'alert' : ''}">
          <ha-icon class="metric-icon" icon="mdi:broom"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Cleaning</div>
            <div class="metric-value">${cleaningDays} days</div>
          </div>
        </div>
      ` : nothing}
    </div>

    <div class="controls-row">
      ${entities.buttons.light_on || entities.buttons.light_off ? html`
        <button
          class="control-button ${lightOn ? 'active' : 'secondary'}"
          @click=${() => onButtonPress(lightOn ? entities.buttons.light_off : entities.buttons.light_on)}
        >
          <ha-icon icon="mdi:lightbulb${lightOn ? '' : '-outline'}"></ha-icon>
          Light
        </button>
      ` : nothing}

      ${entities.buttons.filter_reset ? html`
        <button class="control-button secondary" @click=${() => onButtonPress(entities.buttons.filter_reset)}>
          <ha-icon icon="mdi:air-filter"></ha-icon>
          Reset Filter
        </button>
      ` : nothing}

      ${entities.buttons.cleaning_reset ? html`
        <button class="control-button secondary" @click=${() => onButtonPress(entities.buttons.cleaning_reset)}>
          <ha-icon icon="mdi:broom"></ha-icon>
          Reset Cleaning
        </button>
      ` : nothing}
    </div>
  `;
}

function getBatteryIcon(level: number): string {
  if (level >= 90) return 'mdi:battery';
  if (level >= 70) return 'mdi:battery-70';
  if (level >= 50) return 'mdi:battery-50';
  if (level >= 30) return 'mdi:battery-30';
  if (level >= 10) return 'mdi:battery-10';
  return 'mdi:battery-alert';
}
