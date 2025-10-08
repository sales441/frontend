// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://backhand-production-bc90.up.railway.app/api",
});

export default API;
