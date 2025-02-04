"use client";
import { useEffect, useState } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    alert("Hello => ");
  }, []);

  //   useEffect(() => {
  //     alert("Hello => " + count);
  //   }, [count]);

  //   useEffect(() => {
  //     alert("Hello => " + count);
  //   }, [count, count1]);

  //   alert("Hello");

  return (
    <div>
      <h1>{count}</h1>
      <h1>{count1}</h1>
      <button onClick={() => setCount((e) => e + 1)}>increase</button>
      <button onClick={() => setCount1((e) => e + 1)}>increase1 </button>
      <h1>Use Effect Demo</h1>
    </div>
  );
}
