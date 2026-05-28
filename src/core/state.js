
import { STORAGE_KEYS } from './constants.js';

export const AppState = {
  channels: [],
  logs: [],
  activeChannel: null,
  activeLevels: {},
  btcPrice: null,

  load() {
    this.channels = JSON.parse(localStorage.getItem(STORAGE_KEYS.CHANNELS)) || [];
    this.logs = JSON.parse(localStorage.getItem(STORAGE_KEYS.LOGS)) || [];
    this.activeChannel = localStorage.getItem(STORAGE_KEYS.ACTIVE_CHANNEL);
    this.activeLevels = JSON.parse(localStorage.getItem(STORAGE_KEYS.ACTIVE_LEVELS)) || {};
    this.btcPrice = JSON.parse(localStorage.getItem(STORAGE_KEYS.BTC_PRICE)) || null;
  },

  save() {
    localStorage.setItem(STORAGE_KEYS.CHANNELS, JSON.stringify(this.channels));
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(this.logs));
    localStorage.setItem(STORAGE_KEYS.ACTIVE_LEVELS, JSON.stringify(this.activeLevels));

    if (this.activeChannel) {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_CHANNEL, this.activeChannel);
    }

    if (this.btcPrice) {
      localStorage.setItem(STORAGE_KEYS.BTC_PRICE, JSON.stringify(this.btcPrice));
    }
  }
};
