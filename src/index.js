import React from 'react';
import ReactDOM from 'react-dom';
import config from '../config';

import App from './containers/App/App';

// inject the maps script upon render
const googleMaps = document.createElement('script');
googleMaps.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${config.googleMaps_key}`);
googleMaps.setAttribute('async', true);
googleMaps.setAttribute('defer', true);
googleMaps.setAttribute('type', 'text/javascript');


document.getElementsByTagName('head')[0].appendChild(googleMaps);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

// enables hot loading :D
if (module.hot) {
  module.hot.accept();
}
