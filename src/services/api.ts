import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Ilannildo/plantmanager',
});

export default api;