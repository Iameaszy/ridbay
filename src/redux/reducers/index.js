import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// calling the default reducer to create a link
import { registerReducers } from './register';
import { fieldhieldReducer } from './field-shield';
import { loginReducers } from './login';
import { addWebsiteReducers } from './addWebsite';
import { listWebsiteReducers } from './listWebsite';

export const rootReducers = combineReducers({
  // add reducer files references here
  form: formReducer,
  signup: registerReducers,
  login: loginReducers,
  shield: fieldhieldReducer,
  addWebsite: addWebsiteReducers,
  listWebsites: listWebsiteReducers,
});
