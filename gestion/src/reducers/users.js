import {
    LOAD_USER_SUCCESS,
  } from '../actionTypes/users.js';
  
  const INITIAL_STATE = {
    users: false, // False means not fetched
    // lastInseted: null
  }
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case LOAD_USER_SUCCESS:
        return {
          ...state,
          users: action.payload.users,
        }
      // case DELETE_BUSINESS_SUCCESS:
      // case EDIT_BUSINESS_SUCCESS:
      //   return {
      //     ...state,
      //     lastInseted: action.payload.business
      //   }
      default:
        return {
          ...state,
        }
    }
  }