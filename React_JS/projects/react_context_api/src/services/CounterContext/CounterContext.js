import { createContext, useState } from "react";

export const CounterContextConsumer = createContext();

export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContextConsumer.Provider
      value={{
        counter,
        setCounter,
      }}
    >
      {children}
    </CounterContextConsumer.Provider>
  );
};
