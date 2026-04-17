import { html, nothing, type TemplateResult } from 'lit';
import type { DeviceEntities, HomeAssistant } from '../types';
import { getBatteryIcon, getNumericState, getStateValue, isEntityOn } from '../utils';
import { renderLightToggleButton } from './shared';

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

  const batteryColor = battery === undefined ? 'default' : battery <= 20 ? 'red' : battery <= 50 ? 'amber' : 'green';
  const waterVariant = waterPercent === undefined
    ? 'ok'
    : waterPercent <= 10 ? 'alert' : waterPercent <= 25 ? 'warn' : 'ok';
  const waterColor = waterPercent === undefined
    ? 'blue'
    : waterPercent <= 10 ? 'red' : waterPercent <= 25 ? 'amber' : 'blue';
  const waterLowChip = waterPercent !== undefined && waterPercent <= 25
    ? (waterPercent <= 10 ? 'alert' : 'warn')
    : undefined;

  return html`
    ${waterLowChip ? html`
      <div class="chip-row">
        <petlibro-chip icon="mdi:water-alert" variant=${waterLowChip}>Water Low</petlibro-chip>
      </div>
    ` : nothing}

    <div class="tile-grid">
      ${battery !== undefined ? html`
        <petlibro-tile
          .icon=${getBatteryIcon(battery)}
          .color=${batteryColor}
          label="Battery"
          value="${Math.round(battery)}%"
        ></petlibro-tile>
      ` : nothing}

      ${waterPercent !== undefined ? html`
        <petlibro-tile
          icon="mdi:water-percent"
          .color=${waterColor}
          label="Water Level"
          value="${Math.round(waterPercent)}%"
          .progress=${waterPercent}
          progress-variant=${waterVariant}
        ></petlibro-tile>
      ` : nothing}

      ${remainingWater !== undefined ? html`
        <petlibro-tile
          icon="mdi:water"
          color="blue"
          label="Remaining Water"
          value="${Math.round(Number(remainingWater))} ${remainingWaterUnit}"
        ></petlibro-tile>
      ` : nothing}

      ${todayDrinking !== undefined ? html`
        <petlibro-tile
          icon="mdi:cup-water"
          color="blue"
          label="Today's Drinking"
          value="${todayDrinking} ${todayDrinkingUnit}"
        ></petlibro-tile>
      ` : nothing}

      ${filterDays !== undefined ? html`
        <petlibro-tile
          icon="mdi:air-filter"
          .color=${Number(filterDays) <= 3 ? 'red' : 'pink'}
          label="Filter"
          value="${filterDays} days"
        ></petlibro-tile>
      ` : nothing}

      ${cleaningDays !== undefined ? html`
        <petlibro-tile
          icon="mdi:broom"
          .color=${Number(cleaningDays) <= 1 ? 'red' : 'purple'}
          label="Cleaning"
          value="${cleaningDays} days"
        ></petlibro-tile>
      ` : nothing}
    </div>

    ${showControls ? html`
      <div class="chip-controls">
        ${renderLightToggleButton(entities, lightOn, onButtonPress)}

        ${entities.buttons.filter_reset ? html`
          <petlibro-pill-button
            icon="mdi:air-filter"
            @click=${() => onButtonPress(entities.buttons.filter_reset)}
          >Reset Filter</petlibro-pill-button>
        ` : nothing}

        ${entities.buttons.cleaning_reset ? html`
          <petlibro-pill-button
            icon="mdi:broom"
            @click=${() => onButtonPress(entities.buttons.cleaning_reset)}
          >Reset Cleaning</petlibro-pill-button>
        ` : nothing}
      </div>
    ` : nothing}
  `;
}
