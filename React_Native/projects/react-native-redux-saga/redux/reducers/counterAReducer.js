const initialState = { value: 0, loading: false, error: null };

const counterAReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_A":
      return { ...state, value: state.value + 1 };
    case "DECREMENT_A":
      return { ...state, value: state.value - 1 };
    case "FETCH_COUNTER_A_REQUEST":
      return { ...state, loading: true };
    case "FETCH_COUNTER_A_SUCCESS":
      return { ...state, loading: false, value: action.payload };
    case "FETCH_COUNTER_A_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default counterAReducer;
