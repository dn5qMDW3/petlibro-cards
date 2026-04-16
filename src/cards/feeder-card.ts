import { html, nothing, type TemplateResult } from 'lit';
import type { DeviceEntities, HomeAssistant } from '../types';
import { formatTime, getBatteryIcon, getNumericState, getStateValue, isEntityOn } from '../utils';
import { renderLightToggleButton, renderMetricItem, renderSelectRow } from './shared';

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
  const planState = isEntityOn(hass, entities.binary_sensors.feeding_plan_state)
    ? 'Active' : entities.binary_sensors.feeding_plan_state ? 'Inactive' : undefined;
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

  return html`
    <div class="metrics-grid">
      ${battery !== undefined ? renderMetricItem(getBatteryIcon(battery), 'Battery', `${Math.round(battery)}%`) : nothing}

      ${renderMetricItem(
        foodLow ? 'mdi:bowl-mix-outline' : 'mdi:bowl-outline',
        'Food Status',
        foodLow ? 'Low' : 'OK',
        foodLow ? 'alert' : '',
      )}

      ${todayQty !== undefined ? renderMetricItem(
        'mdi:scale',
        'Fed Today',
        `${todayQty} ${todayUnit}${todayTimes ? ` (${todayTimes}x)` : ''}`,
      ) : nothing}

      ${lastFeed ? renderMetricItem('mdi:history', 'Last Feed', lastFeed) : nothing}

      ${nextFeed ? renderMetricItem(
        'mdi:calendar-arrow-right',
        'Next Feed',
        `${nextFeed}${nextQty ? ` (${nextQty} ${nextUnit})` : ''}`,
      ) : nothing}

      ${planState !== undefined ? renderMetricItem('mdi:calendar-check', 'Feeding Plan', planState) : nothing}

      ${/* Polar Wet Food Feeder metrics */ ''}

      ${temperature !== undefined ? renderMetricItem('mdi:thermometer', 'Temperature', `${temperature}${tempUnit}`) : nothing}

      ${platePosition !== undefined ? renderMetricItem('mdi:rotate-3d-variant', 'Plate Position', platePosition) : nothing}

      ${nextFeedingTime !== undefined ? renderMetricItem(
        'mdi:clock-outline',
        'Next Feeding',
        `${nextFeedingDay ? `${nextFeedingDay} ` : ''}${nextFeedingTime}${nextFeedingEndTime ? ` – ${nextFeedingEndTime}` : ''}`,
      ) : nothing}

    </div>

    ${showControls ? html`
    <div class="controls-row">
      ${entities.buttons.manual_feed ? html`
        <button class="control-button" @click=${() => onButtonPress(entities.buttons.manual_feed)}>
          <ha-icon icon="mdi:food-drumstick"></ha-icon>
          Feed Now
        </button>
      ` : nothing}

      ${/* Polar: Open/Close Lid switch (instead of Feed Now button) */ ''}
      ${entities.switches.manual_feed_now ? html`
        <button
          class="control-button ${isEntityOn(hass, entities.switches.manual_feed_now) ? 'active' : ''}"
          @click=${() => onSwitchToggle(entities.switches.manual_feed_now)}
        >
          <ha-icon icon="mdi:door-open"></ha-icon>
          Open Lid
        </button>
      ` : nothing}

      ${entities.buttons.rotate_food_bowl ? html`
        <button class="control-button" @click=${() => onButtonPress(entities.buttons.rotate_food_bowl)}>
          <ha-icon icon="mdi:rotate-3d-variant"></ha-icon>
          Rotate
        </button>
      ` : nothing}

      ${entities.buttons.ring_bell ? html`
        <button class="control-button" @click=${() => onButtonPress(entities.buttons.ring_bell)}>
          <ha-icon icon="mdi:bell-ring"></ha-icon>
          Ring
        </button>
      ` : nothing}

      ${renderLightToggleButton(entities, lightOn, onButtonPress)}
    </div>

    ${entities.selects.feeding_plan_select ? html`
      <div class="settings-section">
        <div class="settings-section-title">Feeding Schedule</div>
        <div class="settings-grid">
          ${renderSelectRow(hass, entities.selects.feeding_plan_select, 'Plan', onSelectChange)}
        </div>
        <div class="controls-row" style="margin-top: 8px">
          ${entities.buttons.feeding_plan_enable ? html`
            <button class="control-button" @click=${() => onButtonPress(entities.buttons.feeding_plan_enable)}>
              <ha-icon icon="mdi:check"></ha-icon>
              Enable
            </button>
          ` : nothing}
          ${entities.buttons.feeding_plan_disable ? html`
            <button class="control-button secondary" @click=${() => onButtonPress(entities.buttons.feeding_plan_disable)}>
              <ha-icon icon="mdi:close"></ha-icon>
              Disable
            </button>
          ` : nothing}
          ${entities.buttons.feeding_plan_today_enable_all ? html`
            <button class="control-button" @click=${() => onButtonPress(entities.buttons.feeding_plan_today_enable_all)}>
              <ha-icon icon="mdi:calendar-check"></ha-icon>
              Enable All Today
            </button>
          ` : nothing}
          ${entities.buttons.feeding_plan_today_disable_all ? html`
            <button class="control-button secondary" @click=${() => onButtonPress(entities.buttons.feeding_plan_today_disable_all)}>
              <ha-icon icon="mdi:calendar-remove"></ha-icon>
              Disable All Today
            </button>
          ` : nothing}
        </div>
      </div>
    ` : nothing}
    ` : nothing}
  `;
}
