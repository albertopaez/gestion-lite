import axios from '../requesters/axios';
import { apiErrorHandler } from '../actions/errors';
import {
  LOAD_USER_SUCCESS,
  INACTIVE_USER_DONE,
  ACTIVE_USER_DONE,
  EDIT_USER_DONE,
} from '../actionTypes/users.js';
import Swal from 'sweetalert2'

export const fetchUsers = (done = () => { }) => (dispatch) => {
  axios.get(`/users/`)
    .then((response) => {
      dispatch({
        type: LOAD_USER_SUCCESS,
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

export function inactiveUser(userId, done = () => { }) {
  return (dispatch) => {
    axios.delete(`/users/inactive/${userId}`)
      .then((response) => {
        Swal.fire("Usuario inactivado con éxito.")
        dispatch({
          type: INACTIVE_USER_DONE,
        })
        done(response.data)
      })
      .catch((error) => {
        apiErrorHandler(error)
        done(null, error)
      })
  }
}

export function activeUser(userId, done = () => { }) {
  return (dispatch) => {
    axios.put(`/users/active/${userId}`)
      .then((response) => {
        Swal.fire("Usuario activado con éxito.")
        dispatch({
          type: ACTIVE_USER_DONE,
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
    axios.put(`/users/`, data)
      .then(response => {
        console.log(response.data.message);
        Swal.fire("Usuario editado con éxito.")
        dispatch({
          type: EDIT_USER_DONE,
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
