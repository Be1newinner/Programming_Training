import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";

export default function Layout() {
  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    <Drawer
      screenOptions={
        {
          // header:()=><Text></Text>
          // title:"asd"
          // drawerLabel: "Label",
          // drawerLabel: (e) => <Text>{"Something"}</Text>,
          // drawerActiveTintColor: "red",
          // drawerActiveBackgroundColor: "blue",
          // drawerInactiveTintColor
          // drawerInactiveBackgroundColor
          // drawerItemStyle: {
          // backgroundColor: "pink",
          // elevation: 5,
          // height: 50,
          // },
          // drawerLabelStyle: {
          //   color: "red",
          //   backgroundColor: "red",
          // },
          // drawerContentContainerStyle: {
          //   gap: 50,
          //   backgroundColor: "red",
          //   width: 200,
          // },
          // drawerContentStyle: {
          // backgroundColor:"blue"
          // },
          // drawerStyle: {
          //   backgroundColor: "pink",
          //   width: 200,
          // },
          // drawerPosition: "right",
          // drawerType: "back",
          // drawerHideStatusBarOnOpen: true,
          // overlayColor:"red"
          // swipeEnabled: false,
        }
      }
    />
    // </GestureHandlerRootView>
  );
}

// Install first this
// npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
