import { Stack } from "expo-router";
import { CartContextProvider } from "../service/CartService/CartContext";

export default function Layout() {
  return (
    <CartContextProvider>
      <Stack />
    </CartContextProvider>
  );
}
