import axios from 'axios';

const api = axios.create({
  baseURL: 'https://conectainternet.vigoweb.com.br/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Cache-Control': 'no-cache',
    'X-Content-Type-Options': 'nosniff',
  },
});

export default api;
