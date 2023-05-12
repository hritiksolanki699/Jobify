import axios from "axios";

const url = "https://jobify-backend.vercel.app/api/v1";

const API = axios.create({
  baseURL: url,
});

export default API;
