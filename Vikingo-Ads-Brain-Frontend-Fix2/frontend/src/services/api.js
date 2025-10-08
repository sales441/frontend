// frontend/src/services/api.js
import axios from "axios";

// Use variável de ambiente na Vercel (ou localhost no dev)
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
});

export default API;
