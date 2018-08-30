module.exports = (keywords) => {
  // Key words should be an string.
  keywords = '' + keywords;
  let keywordString = '&q=';

  keywords = keywords.replace(/,/ig, ' ');
  keywords = keywords.replace(/\./ig, ' ');
  keywords = keywords.replace(/( )\s+/ig, ' ');

  keywordString = keywordString + keywords.split(' ').join('+');
  keywordString = keywordString[keywordString.length - 1] === '+' ? keywordString.substr(0, keywordString.length - 1) : keywordString;
  return !keywordString.includes('undefined') ? keywordString : null;

};