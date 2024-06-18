import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Dimensions, Text, TextInput, View } from "react-native";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        // header: () => (
        //   <View
        //     style={{
        //       marginTop: 20,
        //       height: 50,
        //       backgroundColor: "red",
        //     }}
        //   >
        //     <Text>Header</Text>
        //   </View>
        // ),
        // title: "Nothibg",
        // drawerLabel: "Label Something",
        // drawerLabel: (e) => <Text>{e + " Page"}</Text>,
        // drawerActiveTintColor: "green",
        // drawerActiveBackgroundColor: "skyblue",
        // drawerInactiveTintColor
        // drawerInactiveBackgroundColor: "green",
        // drawerItemStyle: {
        //   backgroundColor: "pink",
        //   elevation: 5,
        //   height: 100,
        // },
        // drawerLabelStyle: {
        //   color: "blue",
        //   backgroundColor: "red",
        // },
        drawerContentContainerStyle: {
          // gap: 50,
          backgroundColor: "red",
          // width: 300,
        },
        // drawerContentStyle: {
        // backgroundColor: "blue",
        // width: Dimensions.get("screen").width,
        // },
        // drawerStyle: {
        //   backgroundColor: "pink",
        //   width: Dimensions.get("screen").width,
        // },
        // drawerPosition: "right",
        // drawerType: "front",
        // drawerHideStatusBarOnOpen: true,
        // overlayColor:"red"
        swipeEnabled: true,
        // headerShown: false,
      }}
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <View
            style={{
              padding: 10,
            }}
          >
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
              placeholder="Search Items"
            />
          </View>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      )}
    />
  );
}

// Install first this
// npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
