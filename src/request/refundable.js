// IATA country code representing the point of sale. This determines the "equivalent amount paid"
// currency for the ticket.
export default function refundable(customDefault = false) {
  let refundable = customDefault;

  return {
    set(r) {
      refundable = r;
      return this;
    },
    getRefundable() {
      return refundable;
    }
  }
}