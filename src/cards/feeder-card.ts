import { html, nothing, type TemplateResult } from 'lit';
import type { DeviceEntities, HomeAssistant } from '../types';
import { formatTime, getNumericState, getStateValue, isEntityOn } from '../utils';

export function renderFeederCard(
  hass: HomeAssistant,
  entities: DeviceEntities,
  onButtonPress: (entityId: string) => void,
  onSwitchToggle: (entityId: string) => void,
  onSelectChange: (entityId: string, option: string) => void,
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
  const platePosition = getStateValue(hass, entities.selects.plate_position);
  const nextFeedingTime = getStateValue(hass, entities.sensors.next_feeding_time);
  const nextFeedingEndTime = getStateValue(hass, entities.sensors.next_feeding_end_time);
  const nextFeedingDay = getStateValue(hass, entities.sensors.feeding_schedule);
  const cleaningDays = getNumericState(hass, entities.sensors.remaining_cleaning_days);

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

      ${/* Polar Wet Food Feeder metrics */ ''}

      ${temperature !== undefined ? html`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:thermometer"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Temperature</div>
            <div class="metric-value">${temperature}${tempUnit}</div>
          </div>
        </div>
      ` : nothing}

      ${platePosition !== undefined ? html`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:rotate-3d-variant"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Plate Position</div>
            <div class="metric-value">${platePosition}</div>
          </div>
        </div>
      ` : nothing}

      ${nextFeedingTime !== undefined ? html`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:clock-outline"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Next Feeding</div>
            <div class="metric-value">
              ${nextFeedingDay ? `${nextFeedingDay} ` : ''}${nextFeedingTime}${nextFeedingEndTime ? ` – ${nextFeedingEndTime}` : ''}
            </div>
          </div>
        </div>
      ` : nothing}

      ${cleaningDays !== undefined ? html`
        <div class="metric-item ${cleaningDays <= 0 ? 'alert' : ''}">
          <ha-icon class="metric-icon" icon="mdi:spray-bottle"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Cleaning</div>
            <div class="metric-value">${cleaningDays} days</div>
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

    ${entities.selects.feeding_schedule ? html`
      <div class="settings-section">
        <div class="settings-section-title">Feeding Schedule</div>
        <div class="settings-grid">
          <div class="setting-row">
            <span class="setting-label">Plan</span>
            <div class="setting-control">
              <select
                @change=${(e: Event) => onSelectChange(
                  entities.selects.feeding_schedule,
                  (e.target as HTMLSelectElement).value,
                )}
              >
                ${(hass.states[entities.selects.feeding_schedule]?.attributes?.options ?? []).map(
                  (opt: string) => html`
                    <option
                      value=${opt}
                      ?selected=${hass.states[entities.selects.feeding_schedule]?.state === opt}
                    >${opt}</option>
                  `,
                )}
              </select>
            </div>
          </div>
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
