import parseQuery from '../parseQuery';

describe('Server Utils: parseQuery', () => {

  describe('Should return a full query string based off req.query', () => {

    it('Should throw an error if location, time, and keywords are not passed in', () => {
      let query = {};
      expect(() => {
        parseQuery(query);
      }).toThrow('Must enter one of these options (location | time | keyword).');
    });

    it('Should return a query string with defaults attached', () => {
      let query = {
        location: 'Atlanta, Ga',
        time: 'Thursday, August 30, 2018 2:03 AM',
        keywords: 'theatre'
      };

      let expected = parseQuery(query);

      expect(expected.substr(25)).toEqual('&l=Atlanta+G&within=35&t=Thursday+August+30+2018+2:03+AM&q=theatre&image_sizes=large,medium&sort_order=popularity&page_size=12&page_number=1');
    });

    it('Should return a query string with defaults attached', () => {
      let query = {
        location: 'Atlanta, Ga',
        keywords: 'dancing'
      };

      let expected = parseQuery(query);
      expect(expected.substr(25)).toEqual("&l=Atlanta+G&within=35&q=dancing&image_sizes=large,medium&sort_order=popularity&page_size=12&page_number=1");
    });
  });
});