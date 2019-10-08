import axios from '../requesters/axios';
import { apiErrorHandler } from '../actions/errors';
import {
  LOAD_PRODUCT_SUCCESS,
  INACTIVE_PRODUCT_DONE,
  ACTIVE_PRODUCT_DONE,
  EDIT_PRODUCT_DONE,
} from '../actionTypes/products';
import Swal from 'sweetalert2'

export const fetchProduct = (done = () => { }) => (dispatch) => {
  axios.get(`/productos/`)
    .then((response) => {
      dispatch({
        type: LOAD_PRODUCT_SUCCESS,
        payload: {
          users: response.data,
        }
      })
      done(response.data)
    })
    .catch((error) => {
      apiErrorHandler(error)
      done()
    })
}

export function inactiveProduct(ProductId, done = () => { }) {
  return (dispatch) => {
    axios.delete(`/productos/inactive/${ProductId}`)
      .then((response) => {
        Swal.fire("Producto inactivado con éxito.")
        dispatch({
          type: INACTIVE_PRODUCT_DONE,
        })
        done(response.data)
      })
      .catch((error) => {
        apiErrorHandler(error)
        done(null, error)
      })
  }
}

export function activeProduct(ProductId, done = () => { }) {
  return (dispatch) => {
    axios.put(`/productos/active/${ProductId}`)
      .then((response) => {
        Swal.fire("Producto activado con éxito.")
        dispatch({
          type: ACTIVE_PRODUCT_DONE,
        })
        done(response.data)
      })
      .catch((error) => {
        apiErrorHandler(error)
        done(null, error)
      })
  }
}


export function editProduct(data, done = () => { }) {
  return (dispatch) => {
    axios.put(`/productos/`, data)
      .then(response => {
        console.log(response.data.message);
        Swal.fire("Producto editado con éxito.")
        dispatch({
          type: EDIT_PRODUCT_DONE,
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
