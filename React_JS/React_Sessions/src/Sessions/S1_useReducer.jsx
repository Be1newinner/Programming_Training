import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "increase") {
    return {
      age: state.age + action.payload,
    };
  }
  if (action.type === "decrease") {
    return {
      age: state.age - 1,
    };
  }
  throw Error("Unknown action.");
}

export default function S1_useReducer() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "increase", payload: 5 });
        }}
      >
        Increase age
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrease" });
        }}
      >
        Decrease age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
