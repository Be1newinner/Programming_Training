import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  console.log("COUNT IS ", count);
  console.log("COUNT IS 1 ", count1);

  // useEffect(() => {
  //   console.log("VALUE OF COUNT IS ", count);
  // }, [count]);

  // useEffect(() => {
  //   console.log("VALUE OF COUNT 1 IS ", count1);
  // }, [count1]);

  return (
    <div>
      <p> {count}</p>
      <p> {count1}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>increase</button>
      <button onClick={() => setCount1((prev) => prev + 1)}>increase 1</button>
    </div>
  );
}

// Note 1. Jitni Baar UseState k andar Data Chnage hoiga to puri App refresh ho jaegi
