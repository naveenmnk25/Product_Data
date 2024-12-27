import axios from "axios";

export const baseapi = axios.create({
  baseURL: "https://localhost:44372/api",
});
export const BASEURL = 'https://raw.githubusercontent.com/naveenmnk25/Product_Data/main/';
// Add a request interceptor to attach the token
baseapi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);
