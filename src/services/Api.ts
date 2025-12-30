// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: response interceptor
api.interceptors.response.use(
  response => response,
  error => {
    // handle global errors here
    console.error('API error:', error);
    return Promise.reject(error);
  }
);

export default api;