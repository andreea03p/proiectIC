import axios from 'axios';

const API_URL = 'http://localhost:5050/api'; 
// or wherever your backend is hosted

export const registerUser = (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = (credentials) => {
  return axios.post(`${API_URL}/auth/login`, credentials);
};

export const resetPassword = (data) => {
  return axios.post(`${API_URL}/auth/reset`, data);
};
