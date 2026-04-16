import { html, nothing, type TemplateResult } from 'lit';
import type { DeviceEntities, HomeAssistant } from '../types';
import { getBatteryIcon, getNumericState, getStateValue, isEntityOn } from '../utils';
import { renderGaugeMetric, renderMetricItem, renderNumberStepper, renderSelectRow } from './shared';

export function renderLitterBoxCard(
  hass: HomeAssistant,
  entities: DeviceEntities,
  onButtonPress: (entityId: string) => void,
  onSwitchToggle: (entityId: string) => void,
  onSelectChange: (entityId: string, option: string) => void,
  onNumberChange: (entityId: string, value: number) => void,
  showControls: boolean = true,
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
      ${battery !== undefined ? renderMetricItem(getBatteryIcon(battery), 'Battery', `${Math.round(battery)}%`) : nothing}

      ${litterPercent !== undefined ? renderGaugeMetric(
        'mdi:gauge',
        'Litter Level',
        `${Math.round(litterPercent)}%`,
        litterPercent,
        litterGaugeClass,
      ) : nothing}

      ${renderMetricItem(
        wasteFull ? 'mdi:delete-alert' : 'mdi:delete-variant',
        'Waste Bin',
        wasteFull ? 'Full' : 'OK',
        wasteFull ? 'alert' : '',
      )}

      ${runningState !== undefined ? renderMetricItem('mdi:state-machine', 'Status', runningState) : nothing}

      ${cleaningDays !== undefined ? renderMetricItem(
        'mdi:broom',
        'Cleaning Due',
        `${cleaningDays} days`,
        Number(cleaningDays) <= 1 ? 'alert' : '',
      ) : nothing}

      ${pottyTimes !== undefined ? renderMetricItem(
        'mdi:counter',
        'Potty Today',
        `${pottyTimes}x${pottyDuration ? ` (${pottyDuration}s)` : ''}`,
      ) : nothing}

      ${deodorMode !== undefined ? renderMetricItem('mdi:air-purifier', 'Deodorization', deodorMode) : nothing}
    </div>

    ${showControls ? html`
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
          ${renderSelectRow(hass, entities.selects.clean_mode, 'Clean Mode', onSelectChange)}
          ${renderSelectRow(hass, entities.selects.deodorization_wind_speed, 'Wind Speed', onSelectChange)}
          ${renderNumberStepper(hass, entities.numbers.volume, 'Volume', '%', onNumberChange, 10)}
          ${renderNumberStepper(hass, entities.numbers.auto_delay_sec, 'Clean Delay', 's', onNumberChange, 10)}
          ${renderNumberStepper(hass, entities.numbers.duration_after_deodorization, 'Deodorize Time', 'm', onNumberChange)}
        </div>
      </div>
    ` : nothing}
    ` : nothing}
  `;
}
