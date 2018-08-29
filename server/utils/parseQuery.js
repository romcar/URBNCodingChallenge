const config = require('../../config');
const defaults = require('./defaults');

const parseLocationString = require('./getLocationString');

module.exports = (query) => {
  let queryString = '?';
  let key = 'app_key=' + config.app_key || process.env.EVENTFUL_KEY;

  let { location, within, image_sizes, sort, page_size } = query;

  queryString = queryString + key + '&';

  // ************************** LOCATION
  location ? queryString = queryString + parseLocationString(location) : null;
  // remove last '+' sign
  location ? queryString = queryString.substring(0, queryString.length - 1) : null;

  queryString = queryString
    + defaults.within(within)
    + defaults.image_sizes(image_sizes)
    + defaults.sort_order(sort)
    + defaults.page_size(page_size);
  return queryString;
}