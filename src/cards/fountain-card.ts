import { html, nothing, type TemplateResult } from 'lit';
import type { CardContext } from '../types';
import { formatState, getBatteryIcon, getNumericState, getStateValue, isEntityOn } from '../utils';
import { renderAlertsSection, renderLightToggleButton } from './shared';

export function renderFountainCard(ctx: CardContext): TemplateResult {
  const { hass, entities, showControls } = ctx;
  const onButtonPress = ctx.actions.press;
  const battery = getNumericState(hass, entities.sensors.electric_quantity);
  const waterPercent = getNumericState(hass, entities.sensors.weight_percent);
  const remainingWater = formatState(hass, entities.sensors.remaining_water);
  const todayDrinking = formatState(hass, entities.sensors.today_drinking_amount);
  const yesterdayDrinking = formatState(hass, entities.sensors.yesterday_drinking_amount);
  const drinkCount = getStateValue(hass, entities.sensors.today_drinking_count);
  const drinkTime = formatState(hass, entities.sensors.today_drinking_time);
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
          value=${remainingWater}
        ></petlibro-tile>
      ` : nothing}

      ${todayDrinking !== undefined ? html`
        <petlibro-tile
          icon="mdi:cup-water"
          color="blue"
          label="Today's Drinking"
          value=${todayDrinking}
        ></petlibro-tile>
      ` : nothing}

      ${yesterdayDrinking !== undefined ? html`
        <petlibro-tile
          icon="mdi:cup-outline"
          color="default"
          label="Yesterday"
          value=${yesterdayDrinking}
        ></petlibro-tile>
      ` : nothing}

      ${drinkCount !== undefined ? html`
        <petlibro-tile
          icon="mdi:counter"
          color="blue"
          label="Drinks Today"
          value="${drinkCount}"
        ></petlibro-tile>
      ` : nothing}

      ${drinkTime !== undefined ? html`
        <petlibro-tile
          icon="mdi:timer-sand"
          color="blue"
          label="Drinking Time"
          value=${drinkTime}
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

    ${showControls ? renderAlertsSection(ctx) : nothing}
  `;
}
