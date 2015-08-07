import defaults from 'lodash/object/defaults';
import clone from 'lodash/lang/clone';
import keyMirror from 'keymirror';

export const CABIN = keyMirror({
  COACH: 0,
  PREMIUM_COACH: 0,
  BUSINESS: 0,
  FIRST: 0
});

export default function fare(defaultsOverride = {}) {
  const fare = defaults(defaultsOverride, {
    // Airport or city IATA designator of the origin.
    origin: '',
    // Airport or city IATA designator of the destination.
    destination: '',
    // Departure date in YYYY-MM-DD format.
    date: '',
    // The maximum number of stops the passenger(s) are willing to accept in this slice.
    maxStops: 0,
    // The longest connection between two legs, in minutes, the passenger(s) are willing to accept.
    maxConnectionDuration: 0,
    // Prefer solutions that book in this cabin for this slice. Allowed values are COACH, PREMIUM_COACH, BUSINESS,
    // and FIRST.
    preferredCabin: CABIN.COACH,
    permittedDepartureTime: {
      // The earliest time of day in HH:MM format.
      earliestTime: '',
      // The latest time of day in HH:MM format.
      latestTime: ''
    },
    // A list of 2-letter IATA airline designators.
    // Slices with only these carriers should be returned.
    permittedCarrier: [],
    // A list of 2-letter IATA airline designators. Exclude slices that use these carriers.
    prohibitedCarrier: []
  });

  return {
    from(f) {
      fare.origin = f;
      return this;
    },
    to(t) {
      fare.destination = t;
      return this;
    },
    on(d) {
      fare.date = d;
      return this;
    },
    after(t) {
      fare.permittedDepartureTime.earliestTime = t;
      return this;
    },
    before(t) {
      fare.permittedDepartureTime.latestTime = t;
      return this;
    },
    maxStops(s) {
      fare.maxStops = s;
      return this;
    },
    maxConnectionDuration(c) {
      fare.maxConnectionDuration = c;
      return this;
    },
    cabin(c) {
      fare.preferredCabin = c;
      return this;
    },
    withCarriers(c) {
      fare.permittedCarrier = fare.permittedCarrier.concat(c);
      return this;
    },
    avoidCarriers(c) {
      fare.prohibitedCarrier = fare.prohibitedCarrier.concat(c);
      return this;
    },
    getFare() {
      return clone(fare);
    }
  }
}