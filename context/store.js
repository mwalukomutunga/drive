import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user.slice";

const reducer = {
  user: userReducer
};

//MIDDLEWARE
const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    if (typeof window !== "undefined")
      localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (typeof window !== "undefined")
    if (localStorage.getItem("applicationState") !== null) {
      return JSON.parse(localStorage.getItem("applicationState")); // re-hydrate the store
    }
};

//STORE CONFIGURATION
const store = configureStore({
  reducer,
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

// const store = configureStore({
//   reducer,
// });

export default store;
