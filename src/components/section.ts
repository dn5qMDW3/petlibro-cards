import { LitElement, html, css, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A collapsible group of rows.
 *
 * Used for content that is useful but not glanceable — notification toggles,
 * for instance, where a device can have a dozen and none of them belong in the
 * card's default view.
 */
@customElement('petlibro-section')
export class PetlibroSection extends LitElement {
  @property() public label = '';
  /** Short text on the right of the summary, e.g. "9 of 11 on". */
  @property() public summary = '';
  @property() public icon = 'mdi:tune';
  @property({ type: Boolean, reflect: true }) public open = false;

  static styles = css`
    :host {
      display: block;
      margin-top: 8px;
    }

    details {
      border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.2));
      padding-top: 4px;
    }

    summary {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 4px;
      cursor: pointer;
      list-style: none;
      border-radius: 10px;
      color: var(--secondary-text-color);
      font-size: 0.9rem;
      font-weight: 500;
      user-select: none;
    }

    /* Hide the native disclosure marker in both engines. */
    summary::-webkit-details-marker {
      display: none;
    }
    summary::marker {
      content: '';
    }

    summary:hover {
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.08));
    }

    summary:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }

    .label {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .summary-text {
      font-variant-numeric: tabular-nums;
      opacity: 0.8;
    }

    .chevron {
      --mdc-icon-size: 20px;
      transition: transform 180ms ease;
      flex: 0 0 auto;
    }

    details[open] .chevron {
      transform: rotate(180deg);
    }

    .body {
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: 4px 0 8px;
    }

    @media (prefers-reduced-motion: reduce) {
      .chevron {
        transition: none;
      }
    }
  `;

  protected render(): TemplateResult {
    return html`
      <details ?open=${this.open} @toggle=${this._onToggle}>
        <summary>
          <ha-icon .icon=${this.icon}></ha-icon>
          <span class="label">${this.label}</span>
          ${this.summary ? html`<span class="summary-text">${this.summary}</span>` : ''}
          <ha-icon class="chevron" icon="mdi:chevron-down"></ha-icon>
        </summary>
        <div class="body"><slot></slot></div>
      </details>
    `;
  }

  private _onToggle(e: Event): void {
    this.open = (e.target as HTMLDetailsElement).open;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'petlibro-section': PetlibroSection;
  }
}
