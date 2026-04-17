import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Compact − value + control for number entities. Emits a custom
 * `petlibro-stepper-change` event (bubbles + composed) with detail { value }.
 */
@customElement('petlibro-stepper')
export class PetlibroStepper extends LitElement {
  @property({ type: Number }) value = 0;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Number }) step = 1;
  @property({ type: String }) unit = '';
  @property({ type: Boolean }) disabled = false;

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    button {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: none;
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      font-size: 16px;
      font-weight: 700;
      font-family: inherit;
      cursor: pointer;
      line-height: 1;
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    button:hover:not(:disabled) { opacity: 0.85; }
    button:disabled { opacity: 0.4; cursor: not-allowed; }
    .value {
      min-width: 48px;
      text-align: center;
      font-size: var(--pet-font-secondary, 13px);
      font-weight: 500;
      color: var(--primary-text-color);
    }
  `;

  private _emit(value: number) {
    this.dispatchEvent(new CustomEvent('petlibro-stepper-change', {
      detail: { value },
      bubbles: true,
      composed: true,
    }));
  }

  private _dec() {
    this._emit(Math.max(this.min, this.value - this.step));
  }

  private _inc() {
    this._emit(Math.min(this.max, this.value + this.step));
  }

  render() {
    return html`
      <button
        type="button"
        ?disabled=${this.disabled || this.value <= this.min}
        @click=${this._dec}
      >−</button>
      <span class="value">${this.value}${this.unit}</span>
      <button
        type="button"
        ?disabled=${this.disabled || this.value >= this.max}
        @click=${this._inc}
      >+</button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'petlibro-stepper': PetlibroStepper;
  }
}
