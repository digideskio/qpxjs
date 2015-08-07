import passengers from '../../src/request/passengers';

describe('test passengers', () => {
  it('should create a passengers object with defaults', () => {
    const p = passengers().getPassengers();
    expect(p).toEqual({
      adultCount: 0,
      childCount: 0,
      infantInLapCount: 0,
      infantInSeatCount: 0,
      seniorCount: 0
    });
  });

  it('should create a passengers object with custom defaults', () => {
    const customDefaults = {
      adultCount: 1,
      childCount: 2,
      infantInLapCount: 3,
      infantInSeatCount: 4,
      seniorCount: 5
    };

    const p = passengers(customDefaults).getPassengers();
    expect(p).toEqual(customDefaults);
  });

  it('should update passengers correctly', () => {
    const expected = {
      adultCount: 5,
      childCount: 4,
      infantInLapCount: 3,
      infantInSeatCount: 2,
      seniorCount: 1
    };

    const p = passengers()
      .adults(5)
      .children(4)
      .infantsInLap(3)
      .infantsInSeat(2)
      .seniors(1)
      .getPassengers();

    expect(p).toEqual(expected);
  })
});