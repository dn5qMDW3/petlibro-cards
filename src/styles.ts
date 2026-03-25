import { css } from 'lit';

export const cardStyles = css`
  :host {
    display: block;
  }

  ha-card {
    padding: 16px;
    overflow: hidden;
  }

  /* Header: image + name + status */
  .card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .device-image {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    object-fit: contain;
    background: var(--secondary-background-color, #f5f5f5);
    flex-shrink: 0;
  }

  .device-image-placeholder {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background: var(--secondary-background-color, #f5f5f5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--secondary-text-color);
  }

  .header-info {
    flex: 1;
    min-width: 0;
  }

  .device-name {
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .device-model {
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  /* Status badge */
  .status-badge {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    flex-shrink: 0;
  }

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .status-dot.online {
    background-color: var(--success-color, #4caf50);
  }

  .status-dot.offline {
    background-color: var(--error-color, #f44336);
  }

  .status-text {
    color: var(--secondary-text-color);
  }

  /* Metrics grid */
  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 8px;
    margin-bottom: 16px;
  }

  .metric-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-radius: 8px;
    background: var(--secondary-background-color, #f5f5f5);
  }

  .metric-item.alert {
    background: color-mix(in srgb, var(--error-color, #f44336) 10%, transparent);
  }

  .metric-icon {
    --mdc-icon-size: 20px;
    color: var(--state-icon-color, #757575);
    flex-shrink: 0;
  }

  .metric-item.alert .metric-icon {
    color: var(--error-color, #f44336);
  }

  .metric-content {
    flex: 1;
    min-width: 0;
  }

  .metric-label {
    font-size: 11px;
    color: var(--secondary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .metric-value {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Gauge bar */
  .gauge-bar {
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: var(--divider-color, #e0e0e0);
    margin-top: 4px;
    overflow: hidden;
  }

  .gauge-fill {
    height: 100%;
    border-radius: 2px;
    background: var(--primary-color, #03a9f4);
    transition: width 0.3s ease;
  }

  .gauge-fill.warning {
    background: var(--warning-color, #ff9800);
  }

  .gauge-fill.error {
    background: var(--error-color, #f44336);
  }

  /* Controls row */
  .controls-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }

  .control-button {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    background: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.2s;
    font-family: inherit;
  }

  .control-button:hover {
    opacity: 0.85;
  }

  .control-button:active {
    opacity: 0.7;
  }

  .control-button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .control-button.secondary {
    background: var(--secondary-background-color, #f5f5f5);
    color: var(--primary-text-color);
  }

  .control-button.active {
    background: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
  }

  .control-button ha-icon {
    --mdc-icon-size: 18px;
  }

  /* Unavailable state */
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

  /* Battery indicator */
  .battery-indicator {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .battery-indicator.low {
    color: var(--error-color, #f44336);
  }

  .battery-indicator.medium {
    color: var(--warning-color, #ff9800);
  }

  .battery-indicator.good {
    color: var(--success-color, #4caf50);
  }
`;
