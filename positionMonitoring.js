
import { formatCurrency, formatPercent } from '../utils/formatter.js';

export function calculatePositionMetrics(trade, currentPrice) {
  const isLong = trade.entry > trade.sl;

  const pnlPercent = isLong
    ? ((currentPrice - trade.entry) / trade.entry) * 100
    : ((trade.entry - currentPrice) / trade.entry) * 100;

  const pnlAmount =
    trade.tradeValue *
    trade.leverage *
    (pnlPercent / 100);

  return {
    pnlPercent,
    pnlAmount,
    direction: isLong ? 'LONG' : 'SHORT'
  };
}

export function renderPositionMetrics(container, metrics) {
  container.innerHTML = `
    <div>
      <div>Direction: ${metrics.direction}</div>
      <div>PnL: ${formatCurrency(metrics.pnlAmount)}</div>
      <div>PnL %: ${formatPercent(metrics.pnlPercent)}</div>
    </div>
  `;
}
