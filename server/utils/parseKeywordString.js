module.exports = (keywords) => {
  // Key words should be an string.
  let keywordString = '&q=';

  keywords = keywords.replace(/,/ig, ' ');
  keywords = keywords.replace(/\./ig, ' ');
  keywords = keywords.replace(/( )\s+/ig, ' ');

  keywordString = keywordString + keywords.split(' ').join('+');

  return keywordString;

};