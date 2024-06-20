import { Drawer } from "expo-router/drawer";
import { CartContextProvider } from "../service/CartService/CartContext";

export default function Layout() {
  return (
    <CartContextProvider>
      <Drawer screenOptions={{}} />
    </CartContextProvider>
  );
}
