import moment from 'moment';
export default {

  convertSpecialCharsToString: (string) => {
    let newString = string;
    newString = newString.replace(/&quot;/ig, '"');
    newString = newString.replace(/&lt;/ig, '<');
    newString = newString.replace(/&gt;/ig, '>');
    newString = newString.replace(/&amp;/ig, '&');
    newString = newString.replace(/&#039;/ig, "'");
    return newString;
  },
  initMap: (google, lat, lng) => {
    lat = parseFloat(lat);
    lng = parseFloat(lng);
    const eventLocation = { lat, lng };
    const map = new google.maps.Map(document.getElementById('event-modal-map'), { zoom: 12, center: eventLocation });
    const marker = new google.maps.Marker({ position: eventLocation, map: map });
  },
  shortenStringByType: (type, string) => {
    let defaults = {
      title: 60,
      desc: 140
    };
    let temp = '';

    if (defaults[type]) {
      temp = string.substr(0, defaults[type]);
    }
    if (temp.length === string.length) {
      return string;
    }
    return temp + '...';
  },
  formatTime: (timeDate) => {
    let eventDate = {};
    eventDate.date_short = moment(timeDate).format('l');
    eventDate.date_long = moment(timeDate).format('ll');
    eventDate.full_dateTime = moment(timeDate).format('llll');
    eventDate.time = moment(timeDate).format('LT');


    return eventDate;
  }
};

