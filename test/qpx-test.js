import qpx from '../src/qpx';

describe('test qpx', () => {
  it('should create the request correctly', () => {
    const q = qpx('abcd');
    const req = q._generateRequest({}, 'abcd', q)
    const expected = {
      passengers: {
        adultCount: 0,
        childCount: 0,
        infantInLapCount: 0,
        infantInSeatCount: 0,
        seniorCount: 0
      },
      slice: [{
        origin: '',
        destination: '',
        date: '',
        maxStops: 0,
        maxConnectionDuration: 0,
        preferredCabin: 'COACH',
        permittedDepartureTime: {
          earliestTime: '',
          latestTime: ''
        },
        permittedCarrier: [],
        prohibitedCarrier: []
      }],
      maxPrice: 'GBP0',
      saleCountry: 'GB',
      refundable: false,
      solutions: 100
    };
    expect(req).toEqual(expected);
  });
});