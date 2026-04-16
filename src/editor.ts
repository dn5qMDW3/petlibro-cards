import { LitElement, html, css, nothing, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { EDITOR_NAME } from './const';
import type { HomeAssistant, PetlibroCardConfig } from './types';

interface PetlibroDevice {
  id: string;
  name: string;
}

@customElement(EDITOR_NAME)
export class PetlibroCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: PetlibroCardConfig;

  static styles = css`
    .editor-row {
      margin-bottom: 16px;
    }
    .editor-row label {
      display: block;
      font-weight: 500;
      margin-bottom: 4px;
      color: var(--primary-text-color);
    }
    .editor-row select,
    .editor-row input[type="text"] {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 14px;
      box-sizing: border-box;
      -webkit-appearance: none;
      appearance: none;
    }
    .editor-row select {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 12px center;
      padding-right: 32px;
      cursor: pointer;
    }
    .editor-row .checkbox-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .no-devices {
      font-size: 13px;
      color: var(--error-color, #db4437);
      margin-top: 4px;
    }
  `;

  public setConfig(config: PetlibroCardConfig): void {
    this._config = config;
  }

  private _getPetlibroDevices(): PetlibroDevice[] {
    if (!this.hass?.entities || !this.hass?.devices) return [];

    // Find all device_ids that have at least one petlibro entity
    const petlibroDeviceIds = new Set<string>();
    for (const entry of Object.values(this.hass.entities)) {
      if (entry.platform === 'petlibro' && entry.device_id) {
        petlibroDeviceIds.add(entry.device_id);
      }
    }

    // Build device list with names
    const devices: PetlibroDevice[] = [];
    for (const deviceId of petlibroDeviceIds) {
      const device = this.hass.devices[deviceId];
      const name = device?.name_by_user || device?.name || `Device ${deviceId.slice(0, 8)}`;
      devices.push({ id: deviceId, name });
    }

    return devices.sort((a, b) => a.name.localeCompare(b.name));
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html``;
    }

    const devices = this._getPetlibroDevices();

    return html`
      <div class="editor-row">
        <label>PetLibro Device</label>
        <select @change=${this._deviceChanged}>
          <option value="" ?selected=${!this._config.device_id}>
            — Select a device —
          </option>
          ${devices.map(
            (d) => html`
              <option value=${d.id} ?selected=${this._config.device_id === d.id}>
                ${d.name}
              </option>
            `,
          )}
        </select>
        ${devices.length === 0
          ? html`<div class="no-devices">
              No PetLibro devices found. Make sure the PetLibro integration is installed and configured.
            </div>`
          : nothing}
      </div>
      <div class="editor-row">
        <label>Name (optional override)</label>
        <input
          type="text"
          .value=${this._config.name || ''}
          @input=${this._nameChanged}
          placeholder="Auto-detected from device"
        />
      </div>
      <div class="editor-row">
        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show-controls"
            .checked=${this._config.show_controls !== false}
            @change=${this._showControlsChanged}
          />
          <label for="show-controls">Show controls</label>
        </div>
      </div>
    `;
  }

  private _deviceChanged(ev: Event): void {
    const device_id = (ev.target as HTMLSelectElement).value;
    if (!device_id) return;
    // Drop legacy entity field when selecting via device picker
    const newConfig: PetlibroCardConfig = {
      type: this._config.type,
      device_id,
      show_controls: this._config.show_controls,
    };
    if (this._config.name) newConfig.name = this._config.name;
    this._updateConfig(newConfig);
  }

  private _nameChanged(ev: Event): void {
    const name = (ev.target as HTMLInputElement).value || undefined;
    this._updateConfig({ ...this._config, name });
  }

  private _showControlsChanged(ev: Event): void {
    const show_controls = (ev.target as HTMLInputElement).checked;
    this._updateConfig({ ...this._config, show_controls });
  }

  private _updateConfig(config: PetlibroCardConfig): void {
    this._config = config;
    const event = new CustomEvent('config-changed', {
      detail: { config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [EDITOR_NAME]: PetlibroCardEditor;
  }
}
