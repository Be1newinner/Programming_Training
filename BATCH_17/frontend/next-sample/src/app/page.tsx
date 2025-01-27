"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCounter] = useState(0);

  return (
    <div>
      {count}
      <h1>hello</h1>
    </div>
  );
}
