
async function fetchJSON(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Request failed');
  }

  return response.json();
}

async function fromBinance() {
  const data = await fetchJSON(
    'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'
  );

  return Number(data.price);
}

async function fromCoinGecko() {
  const data = await fetchJSON(
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
  );

  return Number(data.bitcoin.usd);
}

export async function fetchBitcoinPriceWithFallback() {
  const price = await Promise.any([
    fromBinance(),
    fromCoinGecko()
  ]);

  if (!price || isNaN(price)) {
    throw new Error('Invalid BTC price');
  }

  return price;
}
