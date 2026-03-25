import { html, nothing, type TemplateResult } from 'lit';
import type { DeviceEntities, HomeAssistant } from '../types';
import { formatTime, getNumericState, getStateValue, isEntityOn } from '../utils';

export function renderFeederCard(
  hass: HomeAssistant,
  entities: DeviceEntities,
  onButtonPress: (entityId: string) => void,
): TemplateResult {
  const battery = getNumericState(hass, entities.sensors.electric_quantity);
  const foodLow = isEntityOn(hass, entities.binary_sensors.food_low);
  const todayQty = getStateValue(hass, entities.sensors.today_feeding_quantity_weight);
  const todayTimes = getStateValue(hass, entities.sensors.today_feeding_times);
  const lastFeed = formatTime(hass, entities.sensors.last_feed_time);
  const nextFeed = formatTime(hass, entities.sensors.next_feed_time);
  const nextQty = getStateValue(hass, entities.sensors.next_feed_quantity_weight);
  const planState = getStateValue(hass, entities.sensors.feeding_plan_state);
  const todayUnit = hass.states[entities.sensors.today_feeding_quantity_weight ?? '']?.attributes?.unit_of_measurement ?? 'g';
  const nextUnit = hass.states[entities.sensors.next_feed_quantity_weight ?? '']?.attributes?.unit_of_measurement ?? 'g';
  const lightOn = isEntityOn(hass, entities.binary_sensors.light_switch);

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

      <div class="metric-item ${foodLow ? 'alert' : ''}">
        <ha-icon class="metric-icon" icon="${foodLow ? 'mdi:bowl-mix-outline' : 'mdi:bowl-outline'}"></ha-icon>
        <div class="metric-content">
          <div class="metric-label">Food Status</div>
          <div class="metric-value">${foodLow ? 'Low' : 'OK'}</div>
        </div>
      </div>

      ${todayQty !== undefined ? html`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:scale"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Fed Today</div>
            <div class="metric-value">${todayQty} ${todayUnit}${todayTimes ? ` (${todayTimes}x)` : ''}</div>
          </div>
        </div>
      ` : nothing}

      ${lastFeed ? html`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:history"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Last Feed</div>
            <div class="metric-value">${lastFeed}</div>
          </div>
        </div>
      ` : nothing}

      ${nextFeed ? html`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:calendar-arrow-right"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Next Feed</div>
            <div class="metric-value">${nextFeed}${nextQty ? ` (${nextQty} ${nextUnit})` : ''}</div>
          </div>
        </div>
      ` : nothing}

      ${planState !== undefined ? html`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:calendar-check"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Feeding Plan</div>
            <div class="metric-value">${planState}</div>
          </div>
        </div>
      ` : nothing}
    </div>

    <div class="controls-row">
      ${entities.buttons.manual_feed ? html`
        <button class="control-button" @click=${() => onButtonPress(entities.buttons.manual_feed)}>
          <ha-icon icon="mdi:food-drumstick"></ha-icon>
          Feed Now
        </button>
      ` : nothing}

      ${entities.buttons.light_on || entities.buttons.light_off ? html`
        <button
          class="control-button ${lightOn ? 'active' : 'secondary'}"
          @click=${() => onButtonPress(lightOn ? entities.buttons.light_off : entities.buttons.light_on)}
        >
          <ha-icon icon="mdi:lightbulb${lightOn ? '' : '-outline'}"></ha-icon>
          Light
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
