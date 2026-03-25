import {
  ALL_KNOWN_KEYS,
  FEEDER_SIGNATURE_KEYS,
  FOUNTAIN_SIGNATURE_KEYS,
  LITTER_BOX_SIGNATURE_KEYS,
} from './const';
import type { DeviceEntities, DeviceType, HomeAssistant } from './types';

const DOMAIN_MAP: Record<string, keyof DeviceEntities> = {
  sensor: 'sensors',
  binary_sensor: 'binary_sensors',
  button: 'buttons',
  switch: 'switches',
  number: 'numbers',
  select: 'selects',
};

/**
 * Extract the entity key suffix from an entity_id.
 * E.g., "sensor.my_feeder_electric_quantity" → "electric_quantity"
 *
 * Matches the longest known key suffix against the object_id portion.
 */
function extractKeySuffix(entityId: string): string | undefined {
  // Get the object_id part (after the domain.)
  const dotIdx = entityId.indexOf('.');
  if (dotIdx < 0) return undefined;
  const objectId = entityId.substring(dotIdx + 1);

  for (const key of ALL_KNOWN_KEYS) {
    if (objectId.endsWith(key)) {
      // Ensure it's a proper boundary: preceded by '_' or is the entire object_id
      const prefix = objectId.substring(0, objectId.length - key.length);
      if (prefix === '' || prefix.endsWith('_')) {
        return key;
      }
    }
  }
  return undefined;
}

/**
 * Get the device_id for an entity from the entity registry.
 */
export function getDeviceId(hass: HomeAssistant, entityId: string): string | undefined {
  return hass.entities?.[entityId]?.device_id ?? undefined;
}

/**
 * Find all entities belonging to a device and group them by domain + key suffix.
 */
export function getDeviceEntities(hass: HomeAssistant, deviceId: string): DeviceEntities {
  const result: DeviceEntities = {
    sensors: {},
    binary_sensors: {},
    buttons: {},
    switches: {},
    numbers: {},
    selects: {},
  };

  if (!hass.entities) return result;

  for (const [entityId, entry] of Object.entries(hass.entities)) {
    if (entry.device_id !== deviceId) continue;

    const domain = entityId.substring(0, entityId.indexOf('.'));
    const group = DOMAIN_MAP[domain];
    if (!group) continue;

    const key = extractKeySuffix(entityId);
    if (key) {
      result[group][key] = entityId;
    }
  }

  return result;
}

/**
 * Detect device type by checking for signature entity keys.
 * Priority: litter_box (most unique) → feeder → fountain (fallback).
 */
export function detectDeviceType(entities: DeviceEntities): DeviceType {
  const allKeys = new Set([
    ...Object.keys(entities.sensors),
    ...Object.keys(entities.binary_sensors),
    ...Object.keys(entities.buttons),
    ...Object.keys(entities.switches),
  ]);

  // Litter box: most unique keys
  if (LITTER_BOX_SIGNATURE_KEYS.some((k) => allKeys.has(k))) {
    return 'litter_box';
  }

  // Feeder
  if (FEEDER_SIGNATURE_KEYS.some((k) => allKeys.has(k))) {
    return 'feeder';
  }

  // Fountain
  if (FOUNTAIN_SIGNATURE_KEYS.some((k) => allKeys.has(k))) {
    return 'fountain';
  }

  // Default to feeder if unclear
  return 'feeder';
}

/**
 * Find the first entity_id belonging to a device.
 * Used when config has device_id but no entity (new device-picker flow).
 */
export function getFirstEntityId(hass: HomeAssistant, deviceId: string): string | undefined {
  if (!hass.entities) return undefined;
  for (const [entityId, entry] of Object.entries(hass.entities)) {
    if (entry.device_id === deviceId) {
      return entityId;
    }
  }
  return undefined;
}

/**
 * Safely get the state string for an entity.
 */
export function getStateValue(hass: HomeAssistant, entityId: string | undefined): string | undefined {
  if (!entityId) return undefined;
  const state = hass.states[entityId]?.state;
  if (state === 'unavailable' || state === 'unknown') return undefined;
  return state;
}

/**
 * Safely get a numeric state value.
 */
export function getNumericState(hass: HomeAssistant, entityId: string | undefined): number | undefined {
  const val = getStateValue(hass, entityId);
  if (val === undefined) return undefined;
  const num = Number(val);
  return isNaN(num) ? undefined : num;
}

/**
 * Get the device name from the device registry.
 */
export function getDeviceName(hass: HomeAssistant, deviceId: string): string | undefined {
  return hass.devices?.[deviceId]?.name ?? undefined;
}

/**
 * Get the device image URL from entity attributes or device registry.
 */
export function getDeviceImage(
  hass: HomeAssistant,
  entityId: string,
  deviceId: string,
): string | undefined {
  // Try entity_picture attribute first
  const picture = hass.states[entityId]?.attributes?.entity_picture;
  if (picture) return picture;

  // Fall back to device configuration_url (which holds icon_url in petlibro)
  return hass.devices?.[deviceId]?.configuration_url ?? undefined;
}

/**
 * Check if an entity's state is "on" or equivalent truthy value.
 */
export function isEntityOn(hass: HomeAssistant, entityId: string | undefined): boolean {
  if (!entityId) return false;
  const state = hass.states[entityId]?.state;
  return state === 'on' || state === 'true' || state === 'True';
}

/**
 * Format a timestamp entity state to a readable time string.
 */
export function formatTime(hass: HomeAssistant, entityId: string | undefined): string | undefined {
  const val = getStateValue(hass, entityId);
  if (!val) return undefined;
  try {
    const date = new Date(val);
    if (isNaN(date.getTime())) return val;
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } catch {
    return val;
  }
}
