import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App/App';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

// enables hot loading :D
if (module.hot) {
  module.hot.accept();
}