import {
  ADD_WEBSITE_FAILURE,
  ADD_WEBSITE_LOADING,
  ADD_WEBSITE_SUCCESS,
} from '../actions';
import { combineReducers } from 'redux';

function loading(state = false, action) {
  switch (action.type) {
    case ADD_WEBSITE_LOADING:
      return action.state;
    default:
      return state;
  }
}

function success(state = false, action) {
  switch (action.type) {
    case ADD_WEBSITE_SUCCESS:
      return action.state;
    default:
      return state;
  }
}

function failure(state = '', action) {
  switch (action.type) {
    case ADD_WEBSITE_FAILURE:
      return action.error;
    default:
      return state;
  }
}

export const addWebsiteReducers = combineReducers({
  failure,
  success,
  loading,
});
