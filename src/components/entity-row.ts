import { LitElement, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { PetColor } from './shape-icon';
import './shape-icon';

/**
 * Entity/settings row: shape-icon left, primary + secondary text middle,
 * trailing slot right (for values, steppers, selects, switches).
 */
@customElement('petlibro-entity-row')
export class PetlibroEntityRow extends LitElement {
  @property({ type: String }) icon = '';
  @property({ type: String }) color: PetColor = 'default';
  @property({ type: String }) primary = '';
  @property({ type: String }) secondary?: string;

  static styles = css`
    :host {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 4px;
    }
    .text {
      flex: 1;
      min-width: 0;
    }
    .primary {
      font-size: var(--pet-font-primary, 14px);
      font-weight: var(--pet-font-primary-weight, 500);
      color: var(--primary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .secondary {
      font-size: var(--pet-font-secondary, 12px);
      color: var(--secondary-text-color);
    }
    ::slotted(*) {
      flex-shrink: 0;
    }
  `;

  render() {
    return html`
      <petlibro-shape-icon .icon=${this.icon} .color=${this.color}></petlibro-shape-icon>
      <div class="text">
        <div class="primary">${this.primary}</div>
        ${this.secondary ? html`<div class="secondary">${this.secondary}</div>` : nothing}
      </div>
      <slot name="trailing"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'petlibro-entity-row': PetlibroEntityRow;
  }
}
