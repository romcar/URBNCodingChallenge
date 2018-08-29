const config = require('../../config');
const defaults = require('./defaults');

const parseLocationString = require('./getLocationString');
const parseTimeString = require('./parseTimeString');
const parseKeywordString = require('./parseKeywordString');

module.exports = (query) => {
  let queryString = '?';
  let key = 'app_key=' + config.app_key || process.env.EVENTFUL_KEY;

  let {
    location,
    time,
    keywords,
    within,
    image_sizes,
    sort,
    page_size
  } = query;

  // ************************** SET THE KEY
  queryString = queryString + key;

  // ************************** LOCATION
  location ? queryString = queryString + parseLocationString(location) : null;
  // remove last '+' sign
  location ? queryString = queryString.substring(0, queryString.length - 1) + defaults.within(within) : null;

  // ************************** TIME
  time ? queryString = queryString + parseTimeString(time) : null;

  // ************************** KEYWORD
  keywords ? queryString = queryString + parseKeywordString(keywords) : null;

  // ************************* CREATE THE STRING DEFAULTS
  queryString = queryString
    + defaults.image_sizes(image_sizes)
    + defaults.sort_order(sort)
    + defaults.page_size(page_size);
  return queryString;
}