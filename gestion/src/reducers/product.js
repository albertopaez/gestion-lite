import {
    LOAD_PRODUCT_SUCCESS,
  } from '../actionTypes/products';
  
  const INITIAL_STATE = {
    users: false, // False means not fetched
    // lastInseted: null
  }
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case LOAD_PRODUCT_SUCCESS:
        return {
          ...state,
          product: action.payload.product,
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