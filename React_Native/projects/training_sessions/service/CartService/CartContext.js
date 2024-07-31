import { useState } from "react";
import { createContext } from "react";

export const CartContextConsumer = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState(0);

  return (
    <CartContextConsumer.Provider
      value={{
        cartData,
        setCartData,
      }}
    >
      {children}
    </CartContextConsumer.Provider>
  );
};
