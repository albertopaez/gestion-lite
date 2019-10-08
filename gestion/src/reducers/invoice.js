import {
    LOAD_INVOICE_SUCCESS,
  } from '../actionTypes/invoice';
  
  const INITIAL_STATE = {
    invoice: false, // False means not fetched
    // lastInseted: null
  }
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case LOAD_INVOICE_SUCCESS:
        return {
          ...state,
          invoice: action.payload.invoice,
        }
      default:
        return {
          ...state,
        }
    }
  }