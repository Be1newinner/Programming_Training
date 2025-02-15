"use client";
import React, { useRef } from "react";

export default function UseRef() {
  const counter = useRef<HTMLInputElement>(null);
  //   const [inputValue, updateInputValue] = useState("");
  console.log("RE RUNNING");
  return (
    <div>
      {/* <h2>Counter Value {counter.current}</h2> */}
      Ref
      <input placeholder="Name" ref={counter} />
      {/* <input
        placeholder="Name"
        value={inputValue}
        onChange={(e) => updateInputValue(e.currentTarget.value)}
      /> */}
      <button
        onClick={() => {
          if (counter.current) {
            console.log({
              val: counter.current.value,
            });
          }
        }}
      >
        Fetch
      </button>
    </div>
  );
}
