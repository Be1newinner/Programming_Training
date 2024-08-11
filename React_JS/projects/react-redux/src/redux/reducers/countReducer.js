import {
  DECREASE_COUNTER,
  INCREASE_COUNTER,
  INCREASE_COUNTER_BY_X,
  RESET_COUNTER,
} from "../constants/countConstant";

const initialState = {
  counter: 0,
  // counterB: 0,
  // counterC: 0,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER: {
      console.log("INCREASE CALLED");
      return state;
    }
    case INCREASE_COUNTER_BY_X: {
      console.log("INCREASE CALLED by X");
      return state;
    }
    case DECREASE_COUNTER: {
      console.log("DECREASE CALLED");
      return state;
    }
    case RESET_COUNTER: {
      console.log("RESET CALLED");
      return state;
    }
    default: {
      console.log("INVALID REDUCER ACTION!");
      return state;
    }
  }
};
