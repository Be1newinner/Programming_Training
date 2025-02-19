"use client";
import React, { memo, useEffect, useState } from "react";

function Heavy() {
  const [count, setCount] = useState(true);

  return count ? <div>Hello</div> : null;
}

export default memo(Heavy);
