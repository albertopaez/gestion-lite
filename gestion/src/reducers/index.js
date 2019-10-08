import { combineReducers } from 'redux';

import auth from './auth';
import product from './product';
import users from './users';
import invoice from './invoice'

const reducers = combineReducers({
  auth,
  product,
  users,
  invoice
})

export default reducers;