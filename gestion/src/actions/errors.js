
import { default as Swal } from 'sweetalert2';
import {
  HEADER_ERROR,
  TIMEOUT_ERROR,
  EXPIRED_ERROR,
  UNAUTHORIZED_ERROR,
  FORBIDDEN_ERROR,
  NOT_FOUND_ERROR,
  SERVER_ERROR,
  EMAIL_ALREADY_EXISTS,
} from '../constants/messages';

export function apiErrorHandler(error) {
  if (error.response) {
    // The request was made, but the server responded with a status code
    // that falls out of the range of 2xx
    // console.error(error.response);
    switch (error.response.status) {
      case 400:
        return Swal.fire(HEADER_ERROR, SERVER_ERROR, 'warning')
      case 401:
        if (error.response.data) {
          switch (error.response.data.error) {
            case 'invalidEmailOrPassword':
              return Swal.fire(HEADER_ERROR, "Usuario o contraseña inválido", 'warning')
            default:
              return Swal.fire(HEADER_ERROR, UNAUTHORIZED_ERROR, 'error')
          }
        }
        return Swal.fire(HEADER_ERROR, UNAUTHORIZED_ERROR, 'error')
      case 403:
        return Swal.fire(HEADER_ERROR, FORBIDDEN_ERROR, 'error')
      case 404:
        return Swal.fire(HEADER_ERROR, NOT_FOUND_ERROR, 'error')
      case 408:
        return Swal.fire(HEADER_ERROR, TIMEOUT_ERROR, 'error')
      case 409:
        return Swal.fire(HEADER_ERROR, EMAIL_ALREADY_EXISTS, 'error')
      case 410:
        return Swal.fire(HEADER_ERROR, EXPIRED_ERROR, 'error')
      default:
        return Swal.fire(HEADER_ERROR, SERVER_ERROR, 'error')
    }
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error(error)
    Swal.fire(HEADER_ERROR, SERVER_ERROR, 'error')
  }
};
