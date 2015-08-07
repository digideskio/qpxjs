import defaults from 'lodash/object/defaults';
import clone from 'lodash/lang/clone';

export default function passengers(customDefaults = {}) {
  const passengers = defaults(customDefaults,  {
    adultCount: 0,
    childCount: 0,
    infantInLapCount: 0,
    infantInSeatCount: 0,
    seniorCount: 0
  });

  return {
    adults(a) {
      passengers.adultCount = a;
      return this;
    },
    children(c) {
      passengers.childCount = c;
      return this;
    },
    infantsInLap(i) {
      passengers.infantInLapCount = i;
      return this;
    },
    infantsInSeat(i) {
      passengers.infantInSeatCount = i;
      return this;
    },
    seniors(s) {
      passengers.seniorCount = s;
      return this;
    },
    getPassengers() {
      return clone(passengers);
    }
  }
}