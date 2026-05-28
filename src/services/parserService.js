
const patterns = {
  entry: /(?:entry|buy|sell)[:\s]+\$?([\d,.]+)/i,
  sl: /(?:sl|stop\s?loss)[:\s]+\$?([\d,.]+)/i,
  tp: /(?:tp|take\s?profit)[:\s]+\$?([\d,.]+)/i
};

export function parseTradeText(text) {
  const result = {};

  for (const [key, pattern] of Object.entries(patterns)) {
    const match = text.match(pattern);

    result[key] = match
      ? Number(match[1].replace(/,/g, ''))
      : null;
  }

  return result;
}
