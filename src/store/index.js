import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-Slice";
import authReducer from "./auth-Slice";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});



export default store;
