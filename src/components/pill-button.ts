import { LitElement, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type PetPillVariant = 'default' | 'primary';

/**
 * Chip-shaped action button. Emits native `click` events that bubble across
 * the shadow boundary — consumers write `@click=${...}` as usual.
 */
@customElement('petlibro-pill-button')
export class PetlibroPillButton extends LitElement {
  @property({ type: String, reflect: true }) variant: PetPillVariant = 'default';
  @property({ type: String }) icon?: string;
  @property({ type: Boolean, reflect: true }) active = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  static styles = css`
    :host {
      display: inline-flex;
    }
    button {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      border-radius: var(--pet-radius-chip, 100px);
      border: none;
      background: var(--pill-bg);
      color: var(--pill-fg);
      font-size: var(--pet-font-secondary, 13px);
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      transition: opacity 0.15s ease;
    }
    button:hover:not(:disabled) { opacity: 0.85; }
    button:active:not(:disabled) { opacity: 0.7; }
    button:disabled { opacity: 0.4; cursor: not-allowed; }
    ha-icon { --mdc-icon-size: 16px; }

    :host([variant="default"]) {
      --pill-bg: color-mix(in srgb, var(--secondary-text-color, #757575) 10%, transparent);
      --pill-fg: var(--primary-text-color);
    }
    :host([variant="primary"]) {
      --pill-bg: var(--primary-color, #03a9f4);
      --pill-fg: var(--text-primary-color, #fff);
    }
    :host([active][variant="default"]) {
      --pill-bg: var(--primary-color, #03a9f4);
      --pill-fg: var(--text-primary-color, #fff);
    }
  `;

  render() {
    return html`
      <button type="button" ?disabled=${this.disabled}>
        ${this.icon ? html`<ha-icon .icon=${this.icon}></ha-icon>` : nothing}
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'petlibro-pill-button': PetlibroPillButton;
  }
}
