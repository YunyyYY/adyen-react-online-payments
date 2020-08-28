import { configureStore } from "@reduxjs/toolkit";
import paymentReducer from "./paymentSlice";

// https://redux-starter-kit.js.org/api/configurestore/
// configureStore accepts a single configuration object parameter
export default configureStore({
  // single function, directly used as the root reducer for the store.
  reducer: {
    payment: paymentReducer
  }
});
