import { LitElement, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type PetChipVariant = 'neutral' | 'ok' | 'warn' | 'alert';

/**
 * Non-interactive status pill. Used in the chip-row at the top of each card.
 * Default slot is the label text; optional icon appears before it.
 */
@customElement('petlibro-chip')
export class PetlibroChip extends LitElement {
  @property({ type: String }) icon = '';
  @property({ type: String, reflect: true }) variant: PetChipVariant = 'neutral';

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: var(--pet-radius-chip, 100px);
      background: var(--chip-bg);
      color: var(--chip-fg);
      font-size: var(--pet-font-secondary, 12px);
      white-space: nowrap;
    }
    :host([variant="neutral"]) {
      --chip-bg: color-mix(in srgb, var(--secondary-text-color, #757575) 10%, transparent);
      --chip-fg: var(--primary-text-color);
    }
    :host([variant="ok"])    { --chip-bg: var(--pet-color-green-bg); --chip-fg: var(--pet-color-green-fg); }
    :host([variant="warn"])  { --chip-bg: var(--pet-color-amber-bg); --chip-fg: var(--pet-color-amber-fg); }
    :host([variant="alert"]) { --chip-bg: var(--pet-color-red-bg);   --chip-fg: var(--pet-color-red-fg); }
    ha-icon { --mdc-icon-size: 14px; }
  `;

  render() {
    return html`
      ${this.icon ? html`<ha-icon .icon=${this.icon}></ha-icon>` : nothing}
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'petlibro-chip': PetlibroChip;
  }
}
