import { html, nothing, type TemplateResult } from 'lit';
import type { DeviceEntities, HomeAssistant } from '../types';
import { getBatteryIcon, getNumericState, getStateValue, isEntityOn } from '../utils';
import { renderNumberStepper, renderSelectRow } from './shared';

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

  const batteryColor = battery === undefined ? 'default' : battery <= 20 ? 'red' : battery <= 50 ? 'amber' : 'green';
  const litterVariant = litterPercent === undefined
    ? 'ok'
    : litterPercent <= 15 ? 'alert' : litterPercent <= 30 ? 'warn' : 'ok';

  const hasAlertChips = wasteFull;

  const hasSettings = !!(
    entities.selects.clean_mode ||
    entities.selects.deodorization_wind_speed ||
    entities.numbers.volume ||
    entities.numbers.auto_delay_sec ||
    entities.numbers.duration_after_deodorization
  );

  return html`
    ${hasAlertChips ? html`
      <div class="chip-row">
        ${wasteFull ? html`<petlibro-chip icon="mdi:delete-alert" variant="alert">Bin Full</petlibro-chip>` : nothing}
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

      ${litterPercent !== undefined ? html`
        <petlibro-tile
          icon="mdi:gauge"
          color="purple"
          label="Litter Level"
          value="${Math.round(litterPercent)}%"
          .progress=${litterPercent}
          progress-variant=${litterVariant}
        ></petlibro-tile>
      ` : nothing}

      <petlibro-tile
        icon=${wasteFull ? 'mdi:delete-alert' : 'mdi:delete-variant'}
        color=${wasteFull ? 'red' : 'green'}
        label="Waste Bin"
        value=${wasteFull ? 'Full' : 'OK'}
      ></petlibro-tile>

      ${runningState !== undefined ? html`
        <petlibro-tile
          icon="mdi:state-machine"
          color="blue"
          label="Status"
          value=${String(runningState)}
        ></petlibro-tile>
      ` : nothing}

      ${cleaningDays !== undefined ? html`
        <petlibro-tile
          icon="mdi:broom"
          .color=${Number(cleaningDays) <= 1 ? 'red' : 'amber'}
          label="Cleaning Due"
          value="${cleaningDays} days"
        ></petlibro-tile>
      ` : nothing}

      ${pottyTimes !== undefined ? html`
        <petlibro-tile
          icon="mdi:counter"
          color="pink"
          label="Potty Today"
          value="${pottyTimes}x${pottyDuration ? ` (${pottyDuration}s)` : ''}"
        ></petlibro-tile>
      ` : nothing}

      ${deodorMode !== undefined ? html`
        <petlibro-tile
          icon="mdi:air-purifier"
          color="green"
          label="Deodorization"
          value=${String(deodorMode)}
        ></petlibro-tile>
      ` : nothing}
    </div>

    ${showControls ? html`
      <div class="chip-controls">
        ${entities.buttons.trigger_clean ? html`
          <petlibro-pill-button
            icon="mdi:broom"
            variant="primary"
            @click=${() => onButtonPress(entities.buttons.trigger_clean)}
          >Clean</petlibro-pill-button>
        ` : nothing}

        ${entities.buttons.trigger_stop_action ? html`
          <petlibro-pill-button
            icon="mdi:stop"
            @click=${() => onButtonPress(entities.buttons.trigger_stop_action)}
          >Stop</petlibro-pill-button>
        ` : nothing}

        ${entities.switches.light_switch ? html`
          <petlibro-pill-button
            icon="mdi:lightbulb${lightOn ? '' : '-outline'}"
            ?active=${lightOn}
            @click=${() => onSwitchToggle(entities.switches.light_switch)}
          >Light</petlibro-pill-button>
        ` : nothing}

        ${entities.switches.sound_switch ? html`
          <petlibro-pill-button
            icon="mdi:volume-${soundOn ? 'high' : 'off'}"
            ?active=${soundOn}
            @click=${() => onSwitchToggle(entities.switches.sound_switch)}
          >Sound</petlibro-pill-button>
        ` : nothing}

        ${entities.switches.after_deodorization_switch ? html`
          <petlibro-pill-button
            icon="mdi:air-purifier"
            ?active=${isEntityOn(hass, entities.switches.after_deodorization_switch)}
            @click=${() => onSwitchToggle(entities.switches.after_deodorization_switch)}
          >Auto Deodorize</petlibro-pill-button>
        ` : nothing}

        ${entities.switches.avoid_repeat_clean ? html`
          <petlibro-pill-button
            icon="mdi:repeat-off"
            ?active=${isEntityOn(hass, entities.switches.avoid_repeat_clean)}
            @click=${() => onSwitchToggle(entities.switches.avoid_repeat_clean)}
          >No Repeat</petlibro-pill-button>
        ` : nothing}

        ${entities.switches.enable_auto_clean_in_sleep_mode ? html`
          <petlibro-pill-button
            icon="mdi:broom"
            ?active=${isEntityOn(hass, entities.switches.enable_auto_clean_in_sleep_mode)}
            @click=${() => onSwitchToggle(entities.switches.enable_auto_clean_in_sleep_mode)}
          >Sleep Clean</petlibro-pill-button>
        ` : nothing}

        ${entities.switches.enable_deodorization_in_sleep_mode ? html`
          <petlibro-pill-button
            icon="mdi:weather-windy"
            ?active=${isEntityOn(hass, entities.switches.enable_deodorization_in_sleep_mode)}
            @click=${() => onSwitchToggle(entities.switches.enable_deodorization_in_sleep_mode)}
          >Sleep Deodorize</petlibro-pill-button>
        ` : nothing}

        ${entities.buttons.reset_filter ? html`
          <petlibro-pill-button
            icon="mdi:air-filter"
            @click=${() => onButtonPress(entities.buttons.reset_filter)}
          >Reset Filter</petlibro-pill-button>
        ` : nothing}

        ${entities.buttons.reset_cleaning ? html`
          <petlibro-pill-button
            icon="mdi:broom"
            @click=${() => onButtonPress(entities.buttons.reset_cleaning)}
          >Reset Clean</petlibro-pill-button>
        ` : nothing}

        ${entities.buttons.reset_mat ? html`
          <petlibro-pill-button
            icon="mdi:rug"
            @click=${() => onButtonPress(entities.buttons.reset_mat)}
          >Reset Mat</petlibro-pill-button>
        ` : nothing}
      </div>
    ` : nothing}

    ${showControls && hasSettings ? html`
      <div class="settings">
        ${renderSelectRow(hass, entities.selects.clean_mode, 'mdi:broom', 'purple', 'Clean Mode', onSelectChange)}
        ${renderSelectRow(hass, entities.selects.deodorization_wind_speed, 'mdi:weather-windy', 'blue', 'Wind Speed', onSelectChange)}
        ${renderNumberStepper(hass, entities.numbers.volume, 'mdi:volume-high', 'purple', 'Volume', '%', onNumberChange, 10)}
        ${renderNumberStepper(hass, entities.numbers.auto_delay_sec, 'mdi:timer-outline', 'amber', 'Clean Delay', 's', onNumberChange, 10)}
        ${renderNumberStepper(hass, entities.numbers.duration_after_deodorization, 'mdi:air-purifier', 'green', 'Deodorize Time', 'm', onNumberChange)}
      </div>
    ` : nothing}
  `;
}
