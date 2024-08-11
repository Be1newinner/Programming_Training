import {
  DECREASE_COUNTER,
  INCREASE_COUNTER,
  INCREASE_COUNTER_BY_X,
  RESET_COUNTER,
} from "../constants/countConstant";

export const increaseCounter = () => {
  return {
    type: INCREASE_COUNTER,
  };
};
export const decreaseCounter = () => {
  return {
    type: DECREASE_COUNTER,
  };
};
export const increaseCounterByX = (payload) => {
  return {
    type: INCREASE_COUNTER_BY_X,
    payload,
  };
};
export const resetCounter = (payload) => {
  return {
    type: RESET_COUNTER,
    payload,
  };
};
