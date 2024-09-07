import { combineReducers } from "redux";
import counterAReducer from "./reducers/counterAReducer";
import counterBReducer from "./reducers/counterBReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
  counterA: counterAReducer,
  counterB: counterBReducer,
  product: productReducer
});

// [
//   {
//     type: "INCREMENT_A",
//     action: "dasfasdnajsdguasd",
//   },
//   {
//     type: "INCREMENT_B",
//     action: "dasfasdnajsdguasd",
//   },
//   {
//     type: "INCREMENT_A",
//     action: "dasfasdnajsdguasd",
//   },
//   {
//     type: "DECREMENT_B",
//     action: "dasfasdnajsdguasd",
//   },
//   {
//     type: "DECREMENT_B",
//     action: "dasfasdnajsdguasd",
//   },
//   {
//     type: "DECREMENT_B",
//     action: "dasfasdnajsdguasd",
//   },
// ];

export default rootReducer;
