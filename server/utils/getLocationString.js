module.exports = (location) => {
  // Change anything but an array into a string
  !Array.isArray(location) ? location = '' + location : null;
  let result = '&l=';

  // if it is a zipcode
  if (!isNaN(location) && typeof Number(location) === 'number' && location.length === 5) {
    result = result + location;
    return result;
  }

  // if it is a lat,lng [lat,lng]
  if (Array.isArray(location)) {
    result = result + location.join(',');
    return result;
  }

  // if the location is a string
  if (typeof location === 'string') {
    // remove , . and double or more spaces
    location = location.replace(/,/ig, ' ');
    location = location.replace(/\./ig, ' ');
    location = location.replace(/( )\s+/ig, ' ');

    result = result + location.split(' ').join('+');
    result = result[result.length - 1] === '+' ? result.substr(0, result.length - 1) : result;
    return !result.includes('undefined') ? result : null;
  }
}