
import { AppState } from './core/state.js';
import { calculateRiskReward } from './modules/riskManagement.js';
import { fetchBitcoinPriceWithFallback } from './services/btcPriceService.js';

async function boot() {
  try {
    AppState.load();

    calculateRiskReward();

    const btcPrice = await fetchBitcoinPriceWithFallback();

    console.log('BTC PRICE', btcPrice);

  } catch (error) {
    console.error('BOOT ERROR', error);
  }
}

boot();
