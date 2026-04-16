import { LitElement, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import type { PetColor } from './shape-icon';
import './shape-icon';

export type PetGaugeVariant = 'ok' | 'warn' | 'alert';

/**
 * Grid metric tile: shape-icon + label + value, optional gauge bar below.
 * Prop-only (no slots) — grid uniformity is intentional.
 */
@customElement('petlibro-tile')
export class PetlibroTile extends LitElement {
  @property({ type: String }) icon = '';
  @property({ type: String }) color: PetColor = 'default';
  @property({ type: String }) label = '';
  @property({ type: String }) value = '';
  @property({ type: Number }) progress?: number;
  @property({ type: String, reflect: true, attribute: 'progress-variant' })
  progressVariant: PetGaugeVariant = 'ok';

  static styles = css`
    :host {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      border-radius: var(--pet-radius-tile, 12px);
      background: color-mix(in srgb, var(--secondary-text-color, #757575) 6%, transparent);
    }
    .text {
      flex: 1;
      min-width: 0;
    }
    .label {
      font-size: var(--pet-font-label, 11px);
      color: var(--secondary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .value {
      font-size: var(--pet-font-primary, 14px);
      font-weight: var(--pet-font-primary-weight, 500);
      color: var(--primary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .gauge {
      margin-top: 4px;
      height: 4px;
      border-radius: 2px;
      background: color-mix(in srgb, var(--secondary-text-color, #757575) 15%, transparent);
      overflow: hidden;
    }
    .gauge-fill {
      height: 100%;
      border-radius: 2px;
      background: var(--gauge-fill);
      transition: width 0.3s ease;
    }
    :host([progress-variant="ok"])    { --gauge-fill: var(--pet-color-green-fg); }
    :host([progress-variant="warn"])  { --gauge-fill: var(--pet-color-amber-fg); }
    :host([progress-variant="alert"]) { --gauge-fill: var(--pet-color-red-fg); }
  `;

  render() {
    return html`
      <petlibro-shape-icon .icon=${this.icon} .color=${this.color}></petlibro-shape-icon>
      <div class="text">
        <div class="label">${this.label}</div>
        <div class="value">${this.value}</div>
        ${this.progress !== undefined ? html`
          <div class="gauge">
            <div
              class="gauge-fill"
              style=${styleMap({ width: `${Math.min(100, Math.max(0, this.progress))}%` })}
            ></div>
          </div>
        ` : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'petlibro-tile': PetlibroTile;
  }
}
