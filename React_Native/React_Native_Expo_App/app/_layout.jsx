import { Drawer } from "expo-router/drawer";
import { CartContextProvider } from "../service/CartService/CartContext";
import { Provider } from "react-redux";
import store from "../service/store/store";

export default function Layout() {
  return (
    <Provider store={store}>
      <CartContextProvider>
        <Drawer screenOptions={{}} />
      </CartContextProvider>
    </Provider>
  );
}
