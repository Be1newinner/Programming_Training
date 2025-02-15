"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function Query() {
  const queryParams = useSearchParams();

  useEffect(() => {
    // Get only values
    // queryParams.forEach((item) => {
    //   console.log(item);
    // });
    //
    // Get params with key, value pair
    //     const data = queryParams.entries();
    //     data.forEach((item) => {
    //       console.log(item);
    //     });
    //
    // queryParams.keys().forEach((item) => {
    //   console.log(item);
    // });
    queryParams.values().forEach((item) => {
      console.log(item);
    });
  }, [queryParams]);

  return <div>Query Params</div>;
}
