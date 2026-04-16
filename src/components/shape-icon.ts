import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type PetColor = 'default' | 'green' | 'amber' | 'red' | 'blue' | 'purple' | 'pink';
export type PetShapeSize = 'sm' | 'md' | 'lg';

/**
 * Circular tinted icon. Shared sub-primitive used by tile, entity-row, and
 * any other component that needs a Mushroom-style icon bubble.
 *
 * Color and size are reflected as attributes so CSS :host selectors match.
 */
@customElement('petlibro-shape-icon')
export class PetlibroShapeIcon extends LitElement {
  @property({ type: String }) icon = '';
  @property({ type: String, reflect: true }) color: PetColor = 'default';
  @property({ type: String, reflect: true }) size: PetShapeSize = 'md';

  static styles = css`
    :host {
      display: inline-flex;
      flex-shrink: 0;
    }
    .shape {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--pet-bg);
      color: var(--pet-fg);
    }
    :host([size="sm"]) .shape { width: 28px; height: 28px; }
    :host([size="md"]) .shape { width: 36px; height: 36px; }
    :host([size="lg"]) .shape { width: 44px; height: 44px; }
    :host([size="sm"]) ha-icon { --mdc-icon-size: 16px; }
    :host([size="md"]) ha-icon { --mdc-icon-size: 20px; }
    :host([size="lg"]) ha-icon { --mdc-icon-size: 24px; }

    :host([color="default"]) { --pet-bg: var(--pet-color-default-bg); --pet-fg: var(--pet-color-default-fg); }
    :host([color="green"])   { --pet-bg: var(--pet-color-green-bg);   --pet-fg: var(--pet-color-green-fg); }
    :host([color="amber"])   { --pet-bg: var(--pet-color-amber-bg);   --pet-fg: var(--pet-color-amber-fg); }
    :host([color="red"])     { --pet-bg: var(--pet-color-red-bg);     --pet-fg: var(--pet-color-red-fg); }
    :host([color="blue"])    { --pet-bg: var(--pet-color-blue-bg);    --pet-fg: var(--pet-color-blue-fg); }
    :host([color="purple"])  { --pet-bg: var(--pet-color-purple-bg);  --pet-fg: var(--pet-color-purple-fg); }
    :host([color="pink"])    { --pet-bg: var(--pet-color-pink-bg);    --pet-fg: var(--pet-color-pink-fg); }
  `;

  render() {
    return html`<div class="shape"><ha-icon .icon=${this.icon}></ha-icon></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'petlibro-shape-icon': PetlibroShapeIcon;
  }
}
