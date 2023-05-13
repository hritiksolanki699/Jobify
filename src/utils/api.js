import axios from "axios";
import { useAppContext } from "../context/appContext";

const url = "https://jobify-backend.vercel.app/api/v1";

const API = axios.create({
  baseURL: url,
});

API.interceptors.request.use(
  (req) => {
    if (localStorage.getItem("token")) {
      req.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    }

    return req;
  },
  (error) => {
    const { logoutUser } = useAppContext();
    if (error.response.status === 401) {
      logoutUser();
    }
    return Promise.reject(error);
  }
);

export default API;
