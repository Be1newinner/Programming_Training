import { CartProvider } from "../service/CartService/CartContext";
import { UserProvider } from "../service/UserService/UserContext";

export default function ContextProvider({ children }) {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
}
