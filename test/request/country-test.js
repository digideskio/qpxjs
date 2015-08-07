import country from '../../src/request/country';

describe('coutry test', () => {
  it('should use GB as default', () => {
    expect(country().getCountry()).toBe('GB');
  });

  it('should should use a custom default correctly', () => {
    expect(country('foo').getCountry()).toBe('foo');
  });

  it('should use update the country correctly', () => {
    expect(country().set('bar').getCountry()).toBe('bar');
  });
});