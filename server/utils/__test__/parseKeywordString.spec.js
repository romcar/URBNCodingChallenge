import parseKeywordString from '../parseKeywordString';

describe('Server Utils: parseKeywordString', () => {

  describe('Should return a keyword query string', () => {

    it('when it is given nothing, it returns nothing', () => {
      let expected = parseKeywordString();
      expect(expected).toEqual(null);
    });

    it('when given a string or words, it removes all ",", ",", and extra/(contiguous spaces)', () => {
      let expected = parseKeywordString('dancing, in      the .. moonlight.');
      expect(expected).toEqual('&q=dancing+in+the+moonlight');
    });
  });
});