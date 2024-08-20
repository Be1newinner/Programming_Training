export const incrementA = () => ({ type: "INCREMENT_A" });
export const decrementA = () => ({ type: "DECREMENT_A" });

export const fetchCounterARequest = () => {
  return { type: "FETCH_COUNTER_A_REQUEST" };
};

export const fetchCounterASuccess = (value) => ({
  type: "FETCH_COUNTER_A_SUCCESS",
  payload: value,
});

export const fetchCounterAFailure = (error) => ({
  type: "FETCH_COUNTER_A_FAILURE",
  payload: error,
});
