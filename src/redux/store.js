import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,

});

export const store = configureStore({
  reducer: rootReducer, 
  middleware: customizedMiddleware,
});
