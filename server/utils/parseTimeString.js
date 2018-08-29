module.exports = (time) => {
  let timeString = '&t=';
  time = time.replace(/,/ig, ' ');
  time = time.replace(/\./ig, ' ');
  time = time.replace(/( )\s+/ig, ' ');
  timeString = timeString + time.split(' ').join('+');
  return timeString;
};