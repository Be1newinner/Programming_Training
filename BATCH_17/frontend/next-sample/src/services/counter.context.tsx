// import React from "react";
import React, { createContext, useState } from "react";

export const CounterContext = createContext({
  counterValue: 0,
  increaseCounter: () => {},
});

export const CounterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [counterValue, setCounterValue] = useState(0);

  function increaseCounter() {
    setCounterValue((e) => e + 1);
  }

  return (
    <CounterContext.Provider
      value={{
        counterValue,
        increaseCounter,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
