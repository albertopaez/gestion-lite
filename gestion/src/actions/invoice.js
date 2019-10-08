import axios from '../requesters/axios';
import { apiErrorHandler } from '../actions/errors';
import {
  LOAD_INVOICE_SUCCESS,
  INACTIVE_INVOICE_DONE,
  ACTIVE_INVOICE_DONE,
  EDIT_INVOICE_DONE,
} from '../actionTypes/invoice';
import Swal from 'sweetalert2'

export const fetchInvoice = (done = () => { }) => (dispatch) => {
  axios.get(`/factura/`)
    .then((response) => {
      dispatch({
        type: LOAD_INVOICE_SUCCESS,
        payload: {
          invoice: response.data,
        }
      })
      done(response.data)
    })
    .catch((error) => {
      apiErrorHandler(error)
      done()
    })
}

export function inactiveUser(facturaId, done = () => { }) {
  return (dispatch) => {
    axios.delete(`/factura/inactive/${facturaId}`)
      .then((response) => {
        Swal.fire("Factura inactivada con éxito.")
        dispatch({
          type: INACTIVE_INVOICE_DONE,
        })
        done(response.data)
      })
      .catch((error) => {
        apiErrorHandler(error)
        done(null, error)
      })
  }
}

export function activeInvoice(facturaId, done = () => { }) {
  return (dispatch) => {
    axios.put(`/FACTURA/active/${facturaId}`)
      .then((response) => {
        Swal.fire("Factura activada con éxito.")
        dispatch({
          type: ACTIVE_INVOICE_DONE,
        })
        done(response.data)
      })
      .catch((error) => {
        apiErrorHandler(error)
        done(null, error)
      })
  }
}


export function editUser(data, done = () => { }) {
  return (dispatch) => {
    axios.put(`/factura/`, data)
      .then(response => {
        console.log(response.data.message);
        Swal.fire("Factura editada con éxito.")
        dispatch({
          type: EDIT_INVOICE_DONE,
        })
        done(response.data)
        fetchUsers()
      }).catch(err => {
        console.log("entering in catch")
        if (err != null) {
          console.log("Error de llamada a api: ", err)
          apiErrorHandler(err)
        }
      })
  }
}
