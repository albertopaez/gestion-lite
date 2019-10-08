
//##### Export errors messages

// STATUS
export const HEADER_ERROR = 'Oops...';
export const NOT_FOUND_ERROR = 'El recurso solicitado no se ha encontrado';
export const EXPIRED_SEASON_ERROR = 'El curso académico ya ha expirado. Solo puede consultar datos';
export const EXPIRED_SEASON_HEADER_ERROR = 'Curso expirado';
export const INACTIVE_CENTER_HEADER_ERROR = 'Centro inactivo';
export const INACTIVE_CENTER_ERROR = 'La fecha de expiración del centro ha expirado';
// export const UNAUTHORIZED_ERROR = 'Es necesario estar autenticado para realizar esta acción';
export const UNAUTHORIZED_ERROR = 'El usuario actual no tiene permisos para realizar esa acción';
export const TIMEOUT_ERROR = 'No ha sido posible conectar con el servidor, inténtelo de nuevo más tarde';
export const FORBIDDEN_ERROR = 'No tiene los permisos necesarios para realizar esta acción';
export const SERVER_ERROR = '¡Algo fue mal! Inténtelo de nuevo más tarde o póngase en contacto con nosotros';
export const EXPIRED_ERROR = 'Lo sentimos, este recurso ha expirado y ya no se encuentra disponible';
// FORMS
export const EMAIL_NOT_VALID = 'No ha introducido un email válido';
export const CIF_NOT_VALID = 'El CIF introducido no es válido';
export const CP_NOT_VALID = 'El CP no tiene un formato válido';
export const EMAIL_ALREADY_EXISTS = 'Ya existe un usuario con este email';
export const NO_AUTOCARE_SELECTED = "Debe seleccionar un taller"
export const ZIPCODE_MISSING = "El formulario no ha recibido el codigo postal"
export const EXIST_ERROR = "El recurso ya existe";
export const REQUIRED_FIELD = "El campo es requerido"
export const PAST_DATE = "La fecha no puede ser pasada"
export const FUTURE_DATE = "La fecha no puede ser futura"
export const INVALID_URL = "No ha introducido una url válida"
export const PASSWORDS_NOT_MATCH = "Las contraseñas no coinciden"
export const HIGHER_THAN_0 = "Debe ser un número mayor o igual que 0"
//##### Export success messages

export const HEADER_SUCCESS = '¡Buen trabajo!';
export const GENERIC_SUCCESS = 'La acción ha sido completada correctamente';

// Get error messages from error codes4

export function get_error_message(code) {
  switch (code) {
    case 'emailDuplicated':
      return EMAIL_ALREADY_EXISTS;
    default:
      return '';
  }
}

