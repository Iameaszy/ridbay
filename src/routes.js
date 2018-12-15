import React from 'react';
import DefaultLayout from './layouts/home.layout';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import {Route} from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login-form/login';
const history = createBrowserHistory();
export default () => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={Login} />
      <DefaultLayout exact path="/login" component={Login} />
    </div>
  </ConnectedRouter>
);
