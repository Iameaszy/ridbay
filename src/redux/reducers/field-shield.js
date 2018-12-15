import { REGISTER_LOGIN } from '../actions';

export const fieldhieldReducer = (state = false, action) => {
  switch (action.type) {
    case REGISTER_LOGIN:
      return action.state;
    default:
      return state;
  }
};
