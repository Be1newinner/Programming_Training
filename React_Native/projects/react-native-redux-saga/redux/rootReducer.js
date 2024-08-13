import { combineReducers } from "redux";
import counterAReducer from "./reducers/counterAReducer";
import counterBReducer from "./reducers/counterBReducer";

const rootReducer = combineReducers({
  counterA: counterAReducer,
  counterB: counterBReducer,
});

export default rootReducer;
