import { html, nothing, type TemplateResult } from 'lit';
import type { DeviceEntities, HomeAssistant } from '../types';
import { getBatteryIcon, getNumericState, getStateValue, isEntityOn } from '../utils';
import { renderGaugeMetric, renderLightToggleButton, renderMetricItem } from './shared';

export function renderFountainCard(
  hass: HomeAssistant,
  entities: DeviceEntities,
  onButtonPress: (entityId: string) => void,
  showControls: boolean = true,
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
      ${battery !== undefined ? renderMetricItem(getBatteryIcon(battery), 'Battery', `${Math.round(battery)}%`) : nothing}

      ${waterPercent !== undefined ? renderGaugeMetric(
        'mdi:water-percent',
        'Water Level',
        `${Math.round(waterPercent)}%`,
        waterPercent,
        waterGaugeClass,
        waterPercent <= 10 ? 'alert' : '',
      ) : nothing}

      ${remainingWater !== undefined ? renderMetricItem(
        'mdi:water',
        'Remaining Water',
        `${Math.round(Number(remainingWater))} ${remainingWaterUnit}`,
      ) : nothing}

      ${todayDrinking !== undefined ? renderMetricItem(
        'mdi:cup-water',
        "Today's Drinking",
        `${todayDrinking} ${todayDrinkingUnit}`,
      ) : nothing}

      ${filterDays !== undefined ? renderMetricItem(
        'mdi:air-filter',
        'Filter',
        `${filterDays} days`,
        Number(filterDays) <= 3 ? 'alert' : '',
      ) : nothing}

      ${cleaningDays !== undefined ? renderMetricItem(
        'mdi:broom',
        'Cleaning',
        `${cleaningDays} days`,
        Number(cleaningDays) <= 1 ? 'alert' : '',
      ) : nothing}
    </div>

    ${showControls ? html`
    <div class="controls-row">
      ${renderLightToggleButton(entities, lightOn, onButtonPress)}

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
    ` : nothing}
  `;
}
