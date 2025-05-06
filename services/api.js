import axios from 'axios';

const api = axios.create({
  baseURL: 'https://taprichai-api.onrender.com/api/v1/',
});

export default {
  login: (email, password) => api.post('/auth/login', { email, password }),
  getNearbyTapris: (lat, lng) => api.get(`/tapri/nearby?lat=${lat}&lng=${lng}`),
  placeOrder: (orderData) => api.post('/order/place', orderData),
  // Add more API calls
};