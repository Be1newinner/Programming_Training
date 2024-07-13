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
          <Drawer>
            <Drawer.Screen name="C1_UseState" />
            <Drawer.Screen name="C2_CounterApp" />
            <Drawer.Screen name="C3_Buttons" />
            <Drawer.Screen name="C4_Destructuing" />
          </Drawer>
        </CartContextProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
