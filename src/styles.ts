import { css } from 'lit';

/**
 * Layout-only styles for <petlibro-cards>. Visual rules (tiles, chips, rows,
 * buttons, steppers) live inside the individual primitive components under
 * src/components/. Native-element customizations (e.g., slotted <select>)
 * stay here because they render inside the top-level light template before
 * being slotted into a primitive's shadow tree.
 */
export const cardStyles = css`
  :host {
    display: block;
  }

  ha-card {
    padding: 16px;
    overflow: hidden;
    border-radius: var(--pet-radius-card, 16px);
  }

  /* Status chip row at the top */
  .chip-row {
    display: flex;
    gap: var(--pet-gap-chip, 6px);
    flex-wrap: wrap;
    margin-bottom: 12px;
  }

  /* Device header spacing (petlibro-card-header is followed by the tile grid) */
  petlibro-card-header {
    margin-bottom: 16px;
  }

  /* Metric tile grid */
  .tile-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: var(--pet-gap-tile, 8px);
    margin-bottom: 16px;
  }

  /* Pill-button row (controls) */
  .chip-controls {
    display: flex;
    flex-wrap: wrap;
    gap: var(--pet-gap-chip, 6px);
    justify-content: center;
  }

  /* Stack of entity rows (settings) */
  .settings {
    display: flex;
    flex-direction: column;
    gap: var(--pet-gap-row, 6px);
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }

  /* Native <select> slotted into petlibro-entity-row's trailing slot.
     Lives in light-template CSS because the <select> is rendered in
     <petlibro-cards>'s shadow tree before being slotted. */
  select.pet-select {
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid var(--divider-color, #e0e0e0);
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    font-size: var(--pet-font-secondary, 13px);
    font-family: inherit;
    cursor: pointer;
  }

  select.pet-select:focus {
    outline: none;
    border-color: var(--primary-color, #03a9f4);
  }

  /* Error/unavailable state used by top-level fallback */
  .unavailable {
    text-align: center;
    padding: 24px;
    color: var(--secondary-text-color);
  }

  .unavailable ha-icon {
    --mdc-icon-size: 48px;
    margin-bottom: 8px;
    display: block;
  }
`;
