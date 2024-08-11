import { combineReducers } from "@reduxjs/toolkit";
import { countReducer } from "./reducers/countReducer";

export const rootReducer = combineReducers({
  countReducer,
  
});
