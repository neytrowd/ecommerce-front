declare global {
  interface Number {
    toIntegerString(locales?: string | string[]): string;
    toCurrencyString(locales?: string | string[]): string;
    toWeightString(locales?: string | string[]): string;
  }
}

Number.prototype.toIntegerString = function (locales?: string | string[]) {
  return Number(this).toLocaleString(locales, {
    maximumFractionDigits: 0,
  });
};

Number.prototype.toCurrencyString = function (locales?: string | string[]) {
  return Number(this).toLocaleString(locales, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

Number.prototype.toWeightString = function (locales?: string | string[]) {
  return Number(this).toLocaleString(locales, {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });
};

export {};
