import axios from "axios";
import store from "./context/store";
// axios.defaults.baseURL = "http://157.230.190.229:80/api/";
const isProd = process.env.NODE_ENV === "production";
import {  toast } from "react-toastify";

const notify = (msg) =>
  toast(msg, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
axios.defaults.baseURL = isProd
  ? "https://klip.acreafrica.com/api/"
  : "http://localhost:7005/api/";

axios.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.user?.user?.token;
  if (token) config.headers.Authorization = `Bearer ${state.user?.user?.token}`;
  return config;
});

axios.interceptors.response.use(
  (response) => {
    // notify({ message: "request was successful", width: 200, shading: false }, "success", 50);

    if (response?.status === "201") notify("Request was successful");
    return response;
  },
  (error) => {
    if (error.response?.status) {
      const { data, status } = error.response;
      switch (status) {
        case 400:
          if (data?.errors) {
            const modelStateErrors = [];
            for (let key in data.errors) {
              if (data.errors[key]) {
                modelStateErrors.push(data.errors[key]);
              }
            }
            notify(modelStateErrors.flat().join("\n"));
          } else {
            notify(data);
          }
          break;
        case 201:
          notify("request was successful");
          break;
        case 403:
        case 401:
          notify("You are not authorised to access this page");
          break;
        case 404:
          notify(
            "The resource you are accessing is not available at the moment"
          );
          break;
        // case 500:
        // case 501:
        // case 503:
        //   notify("Server failed");
        //   break;
        default:
          notify("Failed to load resources");
      }
    }
  }
);
const responseBody = (response) => response?.data;
const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body = {}) => axios.post(url, body).then(responseBody),
  put: (url, body = {}) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),
};

export default requests;
