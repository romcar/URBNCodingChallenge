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
    console.log(eventLocation, '!!!!!!!!!!!!!!!!!!!!!!!!');
    const map = new google.maps.Map(document.getElementById('event-modal-map'), { zoom: 4, center: eventLocation });
    const marker = new google.maps.Marker({ position: eventLocation, map: map });
  },
};

