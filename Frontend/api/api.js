//feature: apj.js
import axios from "axios";

export const url = "http://localhost:5000/api";

export const setHeaders = () => {
  return {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };
};

const apiClient = axios.create({
  baseURL: url,
  timeout: 130000,
});

export const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (data) => {
  try {
    return await apiClient.post("/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("/register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};