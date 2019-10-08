// Application process env variables
let NODE_ENV = process.env.NODE_ENV;
let BASE_URL = process.env.REACT_APP_BASE_URL;
let baseUrl = '';
let websocketUrl = '';
let baseFront = '';

if (BASE_URL) {
  baseUrl = `${BASE_URL}`;
} else if (NODE_ENV === 'development') {
  baseUrl = `http://localhost:3000/api`
}

console.log(NODE_ENV);
console.log(baseUrl);

export const tokenName = 'id_token';
export const baseURL = baseUrl;
export const websocketURL = websocketUrl;
export const baseFRONT = baseFront;
export const isDevelopment = NODE_ENV === 'development'
export const DEFAULT_PAGE_SIZE = 10;
