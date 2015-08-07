// IATA country code representing the point of sale. This determines the "equivalent amount paid"
// currency for the ticket.
export default function country(customDefault = 'GB') {
  let country = customDefault;

  return {
    set(c) {
      country = c;
      return this;
    },
    getCountry() {
      return country;
    }
  }
}