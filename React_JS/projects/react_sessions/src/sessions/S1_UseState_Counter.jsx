import { useState } from "react";
import "../App.css";

function S1_UseState_Counter() {
  const [value, setValue] = useState(0);
  const [error, setError] = useState("");

  function increaseNumber() {
    if (value < 10) {
      setValue(value + 1);
      setError("");
    } else {
      setError("You can't go over 10");
    }
  }

  function decreaseNumber() {
    if (value > 0) {
      setValue(value - 1);
      setError("");
    } else {
      setError("You can't go under 0");
    }
  }

  function resetNumber() {
    setValue(0);
  }

  return (
    <div>
      <p>{error}</p>
      <h1 className="heading">Number {value}</h1>

      <button onClick={decreaseNumber}>decrease</button>
      <button onClick={resetNumber}>reset</button>
      <button onClick={increaseNumber}>increase</button>
    </div>
  );
}

export default S1_UseState_Counter;
