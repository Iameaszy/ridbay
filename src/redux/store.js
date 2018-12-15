import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { rootReducers } from './reducers';
import ReduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
export const store = createStore(
  connectRouter(history)(rootReducers),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware,
      logger,
      ReduxPromise,
    ),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  ),
);
