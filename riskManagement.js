
import { DOM } from '../utils/dom.js';
import { validateTrade } from '../utils/validator.js';

function getNumber(el) {
  return Number(el?.value || 0);
}

export function calculateRiskReward() {
  const entry = getNumber(DOM.entry);
  const sl = getNumber(DOM.sl);
  const tp = getNumber(DOM.tp);

  if (!validateTrade({ entry, sl, tp })) {
    DOM.rr.value = '1 : -';
    return null;
  }

  const risk = Math.abs(entry - sl);

  if (risk <= 0) {
    DOM.rr.value = 'Invalid';
    return null;
  }

  const reward = Math.abs(tp - entry);
  const ratio = reward / risk;

  DOM.rr.value = `1 : ${ratio.toFixed(2)}`;

  return { risk, reward, ratio };
}

export function calculateRiskManagement() {
  const leverage = getNumber(DOM.leverage);
  const tradeValue = getNumber(DOM.tradeValue);

  const rr = calculateRiskReward();

  if (!rr) return null;

  return {
    positionSize: leverage * tradeValue,
    estimatedReward: rr.reward * leverage,
    estimatedRisk: rr.risk * leverage
  };
}
