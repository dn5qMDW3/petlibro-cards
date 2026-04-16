import { LitElement, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Card header: device image (or fallback icon) + name + model + online indicator.
 * Replaces the inline _renderHeader() markup in <petlibro-cards>.
 */
@customElement('petlibro-card-header')
export class PetlibroCardHeader extends LitElement {
  @property({ type: String }) image?: string;
  @property({ type: String }) name = '';
  @property({ type: String }) model?: string;
  @property({ type: Boolean, reflect: true }) online = false;
  @property({ type: String }) fallbackIcon = 'mdi:paw';

  static styles = css`
    :host {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .image, .placeholder {
      width: 48px;
      height: 48px;
      border-radius: var(--pet-radius-tile, 12px);
      flex-shrink: 0;
      background: var(--pet-color-default-bg);
    }
    .image {
      object-fit: contain;
    }
    .placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--pet-color-default-fg);
    }
    .placeholder ha-icon {
      --mdc-icon-size: 24px;
    }
    .info {
      flex: 1;
      min-width: 0;
    }
    .name {
      font-size: var(--pet-font-title, 16px);
      font-weight: 600;
      color: var(--primary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .model {
      font-size: var(--pet-font-secondary, 12px);
      color: var(--secondary-text-color);
    }
    .status {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: var(--pet-font-secondary, 12px);
      color: var(--secondary-text-color);
      flex-shrink: 0;
    }
    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    :host([online]) .dot { background: var(--pet-color-green-fg); }
    :host(:not([online])) .dot { background: var(--pet-color-red-fg); }
  `;

  render() {
    return html`
      ${this.image
        ? html`<img class="image" src=${this.image} alt=${this.name} />`
        : html`<div class="placeholder"><ha-icon .icon=${this.fallbackIcon}></ha-icon></div>`}
      <div class="info">
        <div class="name">${this.name}</div>
        ${this.model ? html`<div class="model">${this.model}</div>` : nothing}
      </div>
      <div class="status">
        <div class="dot"></div>
        <span>${this.online ? 'Online' : 'Offline'}</span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'petlibro-card-header': PetlibroCardHeader;
  }
}
