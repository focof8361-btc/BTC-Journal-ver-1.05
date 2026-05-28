
export function isValidNumber(value) {
  return !isNaN(value) && isFinite(value);
}

export function validateTrade({ entry, sl, tp }) {
  return (
    isValidNumber(entry) &&
    isValidNumber(sl) &&
    isValidNumber(tp) &&
    entry > 0
  );
}
