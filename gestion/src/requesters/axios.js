import axios from 'axios';
import { baseURL, tokenName } from '../constants/index';

export default axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(tokenName)}`,
  },

});