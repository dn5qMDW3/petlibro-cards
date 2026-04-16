import { css } from 'lit';

/**
 * Design tokens: CSS custom properties that cascade through shadow DOM.
 * Imported by <petlibro-cards> and included in its static styles so every
 * child primitive inherits them via :host.
 *
 * Colors are built with color-mix() over Home Assistant theme vars where
 * possible, so light/dark themes and custom palettes adapt automatically.
 */
export const tokens = css`
  :host {
    /* Shape */
    --pet-radius-card: 16px;
    --pet-radius-tile: 12px;
    --pet-radius-chip: 100px;
    --pet-gap-tile: 8px;
    --pet-gap-row: 6px;
    --pet-gap-chip: 6px;

    /* Semantic color families */
    --pet-color-default-bg: color-mix(in srgb, var(--secondary-text-color, #757575) 12%, transparent);
    --pet-color-default-fg: var(--secondary-text-color, #757575);

    --pet-color-green-bg: color-mix(in srgb, var(--success-color, #4caf50) 15%, transparent);
    --pet-color-green-fg: var(--success-color, #4caf50);

    --pet-color-amber-bg: color-mix(in srgb, var(--warning-color, #ff9800) 15%, transparent);
    --pet-color-amber-fg: var(--warning-color, #ff9800);

    --pet-color-red-bg: color-mix(in srgb, var(--error-color, #f44336) 15%, transparent);
    --pet-color-red-fg: var(--error-color, #f44336);

    /* Hues HA doesn't expose as theme vars — fixed but overridable */
    --pet-color-blue-bg: rgba(96, 165, 250, 0.15);
    --pet-color-blue-fg: #60a5fa;
    --pet-color-purple-bg: rgba(167, 139, 250, 0.15);
    --pet-color-purple-fg: #a78bfa;
    --pet-color-pink-bg: rgba(244, 114, 182, 0.15);
    --pet-color-pink-fg: #f472b6;

    /* Typography */
    --pet-font-title: 16px;
    --pet-font-primary: 14px;
    --pet-font-primary-weight: 500;
    --pet-font-secondary: 12px;
    --pet-font-label: 11px;
  }
`;
