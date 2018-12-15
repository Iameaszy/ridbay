import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './lib/fontawesome';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

export default store;
