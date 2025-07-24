// src/api/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // Base URL for your backend API endpoints
});

// Automatically attach token to all requests made with this 'api' instance
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken"); // Get the token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Add it to the Authorization header
  }
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

// NEW: Re-export isAxiosError from the original axios package
export const isAxiosError = axios.isAxiosError;

export default api;