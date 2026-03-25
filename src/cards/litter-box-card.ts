import { html, nothing, type TemplateResult } from 'lit';
import type { DeviceEntities, HomeAssistant } from '../types';
import { getNumericState, getStateValue, isEntityOn } from '../utils';

export function renderLitterBoxCard(
  hass: HomeAssistant,
  entities: DeviceEntities,
  onButtonPress: (entityId: string) => void,
  onSwitchToggle: (entityId: string) => void,
): TemplateResult {
  const battery = getNumericState(hass, entities.sensors.electric_quantity);
  const litterPercent = getNumericState(hass, entities.sensors.weight_percent);
  const wasteFull = isEntityOn(hass, entities.binary_sensors.rubbish_full_state);
  const runningState = getStateValue(hass, entities.sensors.running_state);
  const cleaningDays = getStateValue(hass, entities.sensors.remaining_cleaning_days);
  const deodorMode = getStateValue(hass, entities.sensors.deodorization_mode);
  const lightOn = isEntityOn(hass, entities.switches.light_switch);
  const soundOn = isEntityOn(hass, entities.switches.sound_switch);

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
