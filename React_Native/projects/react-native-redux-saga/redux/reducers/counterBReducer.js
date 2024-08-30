import { INCREMENT_B } from "../constants/CounterB";

const initialState = { value: 0, loading: false, error: null };
const counterBReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_B:
      return { ...state, value: state.value + action.payload };
    case "DECREMENT_B":
      return { ...state, value: state.value - 1 };
    case "FETCH_COUNTER_B_REQUEST":
      return { ...state, loading: true };
    case "FETCH_COUNTER_B_SUCCESS":
      return { ...state, loading: false, value: action.payload };
    case "FETCH_COUNTER_B_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      console.log("Invalid Recuer Action Call");
      return state;
  }
};

export default counterBReducer;
