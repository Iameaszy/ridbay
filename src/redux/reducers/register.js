import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_LOADING,
} from '../actions';
import { combineReducers } from 'redux';

function loading(state = false, action) {
  switch (action.type) {
    case REGISTER_LOADING:
      return action.state;
    default:
      return state;
  }
}
function success(state = false, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return action.status;
    default:
      return state;
  }
}

function failure(state = '', action) {
  switch (action.type) {
    case REGISTER_FAILURE:
      return action.error;
    default:
      return state;
  }
}

export const registerReducers = combineReducers({
  failure,
  success,
  loading,
});
