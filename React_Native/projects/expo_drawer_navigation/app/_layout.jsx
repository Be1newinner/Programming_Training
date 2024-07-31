import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Dimensions, Text, TextInput, View } from "react-native";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        drawerType: "front",
        drawerStatusBarAnimation: "slide",
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
        // drawerContentContainerStyle: {
        //   gap: 50,
        //   backgroundColor: "red",
        //   width: 300,
        // },
        // drawerContentStyle: {
        // backgroundColor: "blue",
        // width: Dimensions.get("screen").width,
        // },
        drawerStyle: {
          backgroundColor: "rgba(0,0,0,0)",
          // width: Dimensions.get("screen").width,
        },
        sceneContainerStyle: {
          backgroundColor: "rgba(0,0,0,0)",
        },
        drawerContentStyle: {
          backgroundColor: "rgba(0,0,0,0)",
        },
        // drawerPosition: "right",
        // drawerType: "front",
        // drawerHideStatusBarOnOpen: true,
        overlayColor: "rgba(0,0,0,0)",
        swipeEnabled: true,
        // headerShown: false,
        drawerIcon: () => <Ionicons name="alarm" size={40} />,
      }}
      drawerContent={(props) => {
        // const data = props.state;

        // const modifiedData = data.filter((item)=)

        // console.log(Object.keys(data));
        // console.log(data.index); //My Active Route
        console.log(Object.keys(props.descriptors));

        return (
          <DrawerContentScrollView>
            {props.state.routes
              .filter((item) => {
                return !["about", "_sitemap"].includes(item.name);
              })
              .map((item) => {
                // console.log(item);
                return (
                  <DrawerItem
                    key={item.key}
                    label={item.name}
                    icon={() =>
                      props.descriptors[item.key].options.drawerIcon()
                    }
                  />
                );
              })}
            {/* <View
                    key={item.key}
                    style={{
                      height: 50,
                      backgroundColor: "red",
                    }}
                  >
                    <Text>{item.name}</Text>
                  </View> */}
            {/* <DrawerItem label={"Log Out"} onPress={() => alert("hi")} /> */}
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: true,
          drawerLabel: "Home Page",
          drawerIcon: () => <Ionicons name="baseball" size={40} />,
        }}
      />
    </Drawer>
  );
}

// Install first this
// npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated

// drawerContent={(props) => (
//   <DrawerContentScrollView {...props}>
//     <View
//       style={{
//         padding: 10,
//       }}
//     >
//       <TextInput
//         style={{
//           borderWidth: 1,
//           borderRadius: 5,
//           paddingHorizontal: 10,
//           paddingVertical: 5,
//         }}
//         placeholder="Search Items"
//       />
//     </View>
//     <DrawerItemList {...props} />
//   </DrawerContentScrollView>
// )}

const data = [
  {
    key: "index-l6PKelbwmgn9Z_FEzRjgO",
    name: "index",
    params: undefined,
    path: "",
  },
  { key: "about-D9cDkZHj9bf0TQ6nIHHKv", name: "about", params: undefined },
  {
    key: "_sitemap-Wy-QUIolzjqJk0WMjfQNU",
    name: "_sitemap",
    params: undefined,
  },
  {
    key: "contact/index-3eeaiqIdOUxy051jNIBD2",
    name: "contact/index",
    params: undefined,
  },
  {
    key: "+not-found-xvRDMzdRrc-3nGSrWMFd4",
    name: "+not-found",
    params: undefined,
  },
];
