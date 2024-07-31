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
            <Drawer.Screen name="C5_Array_Map" />
            <Drawer.Screen name="C6_Todo_addItem" />
            <Drawer.Screen name="C7_Array_Filter" />
            <Drawer.Screen name="C8_Import_Export" />
            <Drawer.Screen name="C9_Import_Export_Functions" />
            <Drawer.Screen name="C10_Expo_Icons" />
            <Drawer.Screen name="C11_Prototype_Ecommerce_ProductApp" />
            <Drawer.Screen name="C12_FlexStyle" />
            <Drawer.Screen name="C13_HorizontalScroll" />
            <Drawer.Screen name="C14_FlatList" />
            <Drawer.Screen name="C15_ViewStyling" />
            <Drawer.Screen name="C16_Switch" />
            <Drawer.Screen name="C17_SectionList" />
            <Drawer.Screen name="C18_CustomDropDown" />
            <Drawer.Screen name="C19_CartContextP1" />
            <Drawer.Screen name="C20_CartContextP2" />
            <Drawer.Screen name="C21_UseReducer" />
            <Drawer.Screen name="C22_Memo" />
            <Drawer.Screen name="C23_Redux" />
            <Drawer.Screen name="C24_Persistencey" />
            <Drawer.Screen name="C25_ChildrenComponents" />
            <Drawer.Screen name="C26_SecurePersistency" />
            <Drawer.Screen name="C27_MapView" />
            <Drawer.Screen name="C28_UseEffect" />
            <Drawer.Screen name="C29_ReactNativeElements" />
            <Drawer.Screen name="C30_ReactNativePicker" />
            <Drawer.Screen name="C31_DateTimePicker" />
            <Drawer.Screen name="C32_ViewPager" />
            <Drawer.Screen name="C33_ImageBackground" />
            <Drawer.Screen name="C34_LinearGradient" />
            <Drawer.Screen name="C35_CheckBox" />
            <Drawer.Screen name="C35_ParentChildProps" />
          </Drawer>
        </CartContextProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
