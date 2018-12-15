import React from 'react';
import DefaultLayout from './layouts/home.layout';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import Home from './pages/home/home';
import Login from './pages/login-form/login';
const history = createBrowserHistory();
export default () => (
  <ConnectedRouter history={history}>
    <div>
      <DefaultLayout exact path="/" component={Home} />
      <DefaultLayout exact path="/login" component={Login} />
    </div>
  </ConnectedRouter>
);
