import {
  LIST_WEBSITE_FAILURE,
  LIST_WEBSITE_LOADING,
  LIST_WEBSITE_SUCCESS,
} from '../actions';
import { combineReducers } from 'redux';

function loading(state = false, action) {
  switch (action.type) {
    case LIST_WEBSITE_LOADING:
      return action.state;
    default:
      return state;
  }
}

function success(state = { websites: [], fetched: 0 }, action) {
  switch (action.type) {
    case LIST_WEBSITE_SUCCESS:
      return {
        websites: state.websites.concat(action.data),
        fetched: action.fetched,
      };
    default:
      return state;
  }
}

function failure(state = '', action) {
  switch (action.type) {
    case LIST_WEBSITE_FAILURE:
      return action.error;
    default:
      return state;
  }
}

export const listWebsiteReducers = combineReducers({
  failure,
  success,
  loading,
});
