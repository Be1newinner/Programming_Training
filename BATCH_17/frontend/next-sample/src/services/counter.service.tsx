// function Constants
export const PRODUCT_ACTIONS = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  RESET: "RESET",
};

// Data Types
export type counterRootState = {
  value: number;
};

// Reducer
export const counterReducer = (
  state: counterRootState,
  action: {
    type: string;
    payload?: number;
  }
) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.INCREASE: {
      return { ...state, value: state.value + 1 };
    }

    case PRODUCT_ACTIONS.DECREASE: {
      if (state.value > 0) {
        return { ...state, value: state.value - 1 };
      } else {
        alert("Value is not greater than 0");
        return state;
      }
    }

    case PRODUCT_ACTIONS.RESET: {
      return { ...state, value: 0 };
    }

    default:
      return state;
  }
};

//  Actions
export const increaseAction = {
  type: PRODUCT_ACTIONS.INCREASE,
};

export const decreaseAction = {
  type: PRODUCT_ACTIONS.DECREASE,
};

export const resetAction = {
  type: PRODUCT_ACTIONS.RESET,
};

// Selectors
export const valueSelector = (counter: counterRootState) => counter.value;
