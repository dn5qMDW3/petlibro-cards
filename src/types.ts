export type DeviceType = 'feeder' | 'fountain' | 'litter_box';

export interface PetlibroCardConfig {
  type: string;
  device_id?: string;        // Primary: picked via device picker
  entity?: string;           // Legacy: backward compat for existing dashboards
  name?: string;
  show_controls?: boolean;
}

export interface DeviceEntities {
  sensors: Record<string, string>;
  binary_sensors: Record<string, string>;
  buttons: Record<string, string>;
  switches: Record<string, string>;
  numbers: Record<string, string>;
  selects: Record<string, string>;
  dates: Record<string, string>;
  images: Record<string, string>;
  updates: Record<string, string>;
}

// Minimal HA types to avoid heavy dependency on ha-frontend
export interface HomeAssistant {
  states: Record<string, HassState>;
  entities: Record<string, HassEntityRegistryEntry>;
  devices: Record<string, HassDeviceRegistryEntry>;
  callService: (
    domain: string,
    service: string,
    data?: Record<string, unknown>,
  ) => Promise<void>;
  /**
   * HA's own state formatter — the one the built-in tile and entity rows use.
   * Applies the user's locale, unit preference and per-entity display
   * precision. Optional because very old cores lack it.
   */
  formatEntityState?: (stateObj: HassState, state?: string) => string;
  formatEntityAttributeValue?: (
    stateObj: HassState,
    attribute: string,
    value?: unknown,
  ) => string;
}

export interface HassState {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed: string;
  last_updated: string;
}

export interface HassEntityRegistryEntry {
  entity_id: string;
  device_id?: string;
  platform: string;
  /**
   * The integration's own key for this entity (HA exposes it on the registry
   * display collection as `tk`). This is stable across user renames, unlike
   * the entity_id, which HA derives from the entity's *name*.
   */
  translation_key?: string;
  /** Entity-level name, already localised and without the device prefix. */
  name?: string;
}

export interface HassDeviceRegistryEntry {
  id: string;
  name?: string | null;
  name_by_user?: string | null;
  configuration_url?: string;
  manufacturer?: string | null;
  model?: string | null;
}

/** Service calls a card can make. Bundled so adding one does not change every signature. */
export interface CardActions {
  press: (entityId: string) => void;
  toggle: (entityId: string) => void;
  select: (entityId: string, option: string) => void;
  setNumber: (entityId: string, value: number) => void;
}

/** Everything a card renderer needs. */
export interface CardContext {
  hass: HomeAssistant;
  entities: DeviceEntities;
  showControls: boolean;
  actions: CardActions;
}
