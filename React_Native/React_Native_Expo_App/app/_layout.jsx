import { Drawer } from "expo-router/drawer";
import { CartContextProvider } from "../service/CartService/CartContext";
import { Provider } from "react-redux";
import store from "../service/Store/store";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <CartContextProvider>
          <Drawer screenOptions={{}} />
        </CartContextProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
