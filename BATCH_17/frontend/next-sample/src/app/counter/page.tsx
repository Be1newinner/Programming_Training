"use client";
import React, { useState } from "react";

export default function Counter() {
  const [count] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
