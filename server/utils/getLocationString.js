module.exports = (location) => {
  let result = '&l=';

  // if it is a zipcode
  if (!isNaN(location) && typeof Number(location) === 'number' && location.length === 5) {
    console.log('location is a zip code')
    result = result + location;
    return result;
  }

  // if it is a lat,lng [lat,lng]
  if (Array.isArray(location)) {
    console.log('location is an array');

    result = result + location.join(',');
    return result;
  }

  // if the location is a string
  if (typeof location === 'string') {
    console.log(location);
    location = location.replace(/,/ig, ' ');
    location = location.replace(/\./ig, ' ');
    location = location.replace(/( )\s+/ig, ' ');
    console.log(location);

    console.log(location, 'without grammar');
    result = result + location.split(' ').join('+');
    return result;
  }
}