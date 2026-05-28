
export function formatCurrency(value) {
  return `$${Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

export function formatPercent(value) {
  return `${Number(value).toFixed(2)}%`;
}
