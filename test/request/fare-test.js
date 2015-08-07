import fare from '../../src/request/fare';
import {CABIN} from '../../src/request/fare';

describe('test fare', () => {
  it('should create a fare object with defaults', () => {
    const p = fare().getFare();
    expect(p).toEqual({
      origin: '',
      destination:'',
      date: '',
      maxStops: 0,
      maxConnectionDuration: 0,
      preferredCabin: CABIN.COACH,
      permittedDepartureTime: {
        earliestTime: '',
        latestTime: ''
      },
      permittedCarrier: [],
      prohibitedCarrier: []
    });
  });

  it('should create a fare object with custom defaults', () => {
    const customDefaults = {
      origin: 'a',
      destination:'b',
      date: 'c',
      maxStops: 1,
      maxConnectionDuration: 1,
      preferredCabin: CABIN.BUSINESS,
      permittedDepartureTime: {
        earliestTime: '11:22',
        latestTime: '22:33'
      },
      permittedCarrier: ['AAA'],
      prohibitedCarrier: ['BBB']
    };

    const p = fare(customDefaults).getFare();
    expect(p).toEqual(customDefaults);
  });

  it('should update fare correctly', () => {
    const expected = {
      origin: 'e',
      destination:'f',
      date: 'g',
      maxStops: 2,
      maxConnectionDuration: 3,
      preferredCabin: CABIN.FIRST,
      permittedDepartureTime: {
        earliestTime: '4:55',
        latestTime: '22:11'
      },
      permittedCarrier: ['CCC'],
      prohibitedCarrier: ['DDD']
    };

    const p = fare()
      .on('g').from('e').to('f')
      .after('4:55').before('22:11')
      .maxStops(2).maxConnectionDuration(3)
      .cabin(CABIN.FIRST)
      .withCarriers(['CCC'])
      .avoidCarriers(['DDD'])
      .getFare();

    expect(p).toEqual(expected);
  })
});