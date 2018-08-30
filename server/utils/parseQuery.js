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
    page_size,
    page_number
  } = query;


  if (!location && !time && !keywords) {
    throw new Error('Must enter one of these options (location | time | keyword).')
  }
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
    + defaults.page_size(page_size)
    + defaults.page_number(page_number);
  return queryString;
}