"use client";

import { useCallback } from "react";

// import Heavy from "./Heavy";
export default function MemoUsage() {
  function expensive() {
    let result = 0;
    for (let i = 0; i < 2000000000; i++) {
      result += i;
    }
    return result;
  }

  const memoized = useCallback(() => expensive(), []);

  return (
    <div>
      <button onClick={() => console.log(memoized())}>expensive</button>

      {/* {Array.from({ length: 100 }).map((item, index) => {
        return <Heavy key={index} />;
      })} */}
    </div>
  );
}
