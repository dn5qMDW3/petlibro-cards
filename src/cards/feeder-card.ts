import { html, nothing, type TemplateResult } from 'lit';
import type { DeviceEntities, HomeAssistant } from '../types';
import { formatTime, getBatteryIcon, getNumericState, getStateValue, isEntityOn } from '../utils';
import { renderLightToggleButton, renderSelectRow } from './shared';

export function renderFeederCard(
  hass: HomeAssistant,
  entities: DeviceEntities,
  onButtonPress: (entityId: string) => void,
  onSwitchToggle: (entityId: string) => void,
  onSelectChange: (entityId: string, option: string) => void,
  showControls: boolean = true,
): TemplateResult {
  const battery = getNumericState(hass, entities.sensors.electric_quantity);
  const foodLow = isEntityOn(hass, entities.binary_sensors.food_low);
  const todayQty = getStateValue(hass, entities.sensors.today_feeding_quantity_weight);
  const todayTimes = getStateValue(hass, entities.sensors.today_feeding_times);
  const lastFeed = formatTime(hass, entities.sensors.last_feed_time);
  const nextFeed = formatTime(hass, entities.sensors.next_feed_time);
  const nextQty = getStateValue(hass, entities.sensors.next_feed_quantity_weight);
  const planAvailable = entities.binary_sensors.feeding_plan_state !== undefined;
  const planActive = isEntityOn(hass, entities.binary_sensors.feeding_plan_state);
  const todayUnit = hass.states[entities.sensors.today_feeding_quantity_weight ?? '']?.attributes?.unit_of_measurement ?? 'g';
  const nextUnit = hass.states[entities.sensors.next_feed_quantity_weight ?? '']?.attributes?.unit_of_measurement ?? 'g';
  const lightOn = isEntityOn(hass, entities.binary_sensors.light_switch);

  // Polar Wet Food Feeder specific
  const temperature = getStateValue(hass, entities.sensors.temperature);
  const tempUnit = hass.states[entities.sensors.temperature ?? '']?.attributes?.unit_of_measurement ?? '°F';
  const platePosition = getStateValue(hass, entities.sensors.plate_position);
  const nextFeedingTime = getStateValue(hass, entities.sensors.next_feeding_time);
  const nextFeedingEndTime = getStateValue(hass, entities.sensors.next_feeding_end_time);
  const nextFeedingDay = getStateValue(hass, entities.sensors.next_feeding_day);

  const batteryColor = battery === undefined ? 'default' : battery <= 20 ? 'red' : battery <= 50 ? 'amber' : 'green';

  return html`
    ${foodLow ? html`
      <div class="chip-row">
        <petlibro-chip icon="mdi:bowl-mix-outline" variant="warn">Food Low</petlibro-chip>
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

      <petlibro-tile
        icon=${foodLow ? 'mdi:bowl-mix-outline' : 'mdi:bowl-outline'}
        color=${foodLow ? 'red' : 'green'}
        label="Food Status"
        value=${foodLow ? 'Low' : 'OK'}
      ></petlibro-tile>

      ${todayQty !== undefined ? html`
        <petlibro-tile
          icon="mdi:scale"
          color="blue"
          label="Fed Today"
          value="${todayQty} ${todayUnit}${todayTimes ? ` (${todayTimes}x)` : ''}"
        ></petlibro-tile>
      ` : nothing}

      ${lastFeed ? html`
        <petlibro-tile icon="mdi:history" color="pink" label="Last Feed" value=${lastFeed}></petlibro-tile>
      ` : nothing}

      ${nextFeed ? html`
        <petlibro-tile
          icon="mdi:calendar-arrow-right"
          color="amber"
          label="Next Feed"
          value="${nextFeed}${nextQty ? ` (${nextQty} ${nextUnit})` : ''}"
        ></petlibro-tile>
      ` : nothing}

      ${planAvailable ? html`
        <petlibro-tile
          icon="mdi:calendar-check"
          color="purple"
          label="Feeding Plan"
          value=${planActive ? 'Active' : 'Inactive'}
        ></petlibro-tile>
      ` : nothing}

      ${temperature !== undefined ? html`
        <petlibro-tile
          icon="mdi:thermometer"
          color="amber"
          label="Temperature"
          value="${temperature}${tempUnit}"
        ></petlibro-tile>
      ` : nothing}

      ${platePosition !== undefined ? html`
        <petlibro-tile
          icon="mdi:rotate-3d-variant"
          color="purple"
          label="Plate Position"
          value=${String(platePosition)}
        ></petlibro-tile>
      ` : nothing}

      ${nextFeedingTime !== undefined ? html`
        <petlibro-tile
          icon="mdi:clock-outline"
          color="amber"
          label="Next Feeding"
          value="${nextFeedingDay ? `${nextFeedingDay} ` : ''}${nextFeedingTime}${nextFeedingEndTime ? ` – ${nextFeedingEndTime}` : ''}"
        ></petlibro-tile>
      ` : nothing}
    </div>

    ${showControls ? html`
      <div class="chip-controls">
        ${entities.buttons.manual_feed ? html`
          <petlibro-pill-button
            icon="mdi:food-drumstick"
            variant="primary"
            @click=${() => onButtonPress(entities.buttons.manual_feed)}
          >Feed Now</petlibro-pill-button>
        ` : nothing}

        ${entities.switches.manual_feed_now ? html`
          <petlibro-pill-button
            icon="mdi:door-open"
            ?active=${isEntityOn(hass, entities.switches.manual_feed_now)}
            @click=${() => onSwitchToggle(entities.switches.manual_feed_now)}
          >Open Lid</petlibro-pill-button>
        ` : nothing}

        ${entities.buttons.rotate_food_bowl ? html`
          <petlibro-pill-button
            icon="mdi:rotate-3d-variant"
            @click=${() => onButtonPress(entities.buttons.rotate_food_bowl)}
          >Rotate</petlibro-pill-button>
        ` : nothing}

        ${entities.buttons.ring_bell ? html`
          <petlibro-pill-button
            icon="mdi:bell-ring"
            @click=${() => onButtonPress(entities.buttons.ring_bell)}
          >Ring</petlibro-pill-button>
        ` : nothing}

        ${renderLightToggleButton(entities, lightOn, onButtonPress)}
      </div>
    ` : nothing}

    ${showControls && entities.selects.feeding_plan_select ? html`
      <div class="settings">
        ${renderSelectRow(
          hass,
          entities.selects.feeding_plan_select,
          'mdi:calendar-clock',
          'purple',
          'Feeding Plan',
          onSelectChange,
        )}
      </div>
      <div class="chip-controls">
        ${entities.buttons.feeding_plan_enable ? html`
          <petlibro-pill-button
            icon="mdi:check"
            @click=${() => onButtonPress(entities.buttons.feeding_plan_enable)}
          >Enable</petlibro-pill-button>
        ` : nothing}
        ${entities.buttons.feeding_plan_disable ? html`
          <petlibro-pill-button
            icon="mdi:close"
            @click=${() => onButtonPress(entities.buttons.feeding_plan_disable)}
          >Disable</petlibro-pill-button>
        ` : nothing}
        ${entities.buttons.feeding_plan_today_enable_all ? html`
          <petlibro-pill-button
            icon="mdi:calendar-check"
            @click=${() => onButtonPress(entities.buttons.feeding_plan_today_enable_all)}
          >Enable All Today</petlibro-pill-button>
        ` : nothing}
        ${entities.buttons.feeding_plan_today_disable_all ? html`
          <petlibro-pill-button
            icon="mdi:calendar-remove"
            @click=${() => onButtonPress(entities.buttons.feeding_plan_today_disable_all)}
          >Disable All Today</petlibro-pill-button>
        ` : nothing}
      </div>
    ` : nothing}
  `;
}
