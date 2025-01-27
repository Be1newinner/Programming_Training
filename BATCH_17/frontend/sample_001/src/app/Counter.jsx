import { useState } from "react";

function CounterPage() {
  const [count, setCount] = useState(0);

  //   let count = 0;

  function increaseNumber() {
    // count++;
    setCount(count + 1);
    console.log(count);
  }

  function decreaseNumber() {
    // count--;
    setCount(count - 1);
    console.log(count);
  }

  function resetNumber() {
    // count = 0;
    setCount(0);
    console.log(count);
  }

  return (
    <div>
      <p>Number: {count}</p>
      <button onClick={increaseNumber}>increase</button>
      <button onClick={resetNumber}>reset</button>
      <button onClick={decreaseNumber}>decrease</button>
    </div>
  );
}

export default CounterPage;
