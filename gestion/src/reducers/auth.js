import { AUTH_USER, UNAUTH_USER, AUTH_USER_LOGIN, COOKIE_CHECKED } from '../actionTypes/auth';

const INITIAL_STATE = {
  authenticated: false,
  currentUser: false,
  checkingCookie: true,
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: action.payload.currentUser,
        checkLoginCookie: false,
      }
    case AUTH_USER_LOGIN:
      return {
        ...state,
        authenticated: true,
        currentUser: action.payload.currentUser,
        checkLoginCookie: true,
      }
    case UNAUTH_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      }
    case COOKIE_CHECKED:
      return {
        ...state,
        checkingCookie: false,
      }
    default:
      return {
        ...state,
      }
  }
}