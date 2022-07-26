import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./rootReducers";

export default configureStore({
  reducer: rootReducers,
});
