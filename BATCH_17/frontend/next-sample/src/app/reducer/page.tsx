"use client";

import {
  counterReducer,
  decreaseAction,
  increaseAction,
  resetAction,
  valueSelector,
} from "@/services/counter.service";
import { useReducer } from "react";

export default function Something() {
  const [counter, dispatch] = useReducer(counterReducer, {
    value: 0,
  });

  return (
    <div>
      <h1>useReducer Hook</h1>
      <p>Value: {valueSelector(counter)}</p>

      <button
        onClick={() => {
          dispatch(increaseAction);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch(decreaseAction);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          dispatch(resetAction);
        }}
      >
        Reset
      </button>
    </div>
  );
}
