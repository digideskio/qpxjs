import refundable from '../../src/request/refundable';

describe('coutry test', () => {
  it('should use GB as default', () => {
    expect(refundable().getRefundable()).toBe(false);
  });

  it('should should use a custom default correctly', () => {
    expect(refundable(true).getRefundable()).toBe(true);
  });

  it('should use update the refundable correctly', () => {
    expect(refundable().set(true).getRefundable()).toBe(true);
  });
});