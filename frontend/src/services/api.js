import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cc4c0690-d7b5-4b84-981a-468c45c5b449-00-pwlz3kc5shs6.sisko.replit.dev:5000/api',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
