# Petlibro Cards

Custom Home Assistant Lovelace card for the [petlibro](https://github.com/dn5qMDW3/petlibro) integration. Provides rich visual UI for PetLibro smart pet devices (feeders, fountains, litter boxes).

## Tech Stack

- **TypeScript** with **Lit 3** (LitElement web components)
- **Rollup 4** for bundling (ES2022 target — do NOT lower, Lit 3 requires native class syntax)
- **ESLint + Prettier** for code quality
- **Yarn 4+** (via Corepack) as package manager
- Distributed via **HACS** (Home Assistant Community Store)

## Project Structure

```
src/
├── petlibro-cards.ts        # Main card entry, registers with HA
├── editor.ts                # Visual config editor (LovelaceCardEditor)
├── types.ts                 # TypeScript interfaces for card config
├── const.ts                 # CARD_VERSION and constants
├── cards/                   # Per-device-type card components
│   ├── feeder-card.ts
│   ├── fountain-card.ts
│   └── litter-box-card.ts
└── localize/                # i18n support
    ├── localize.ts
    └── languages/
        └── en.json
dist/
└── petlibro-cards.js        # Production bundle (served to HA)
```

## Build Commands

| Command | Purpose |
|---------|---------|
| `yarn install` | Install dependencies |
| `yarn build` | Lint + production bundle |
| `yarn start` | Dev watcher with hot reload |
| `yarn lint` | ESLint check |

## HACS Requirements

- `hacs.json` at repo root with `{ "name": "Petlibro Cards", "render_readme": true, "filename": "petlibro-cards.js" }`
- Built JS file must be in `dist/` directory
- Filename must match repo name: `petlibro-cards.js`

## Card Registration Pattern

Cards register with Home Assistant via:
```typescript
window.customCards.push({
  type: 'petlibro-cards',
  name: 'Petlibro Cards',
  description: 'Custom card for PetLibro pet devices',
});
```

Use `@customElement('petlibro-cards')` decorator on the LitElement class.

## Related Integration: petlibro

The companion HA integration lives at `/Users/borisgrushenko/Documents/GitHub/petlibro`. Key reference files:

### Device Types
- **Feeders** (7 models): Air Smart, Granary Smart, Granary Camera, One RFID, Polar Wet Food, Space Smart
- **Fountains** (4 models): Dockstream Smart, Dockstream RFID, Dockstream 2 Cordless, Dockstream 2
- **Litter Boxes** (1 model): Luma Smart Litter Box

### Key Entity Data Available
- **Sensors**: feeding quantities (weight/volume), battery %, WiFi RSSI, water level, temperature, remaining filter/desiccant days, litter weight
- **Binary sensors**: online status, food low, door state, water running
- **Controls**: manual feed buttons, light/sound switches, feeding plan enable/disable, cleaning controls
- **Numbers**: manual feed quantity, water threshold, sound level
- **Selects**: feed quantity in portions, water schedule modes

### Integration Reference Files
- Entity definitions: `sensor.py`, `binary_sensor.py`, `switch.py`, `button.py`, `number.py`, `select.py`
- Device classes: `devices/feeders/`, `devices/fountains/`, `devices/litterboxes/`
- Constants & enums: `const.py`
- All under: `/Users/borisgrushenko/Documents/GitHub/petlibro/custom_components/petlibro/`

## Conventions

- Follow the [boilerplate-card](https://github.com/custom-cards/boilerplate-card) patterns for HA card structure
- Use `@state()` for internal state, `@property({ attribute: false })` for `hass` object
- Implement `shouldUpdate()` for performance (skip re-renders when entity hasn't changed)
- Defer editor loading via dynamic import to keep main bundle small
- Use HA theme CSS variables for styling (e.g., `--ha-card-background`, `--primary-text-color`)
- All entity interactions go through `hass.callService()` or `hass.callWS()`
