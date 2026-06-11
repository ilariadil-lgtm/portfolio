import axios from 'axios';

// Aggiungi la parola "export" proprio qui davanti a const
export const api = axios.create({
  baseURL: 'https://ilariadiliberto.com/api/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

api.defaults.xsrfCookieName = 'csrftoken';
api.defaults.xsrfHeaderName = 'X-CSRFToken';
