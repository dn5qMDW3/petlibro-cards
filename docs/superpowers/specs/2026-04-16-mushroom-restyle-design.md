# Mushroom-Flavored Restyle

**Date:** 2026-04-16
**Scope:** `petlibro-cards`
**Status:** Design approved pending user review

## Goal

Restyle the three device cards (feeder, fountain, litter box) to adopt the visual language of [lovelace-mushroom](https://github.com/piitaya/lovelace-mushroom) — tinted circular icon "bubbles," rounded soft shells, pill-shaped status chips at top, pill-shaped action buttons at bottom, and entity-row settings — while keeping the current device detection, config shape, and service-call logic unchanged.

The restyle is invasive by design: no config flag, no classic/mushroom variant switch. Legal because there is no published release yet (see memory `petlibro-cards not yet published`).

## Non-Goals

- No changes to `setConfig`, the editor, or the card's public config format.
- No new tap actions, `more-info` integration, or Mushroom-style config DSL.
- No unit test harness. Verification remains `yarn build` clean + manual visual QA.
- No changes to the companion `petlibro` integration.

## Architecture

One top-level LitElement (`<petlibro-cards>`) unchanged in API. Below it, a new `src/components/` directory holds seven primitive LitElements, each with its own Shadow DOM and `static styles`. Per-device render helpers in `src/cards/*.ts` compose primitives by emitting their tags.

### Component tree (feeder example)

```
<ha-card>
  <div class="card">
    <div class="chip-row">
      <petlibro-chip icon="mdi:wifi" variant="ok">Online</petlibro-chip>
      <petlibro-chip icon="mdi:battery" variant="neutral">84%</petlibro-chip>
      <petlibro-chip icon="mdi:bowl-mix" variant="warn">Low</petlibro-chip>
    </div>

    <petlibro-card-header
      image=${imageUrl}
      name=${name}
      model=${model}
      ?online=${online}
      fallbackIcon="mdi:food-drumstick"
    ></petlibro-card-header>

    <div class="tile-grid">
      <petlibro-tile icon="mdi:scale"    color="blue"   label="Fed today"  value="42 g (2×)"></petlibro-tile>
      <petlibro-tile icon="mdi:calendar-arrow-right" color="amber" label="Next feed" value="18:00"></petlibro-tile>
      <petlibro-tile icon="mdi:history"  color="pink"   label="Last feed"  value="12:30"></petlibro-tile>
      <petlibro-tile icon="mdi:calendar-check" color="purple" label="Plan" value="Active"></petlibro-tile>
    </div>

    <div class="settings">
      <petlibro-entity-row icon="mdi:scale-balance" color="blue"
                           primary="Feed quantity" secondary="per meal">
        <petlibro-stepper slot="trailing" .value=${12} unit="g" min="0" max="100"></petlibro-stepper>
      </petlibro-entity-row>
      <petlibro-entity-row icon="mdi:volume-high" color="purple" primary="Sound level">
        <ha-select slot="trailing" ...></ha-select>
      </petlibro-entity-row>
    </div>

    <div class="chip-controls">
      <petlibro-pill-button icon="mdi:food-drumstick" variant="primary"
                             @click=${() => onButtonPress(entities.buttons.manual_feed)}>Feed</petlibro-pill-button>
      <petlibro-pill-button icon="mdi:lightbulb" ?active=${lightOn}
                             @click=${() => onButtonPress(lightTargetId)}>Light</petlibro-pill-button>
    </div>
  </div>
</ha-card>
```

### Directory structure (after)

```
src/
├── petlibro-card.ts         # top-level, unchanged API, imports tokens + components
├── editor.ts                # unchanged
├── types.ts                 # unchanged
├── const.ts                 # unchanged
├── utils.ts                 # unchanged
├── tokens.ts                # NEW — css`` block of custom properties
├── styles.ts                # rewritten — only layout rules (grid, flex containers); visual rules move into primitives
├── components/              # NEW
│   ├── shape-icon.ts
│   ├── chip.ts
│   ├── card-header.ts
│   ├── tile.ts
│   ├── entity-row.ts
│   ├── pill-button.ts
│   └── stepper.ts
└── cards/
    ├── shared.ts            # rewritten — shrinks to convenience wrappers only (e.g., light toggle id resolution). Most of today's functions are replaced by direct primitive tags.
    ├── feeder-card.ts       # rewritten
    ├── fountain-card.ts     # rewritten
    └── litter-box-card.ts   # rewritten
```

## Components

All color props accept: `default | green | amber | red | blue | purple | pink`.

### `<petlibro-shape-icon>`
Circle with tinted background + MDI icon. Shared sub-primitive.
- **Props:** `icon: string`, `color?: Color = 'default'`, `size?: 'sm' | 'md' | 'lg' = 'md'`
- **No slots, no events.**

### `<petlibro-chip>`
Non-interactive status pill at the top of the card.
- **Props:** `icon?: string`, `variant?: 'neutral' | 'ok' | 'warn' | 'alert' = 'neutral'`
- **Slots:** default (text content)
- **No events.**

### `<petlibro-card-header>`
Device image (or fallback icon) + name + model + optional online indicator.
- **Props:** `image?: string`, `name: string`, `model?: string`, `online?: boolean`, `fallbackIcon: string`
- **No slots, no events.**

### `<petlibro-tile>`
Grid metric tile — `shape-icon` + label + value, optional gauge bar.
- **Props:** `icon: string`, `color?: Color = 'default'`, `label: string`, `value: string`, `progress?: number` (0–100), `progressVariant?: 'ok' | 'warn' | 'alert'`
- **No slots** (uniform shape across the grid is intentional).
- **No events.**

### `<petlibro-entity-row>`
Settings/entity row — `shape-icon` left, primary + secondary text middle, trailing content slot right.
- **Props:** `icon: string`, `color?: Color = 'default'`, `primary: string`, `secondary?: string`
- **Slots:** `trailing` (accepts anything — plain text value, `<petlibro-stepper>`, `<ha-select>`, `<ha-switch>`, etc.)
- **No events** (interaction comes from slotted content).

### `<petlibro-pill-button>`
Chip-style action button.
- **Props:** `icon?: string`, `variant?: 'default' | 'primary' = 'default'`, `active?: boolean`, `disabled?: boolean`
- **Slots:** default (label)
- **Events:** native `click` (host is a `<button>` in shadow; listeners on the tag work normally).

### `<petlibro-stepper>`
Compact − value + control for number entities.
- **Props:** `value: number`, `min?: number = 0`, `max?: number = 100`, `step?: number = 1`, `unit?: string = ''`, `disabled?: boolean`
- **No slots.**
- **Events:** `petlibro-stepper-change` — `CustomEvent<{ value: number }>`, bubbles + composed (so listeners on the `<petlibro-cards>` root can catch it through shadow roots).

### Deliberately *not* components
`chip-row`, `chip-controls`, `tile-grid`, `settings` — all plain flex/grid `<div>`s owned by `<petlibro-cards>`'s own styles. They have no state, no props, no reuse. A LitElement would be pure overhead.

## Data Flow

Render path unchanged from today:

1. `<petlibro-cards>.willUpdate` detects `hass`/`_config` change, resolves `device_id`, discovers entities via `getDeviceEntities`, detects device type.
2. `render()` delegates to the right per-device helper (`renderFeederCard`, etc.), passing callbacks.
3. Helper emits primitive tags wired with entity-derived props.

Interaction path:

- **Pill button tap:** native `click` on `<petlibro-pill-button>` → `@click` handler in the card template → existing `onButtonPress(entityId)` callback → `<petlibro-cards>._handleButtonPress` → `hass.callService('button', 'press', { entity_id })`.
- **Stepper change:** `<petlibro-stepper>` emits `petlibro-stepper-change` (bubbles + composed) → listener on the stepper tag in the row template → `onNumberChange(entityId, value)` → `_handleNumberChange` → `hass.callService('number', 'set_value', ...)`.
- **Select change:** slotted `ha-select` emits native `change` (today's pattern) → existing `onSelectChange` → `hass.callService('select', 'select_option', ...)`.

No new service calls, no new entity lookups, no change to `shouldUpdate` gating.

## Theming

### `tokens.ts` — single source of truth

```ts
export const tokens = css`
  :host {
    /* Shape */
    --pet-radius-card: 16px;
    --pet-radius-tile: 12px;
    --pet-radius-chip: 100px;
    --pet-gap-tile: 8px;
    --pet-gap-row: 6px;
    --pet-gap-chip: 6px;

    /* Color families — HA theme vars where available, fixed fallbacks otherwise */
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
    --pet-font-primary: 14px;
    --pet-font-primary-weight: 500;
    --pet-font-secondary: 12px;
    --pet-font-label: 11px;
    --pet-font-title: 16px;
  }
`;
```

Tokens are pulled into `<petlibro-cards>.static styles = [tokens, cardStyles]`. Custom properties inherit across shadow DOM, so every child primitive reads them without explicit passthrough.

### Light/dark adaptation

The tokens are built over HA theme vars (`--secondary-text-color`, `--success-color`, `--warning-color`, `--error-color`, `--primary-text-color`, `--card-background-color`, `--divider-color`), all of which flip automatically with the user's theme. The `color-mix` approach means tinted bubbles re-tint in dark themes without extra work.

### Overrides

Advanced users can override any token in their HA theme YAML by setting `--pet-color-blue-fg`, `--pet-radius-tile`, etc. at card scope.

## Error Handling & Availability

Unchanged. `<petlibro-cards>.render()` continues to short-circuit on `!this._config || !this.hass`, on missing `_deviceId`/`_entities`/`_deviceType`, and on `primaryState === 'unavailable'` — using the existing `.unavailable` markup styled by the shell.

Per-device render helpers continue to gate individual tiles/rows on `entity !== undefined` (today's pattern); a missing entity means the tile isn't rendered.

## Testing

No unit tests exist in the project today and none are being added. Verification for this work:

1. `yarn lint` clean.
2. `yarn build` clean (production bundle).
3. Manual visual QA in an HA dev instance against all three device types:
   - Feeder (at minimum: Granary Smart + Polar Wet Food — the Polar model adds temperature/plate/next-feeding-time tiles that other feeders don't).
   - Fountain.
   - Litter box.
4. Theme check: default light, default dark, at least one community theme with overridden `--success-color` / `--error-color` to confirm green/red follow.
5. `ha-select` + stepper interaction: verify service calls still fire (inspect HA dev tools network tab or entity state changes).

## Migration / Rollout

None required. No published release → no backwards compatibility. Changes ship in one version bump (next patch/minor release of `petlibro-cards`). Existing unreleased `dist/petlibro-cards.js` is overwritten by the new build.

## Risks

- **`color-mix()` browser support.** Supported in all evergreen browsers since mid-2023. HA's minimum supported browser list aligns. Acceptable.
- **Shadow DOM + `ha-select`.** Slotted `ha-select` has worked inside custom cards forever (Mushroom does the same). No known issue, but is the only foreign element crossing the shadow boundary in our markup.
- **Icon-color mismatch with future HA state colors.** If HA evolves its state-color system and users expect state-derived colors on our tiles, our fixed semantic palette won't follow. Out of scope here; could be added later as an `auto` color mode that reads `stateColor(entity)`.
