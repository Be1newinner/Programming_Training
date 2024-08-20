export const incrementB = () => ({ type: "INCREMENT_B" });

export const decrementB = () => ({ type: "DECREMENT_B" });

export const fetchCounterBRequest = () => ({ type: "FETCH_COUNTER_B_REQUEST" });

export const fetchCounterBSuccess = (value) => ({
  type: "FETCH_COUNTER_B_SUCCESS",
  payload: value,
});

export const fetchCounterBFailure = (error) => ({
  type: "FETCH_COUNTER_B_FAILURE",
  payload: error,
});
