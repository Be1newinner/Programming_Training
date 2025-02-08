"use client";
import { CounterContext } from "@/services/counter.context";
import React, { useContext } from "react";

export default function Counter() {
  const { increaseCounter, counterValue } = useContext(CounterContext);

  return (
    <div>
      <h1>{counterValue}</h1>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
}
