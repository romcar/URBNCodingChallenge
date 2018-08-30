const moment = require('moment');

module.exports = (time) => {
  let timeString = '&t=';
  time = time.replace(/,/ig, ' ');
  time = time.replace(/\./ig, ' ');
  time = time.replace(/( )\s+/ig, ' ');
  timeString = timeString + time.split(' ').join('+');

  timeString = timeString[timeString.length - 1] === '+' ? timeString.substr(0, timeString.length - 1) : timeString;
  return !timeString.includes('undefined') ? timeString : null;
};