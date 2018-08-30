import defaults from '../defaults';

describe('Server Utils: defaults', () => {
  describe('Should return query strings', () => {
    it('Should return a within query string with a default value of 35 when no parameter is provided', () => {
      let expected = defaults.within();
      expect(expected).toEqual('&within=35');
    });

    it('Should return a within query string with a default value of x when x is provided', () => {
      let expected = defaults.within(50);
      expect(expected).toEqual('&within=50');
    });

    it('Should return a image_sizes query string with default values set to medium, large', () => {
      let expected = defaults.image_sizes();
      expect(expected).toEqual('&image_sizes=large,medium');
    });

    it('Should return a image_sizes query string with values being given', () => {
      let expected = defaults.image_sizes(['small', 'large', 'medium']);
      expect(expected).toEqual('&image_sizes=small,large,medium');
    });

    it('Should return a sort_order query string with default values set to popularity', () => {
      let expected = defaults.sort_order();
      expect(expected).toEqual('&sort_order=popularity');
    });

    it('Should return a sort_order query string with value being given', () => {
      let expected = defaults.sort_order('relevance');
      expect(expected).toEqual('&sort_order=relevance');
    });

    it('Should return a page_size query string with default values set to 12', () => {
      let expected = defaults.page_size();
      expect(expected).toEqual('&page_size=12');
    });

    it('Should return a page_size query string with value being given', () => {
      let expected = defaults.page_size(100);
      expect(expected).toEqual('&page_size=100');
    });

    it('Should return a page_number query string with default values set to 1', () => {
      let expected = defaults.page_number();
      expect(expected).toEqual('&page_number=1');
    });

    it('Should return a page_size query string with value being given', () => {
      let expected = defaults.page_number(3);
      expect(expected).toEqual('&page_number=3');
    });
  });
});
