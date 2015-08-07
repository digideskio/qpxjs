import price from '../../src/request/price';

describe('coutry test', () => {
  it('should use GBP0 as default', () => {
    expect(price().getPrice()).toBe('GBP0');
  });

  it('should should use a custom default correctly', () => {
    const defaults = {amount: 10, currency:'USD'};
    expect(price(defaults).getPrice()).toBe('USD10');
  });

  it('should use update the price correctly', () => {
    expect(price().amount(200).currency('EUR').getPrice()).toBe('EUR200');
  });
});