import getLocationString from '../getLocationString';

describe('Server Utils: ', () => {
  describe('Should return nothing if no location is passed in', () => {
    let expected = getLocationString();
    expect(expected).toEqual(null);
  });

  describe('Should be able to return query string with ', () => {
    it('coordinate numbers', () => {
      let expected = getLocationString([12.71729, -78.919829777]);
      expect(expected).toBe('&l=12.71729,-78.919829777');
    });

    it('zipcodes in string form', () => {
      let expected = getLocationString('19122');
      expect(expected).toEqual('&l=19122');
    });

    it('zipcodes in number format', () => {
      let expected = getLocationString(19122);
      expect(expected).toEqual('&l=19122');
    });

    it('city, state. (with grammar)', () => {
      let expected = getLocationString('Philadelphia, Pa.');
      expect(expected).toEqual("&l=Philadelphia+Pa");
    });

    it('city, state. (without grammar)', () => {
      let expected = getLocationString('Philadelphia      Pa');
      expect(expected).toEqual("&l=Philadelphia+Pa");
    });
  });

  describe('Should be able to return query string with a city state', () => { });
});