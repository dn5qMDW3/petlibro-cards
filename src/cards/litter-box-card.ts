import { html, nothing, type TemplateResult } from 'lit';
import type { DeviceEntities, HomeAssistant } from '../types';
import { getNumericState, getStateValue, isEntityOn } from '../utils';

export function renderLitterBoxCard(
  hass: HomeAssistant,
  entities: DeviceEntities,
  onButtonPress: (entityId: string) => void,
  onSwitchToggle: (entityId: string) => void,
  onSelectChange: (entityId: string, option: string) => void,
  onNumberChange: (entityId: string, value: number) => void,
): TemplateResult {
  const battery = getNumericState(hass, entities.sensors.electric_quantity);
  const litterPercent = getNumericState(hass, entities.sensors.weight_percent);
  const wasteFull = isEntityOn(hass, entities.binary_sensors.rubbish_full_state);
  const runningState = getStateValue(hass, entities.sensors.running_state);
  const cleaningDays = getStateValue(hass, entities.sensors.remaining_cleaning_days);
  const deodorMode = getStateValue(hass, entities.sensors.deodorization_mode);
  const lightOn = isEntityOn(hass, entities.switches.light_switch);
  const soundOn = isEntityOn(hass, entities.switches.sound_switch);
  const pottyTimes = getStateValue(hass, entities.sensors.today_potty_times);
  const pottyDuration = getStateValue(hass, entities.sensors.today_potty_duration);

  const litterGaugeClass = litterPercent !== undefined
    ? litterPercent <= 15 ? 'error' : litterPercent <= 30 ? 'warning' : ''
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

      ${litterPercent !== undefined ? html`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:gauge"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Litter Level</div>
            <div class="metric-value">${Math.round(litterPercent)}%</div>
            <div class="gauge-bar">
              <div class="gauge-fill ${litterGaugeClass}" style="width: ${Math.min(100, litterPercent)}%"></div>
            </div>
          </div>
        </div>
      ` : nothing}

      <div class="metric-item ${wasteFull ? 'alert' : ''}">
        <ha-icon class="metric-icon" icon="${wasteFull ? 'mdi:delete-alert' : 'mdi:delete-variant'}"></ha-icon>
        <div class="metric-content">
          <div class="metric-label">Waste Bin</div>
          <div class="metric-value">${wasteFull ? 'Full' : 'OK'}</div>
        </div>
      </div>

      ${runningState !== undefined ? html`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:state-machine"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Status</div>
            <div class="metric-value">${runningState}</div>
          </div>
        </div>
      ` : nothing}

      ${cleaningDays !== undefined ? html`
        <div class="metric-item ${Number(cleaningDays) <= 1 ? 'alert' : ''}">
          <ha-icon class="metric-icon" icon="mdi:broom"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Cleaning Due</div>
            <div class="metric-value">${cleaningDays} days</div>
          </div>
        </div>
      ` : nothing}

      ${pottyTimes !== undefined ? html`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:counter"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Potty Today</div>
            <div class="metric-value">${pottyTimes}x${pottyDuration ? ` (${pottyDuration}s)` : ''}</div>
          </div>
        </div>
      ` : nothing}

      ${deodorMode !== undefined ? html`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:air-purifier"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Deodorization</div>
            <div class="metric-value">${deodorMode}</div>
          </div>
        </div>
      ` : nothing}
    </div>

    <div class="controls-row">
      ${entities.buttons.trigger_clean ? html`
        <button class="control-button" @click=${() => onButtonPress(entities.buttons.trigger_clean)}>
          <ha-icon icon="mdi:broom"></ha-icon>
          Clean
        </button>
      ` : nothing}

      ${entities.buttons.trigger_stop_action ? html`
        <button class="control-button secondary" @click=${() => onButtonPress(entities.buttons.trigger_stop_action)}>
          <ha-icon icon="mdi:stop"></ha-icon>
          Stop
        </button>
      ` : nothing}

      ${entities.switches.light_switch ? html`
        <button
          class="control-button ${lightOn ? 'active' : 'secondary'}"
          @click=${() => onSwitchToggle(entities.switches.light_switch)}
        >
          <ha-icon icon="mdi:lightbulb${lightOn ? '' : '-outline'}"></ha-icon>
          Light
        </button>
      ` : nothing}

      ${entities.switches.sound_switch ? html`
        <button
          class="control-button ${soundOn ? 'active' : 'secondary'}"
          @click=${() => onSwitchToggle(entities.switches.sound_switch)}
        >
          <ha-icon icon="mdi:volume-${soundOn ? 'high' : 'off'}"></ha-icon>
          Sound
        </button>
      ` : nothing}

      ${entities.switches.after_deodorization_switch ? html`
        <button
          class="control-button ${isEntityOn(hass, entities.switches.after_deodorization_switch) ? 'active' : 'secondary'}"
          @click=${() => onSwitchToggle(entities.switches.after_deodorization_switch)}
        >
          <ha-icon icon="mdi:air-purifier"></ha-icon>
          Auto Deodorize
        </button>
      ` : nothing}

      ${entities.switches.avoid_repeat_clean ? html`
        <button
          class="control-button ${isEntityOn(hass, entities.switches.avoid_repeat_clean) ? 'active' : 'secondary'}"
          @click=${() => onSwitchToggle(entities.switches.avoid_repeat_clean)}
        >
          <ha-icon icon="mdi:repeat-off"></ha-icon>
          No Repeat
        </button>
      ` : nothing}

      ${entities.switches.enable_auto_clean_in_sleep_mode ? html`
        <button
          class="control-button ${isEntityOn(hass, entities.switches.enable_auto_clean_in_sleep_mode) ? 'active' : 'secondary'}"
          @click=${() => onSwitchToggle(entities.switches.enable_auto_clean_in_sleep_mode)}
        >
          <ha-icon icon="mdi:broom"></ha-icon>
          Sleep Clean
        </button>
      ` : nothing}

      ${entities.switches.enable_deodorization_in_sleep_mode ? html`
        <button
          class="control-button ${isEntityOn(hass, entities.switches.enable_deodorization_in_sleep_mode) ? 'active' : 'secondary'}"
          @click=${() => onSwitchToggle(entities.switches.enable_deodorization_in_sleep_mode)}
        >
          <ha-icon icon="mdi:weather-windy"></ha-icon>
          Sleep Deodorize
        </button>
      ` : nothing}

      ${entities.buttons.reset_filter ? html`
        <button class="control-button secondary" @click=${() => onButtonPress(entities.buttons.reset_filter)}>
          <ha-icon icon="mdi:air-filter"></ha-icon>
          Reset Filter
        </button>
      ` : nothing}

      ${entities.buttons.reset_cleaning ? html`
        <button class="control-button secondary" @click=${() => onButtonPress(entities.buttons.reset_cleaning)}>
          <ha-icon icon="mdi:broom"></ha-icon>
          Reset Clean
        </button>
      ` : nothing}

      ${entities.buttons.reset_mat ? html`
        <button class="control-button secondary" @click=${() => onButtonPress(entities.buttons.reset_mat)}>
          <ha-icon icon="mdi:rug"></ha-icon>
          Reset Mat
        </button>
      ` : nothing}
    </div>

    ${entities.selects.clean_mode || entities.selects.deodorization_wind_speed ||
      entities.numbers.volume || entities.numbers.auto_delay_sec || entities.numbers.duration_after_deodorization ? html`
      <div class="settings-section">
        <div class="settings-section-title">Settings</div>
        <div class="settings-grid">
          ${entities.selects.clean_mode ? html`
            <div class="setting-row">
              <span class="setting-label">Clean Mode</span>
              <div class="setting-control">
                <select
                  @change=${(e: Event) => onSelectChange(
                    entities.selects.clean_mode,
                    (e.target as HTMLSelectElement).value,
                  )}
                >
                  ${(hass.states[entities.selects.clean_mode]?.attributes?.options ?? []).map(
                    (opt: string) => html`
                      <option value=${opt} ?selected=${hass.states[entities.selects.clean_mode]?.state === opt}>${opt}</option>
                    `,
                  )}
                </select>
              </div>
            </div>
          ` : nothing}

          ${entities.selects.deodorization_wind_speed ? html`
            <div class="setting-row">
              <span class="setting-label">Wind Speed</span>
              <div class="setting-control">
                <select
                  @change=${(e: Event) => onSelectChange(
                    entities.selects.deodorization_wind_speed,
                    (e.target as HTMLSelectElement).value,
                  )}
                >
                  ${(hass.states[entities.selects.deodorization_wind_speed]?.attributes?.options ?? []).map(
                    (opt: string) => html`
                      <option value=${opt} ?selected=${hass.states[entities.selects.deodorization_wind_speed]?.state === opt}>${opt}</option>
                    `,
                  )}
                </select>
              </div>
            </div>
          ` : nothing}

          ${entities.numbers.volume ? (() => {
            const attrs = hass.states[entities.numbers.volume]?.attributes ?? {};
            const current = Number(hass.states[entities.numbers.volume]?.state ?? 0);
            const min = Number(attrs.min ?? 0);
            const max = Number(attrs.max ?? 100);
            const step = Number(attrs.step ?? 10);
            return html`
              <div class="setting-row">
                <span class="setting-label">Volume</span>
                <div class="number-control">
                  <button class="number-btn" @click=${() => onNumberChange(entities.numbers.volume, Math.max(min, current - step))}>−</button>
                  <span class="value">${current}%</span>
                  <button class="number-btn" @click=${() => onNumberChange(entities.numbers.volume, Math.min(max, current + step))}>+</button>
                </div>
              </div>
            `;
          })() : nothing}

          ${entities.numbers.auto_delay_sec ? (() => {
            const attrs = hass.states[entities.numbers.auto_delay_sec]?.attributes ?? {};
            const current = Number(hass.states[entities.numbers.auto_delay_sec]?.state ?? 0);
            const min = Number(attrs.min ?? 10);
            const max = Number(attrs.max ?? 600);
            const step = Number(attrs.step ?? 10);
            return html`
              <div class="setting-row">
                <span class="setting-label">Clean Delay</span>
                <div class="number-control">
                  <button class="number-btn" @click=${() => onNumberChange(entities.numbers.auto_delay_sec, Math.max(min, current - step))}>−</button>
                  <span class="value">${current}s</span>
                  <button class="number-btn" @click=${() => onNumberChange(entities.numbers.auto_delay_sec, Math.min(max, current + step))}>+</button>
                </div>
              </div>
            `;
          })() : nothing}

          ${entities.numbers.duration_after_deodorization ? (() => {
            const attrs = hass.states[entities.numbers.duration_after_deodorization]?.attributes ?? {};
            const current = Number(hass.states[entities.numbers.duration_after_deodorization]?.state ?? 0);
            const min = Number(attrs.min ?? 1);
            const max = Number(attrs.max ?? 30);
            const step = Number(attrs.step ?? 1);
            return html`
              <div class="setting-row">
                <span class="setting-label">Deodorize Time</span>
                <div class="number-control">
                  <button class="number-btn" @click=${() => onNumberChange(entities.numbers.duration_after_deodorization, Math.max(min, current - step))}>−</button>
                  <span class="value">${current}m</span>
                  <button class="number-btn" @click=${() => onNumberChange(entities.numbers.duration_after_deodorization, Math.min(max, current + step))}>+</button>
                </div>
              </div>
            `;
          })() : nothing}
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
