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
}

export interface HassDeviceRegistryEntry {
  id: string;
  name?: string | null;
  name_by_user?: string | null;
  configuration_url?: string;
  manufacturer?: string | null;
  model?: string | null;
}
