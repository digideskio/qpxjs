import defaults from 'lodash/object/defaults';

export default function price(customDefaults = {}) {
  const price = defaults(customDefaults, {
    amount: 0,
    currency: 'GBP'
  });

  return {
    amount(a) {
      price.amount = a;
      return this;
    },
    currency(c) {
      price.currency = c;
      return this;
    },
    getPrice() {
      // Do not return solutions that cost more than this price. The currency is specified in ISO-4217. The format,
      // in regex, is [A-Z]{3}\d+(\.\d+)?
      return `${price.currency}${price.amount}`;
    }
  }
};