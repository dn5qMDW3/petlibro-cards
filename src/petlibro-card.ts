import { LitElement, html, nothing, type PropertyValues, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { CARD_NAME, CARD_VERSION, EDITOR_NAME } from './const';
import { cardStyles } from './styles';
import type { DeviceEntities, DeviceType, HomeAssistant, PetlibroCardConfig } from './types';
import {
  detectDeviceType,
  getDeviceEntities,
  getDeviceId,
  getDeviceImage,
  getDeviceName,
  getFirstEntityId,
  isEntityOn,
} from './utils';
import { renderFeederCard } from './cards/feeder-card';
import { renderFountainCard } from './cards/fountain-card';
import { renderLitterBoxCard } from './cards/litter-box-card';

console.info(`%c PETLIBRO-CARD %c v${CARD_VERSION} `, 'color: white; background: #3498db; font-weight: bold;', 'color: #3498db; background: white; font-weight: bold;');

// Register card in HA's card picker. `customCards` is a global HA-defined array
// not exposed in our local types, so we cast through unknown.
interface CustomCardsWindow extends Window {
  customCards?: Array<{
    type: string;
    name: string;
    description: string;
    preview?: boolean;
  }>;
}
const w = window as CustomCardsWindow;
w.customCards = w.customCards ?? [];
w.customCards.push({
  type: CARD_NAME,
  name: 'Petlibro Card',
  description: 'Auto-detecting card for PetLibro feeders, fountains, and litter boxes',
  preview: true,
});

@customElement(CARD_NAME)
export class PetlibroCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: PetlibroCardConfig;
  @state() private _deviceId?: string;
  @state() private _deviceType?: DeviceType;
  @state() private _entities?: DeviceEntities;
  @state() private _primaryEntityId?: string;

  static styles = cardStyles;

  public static async getConfigElement(): Promise<HTMLElement> {
    await import('./editor');
    return document.createElement(EDITOR_NAME);
  }

  public static getStubConfig(): Record<string, unknown> {
    return { device_id: '' };
  }

  public setConfig(config: PetlibroCardConfig): void {
    if (!config.device_id && !config.entity) {
      throw new Error('Please select a PetLibro device');
    }
    this._config = {
      show_controls: true,
      ...config,
    };
  }

  public getCardSize(): number {
    return 4;
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has('_config')) return true;
    if (!changedProps.has('hass') || !this._entities) return true;

    const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
    if (!oldHass) return true;

    // Only re-render if a relevant entity's state changed
    const allEntityIds = this._getAllEntityIds();
    return allEntityIds.some((id) => oldHass.states[id] !== this.hass.states[id]);
  }

  protected willUpdate(changedProps: PropertyValues): void {
    if (!this.hass || !this._config) return;

    // Re-discover entities when hass or config changes
    if (changedProps.has('hass') || changedProps.has('_config')) {
      // Resolve device_id: prefer config.device_id, fall back to entity lookup
      let deviceId: string | undefined;
      if (this._config.device_id) {
        deviceId = this._config.device_id;
      } else if (this._config.entity) {
        deviceId = getDeviceId(this.hass, this._config.entity);
      }

      if (deviceId && deviceId !== this._deviceId) {
        this._deviceId = deviceId;
        this._entities = getDeviceEntities(this.hass, deviceId);
        this._deviceType = detectDeviceType(this._entities);
        // Cache the primary entity ID once — getFirstEntityId is O(n) over the entity registry.
        this._primaryEntityId = this._config.entity || getFirstEntityId(this.hass, deviceId) || '';
      }
    }
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    // Entity not found or no device discovered yet
    if (!this._deviceId || !this._entities || !this._deviceType) {
      return html`
        <ha-card>
          <div class="unavailable">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <div>Entity not found or device not yet available</div>
          </div>
        </ha-card>
      `;
    }

    // Check if primary entity is unavailable
    const primaryEntityId = this._primaryEntityId ?? '';
    const primaryState = this.hass.states[primaryEntityId]?.state;
    if (primaryState === 'unavailable') {
      return html`
        <ha-card>
          ${this._renderHeader()}
          <div class="unavailable">
            <ha-icon icon="mdi:wifi-off"></ha-icon>
            <div>Device unavailable</div>
          </div>
        </ha-card>
      `;
    }

    return html`
      <ha-card>
        ${this._renderHeader()}
        ${this._renderDeviceContent()}
      </ha-card>
    `;
  }

  private _renderHeader(): TemplateResult {
    const name = this._config.name || getDeviceName(this.hass, this._deviceId!) || 'PetLibro Device';
    // Use cached primary entity for image lookup
    const representativeEntity = this._primaryEntityId ?? '';
    const imageUrl = getDeviceImage(this.hass, representativeEntity, this._deviceId!);
    const online = isEntityOn(this.hass, this._entities!.binary_sensors.online);
    const model = this.hass.devices?.[this._deviceId!]?.model;

    return html`
      <div class="card-header">
        ${imageUrl
          ? html`<img class="device-image" src="${imageUrl}" alt="${name}" />`
          : html`
            <div class="device-image-placeholder">
              <ha-icon icon="${this._getDeviceTypeIcon()}"></ha-icon>
            </div>
          `}
        <div class="header-info">
          <div class="device-name">${name}</div>
          ${model ? html`<div class="device-model">${model}</div>` : nothing}
        </div>
        <div class="status-badge">
          <div class="status-dot ${online ? 'online' : 'offline'}"></div>
          <span class="status-text">${online ? 'Online' : 'Offline'}</span>
        </div>
      </div>
    `;
  }

  private _renderDeviceContent(): TemplateResult | typeof nothing {
    if (!this._entities) return nothing;

    const showControls = this._config.show_controls ?? true;

    switch (this._deviceType) {
      case 'feeder':
        return renderFeederCard(
          this.hass,
          this._entities,
          (entityId) => this._handleButtonPress(entityId),
          (entityId) => this._handleSwitchToggle(entityId),
          (entityId, option) => this._handleSelectChange(entityId, option),
          showControls,
        );
      case 'fountain':
        return renderFountainCard(
          this.hass,
          this._entities,
          (entityId) => this._handleButtonPress(entityId),
          showControls,
        );
      case 'litter_box':
        return renderLitterBoxCard(
          this.hass,
          this._entities,
          (entityId) => this._handleButtonPress(entityId),
          (entityId) => this._handleSwitchToggle(entityId),
          (entityId, option) => this._handleSelectChange(entityId, option),
          (entityId, value) => this._handleNumberChange(entityId, value),
          showControls,
        );
      default:
        return html`<div class="unavailable">Unknown device type</div>`;
    }
  }

  private _handleButtonPress(entityId: string): void {
    this.hass.callService('button', 'press', { entity_id: entityId });
  }

  private _handleSwitchToggle(entityId: string): void {
    this.hass.callService('switch', 'toggle', { entity_id: entityId });
  }

  private _handleSelectChange(entityId: string, option: string): void {
    this.hass.callService('select', 'select_option', { entity_id: entityId, option });
  }

  private _handleNumberChange(entityId: string, value: number): void {
    this.hass.callService('number', 'set_value', { entity_id: entityId, value });
  }

  private _getDeviceTypeIcon(): string {
    switch (this._deviceType) {
      case 'feeder': return 'mdi:food-drumstick';
      case 'fountain': return 'mdi:water';
      case 'litter_box': return 'mdi:cat';
      default: return 'mdi:paw';
    }
  }

  private _getAllEntityIds(): string[] {
    if (!this._entities) return [];
    return [
      ...Object.values(this._entities.sensors),
      ...Object.values(this._entities.binary_sensors),
      ...Object.values(this._entities.buttons),
      ...Object.values(this._entities.switches),
      ...Object.values(this._entities.numbers),
      ...Object.values(this._entities.selects),
      ...Object.values(this._entities.dates),
      ...Object.values(this._entities.images),
      ...Object.values(this._entities.updates),
    ];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [CARD_NAME]: PetlibroCard;
  }
}
