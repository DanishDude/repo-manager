import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import repo from './repoDetail';
import repoSearch from './repoSearch';
import user from './user';

export const allReducers = combineReducers({
  form: formReducer,
  repo,
  repoSearch,
  user
});

export default allReducers;
