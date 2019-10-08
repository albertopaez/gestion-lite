import { tokenName } from '../constants/index';
import {UNAUTH_USER} from '../actionTypes/auth';

export function logOutUser(done) {
  return (dispatch => {
    localStorage.removeItem(tokenName);
    dispatch({
      type: UNAUTH_USER,
    });
    done()
  })
}
