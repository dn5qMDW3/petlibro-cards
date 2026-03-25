import { LitElement, html, css, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { EDITOR_NAME } from './const';
import type { HomeAssistant, PetlibroCardConfig } from './types';

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
    .editor-row ha-device-picker,
    .editor-row ha-entity-picker {
      width: 100%;
    }
    .editor-row input {
      width: 100%;
      padding: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 14px;
      box-sizing: border-box;
    }
    .editor-row .checkbox-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .migration-note {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-top: 4px;
    }
  `;

  public setConfig(config: PetlibroCardConfig): void {
    this._config = config;
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html``;
    }

    // Show entity picker for legacy configs that have entity but no device_id
    const isLegacy = this._config.entity && !this._config.device_id;

    return html`
      <div class="editor-row">
        <label>PetLibro Device</label>
        <ha-device-picker
          .hass=${this.hass}
          .value=${this._config.device_id || ''}
          .deviceFilter=${this._filterPetlibroDevices}
          @value-changed=${this._deviceChanged}
        ></ha-device-picker>
        ${isLegacy ? html`
          <div class="migration-note">
            Migrating from entity-based config. Select a device to upgrade.
          </div>
        ` : ''}
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

  /**
   * Filter callback for ha-device-picker: only show petlibro devices.
   * HA passes each device from the registry; we check if any entity
   * on the device belongs to the "petlibro" platform.
   */
  private _filterPetlibroDevices = (device: any): boolean => {
    if (!this.hass?.entities) return false;
    for (const entry of Object.values(this.hass.entities)) {
      if ((entry as any).device_id === device.id && (entry as any).platform === 'petlibro') {
        return true;
      }
    }
    return false;
  };

  private _deviceChanged(ev: CustomEvent): void {
    const device_id = ev.detail.value;
    if (!device_id) return;
    // When switching to device picker, drop legacy entity field
    const { entity: _entity, ...rest } = this._config;
    void _entity; // consumed — dropping legacy field
    this._updateConfig({ ...rest, device_id });
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
