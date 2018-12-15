import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_LOADING } from '../actions';
import { combineReducers } from 'redux';

function loading(state = false, action) {
  switch (action.type) {
    case LOGIN_LOADING:
      return action.state;
    default:
      return state;
  }
}

function success(state = false, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.status;
    default:
      return state;
  }
}

function failure(state = '', action) {
  switch (action.type) {
    case LOGIN_FAILURE:
      return action.error;
    default:
      return state;
  }
}

export const loginReducers = combineReducers({
  failure,
  success,
  loading,
});
