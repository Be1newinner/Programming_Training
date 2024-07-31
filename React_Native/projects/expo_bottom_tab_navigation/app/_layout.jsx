import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Dimensions } from "react-native";

export default function _Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        // tabBarActiveBackgroundColor: "orange",
        title: "refsdf",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="add-circle" color={color} size={size} />
        ),
        tabBarStyle: {
          paddingBottom: 5,
          height: 55,
          width: Dimensions.get("screen").width - 20,
          position: "relative",
          // bottom: 50,
          // left: 20,
          // top: 50,
          borderRadius: 10,
        },
      }}
    />
  );
}

// screenOptions:
// tabBarActiveBackgroundColor: "red",
// tabBarInactiveBackgroundColor: "red",
// tabBarActiveTintColor: "red",
// tabBarInactiveTintColor:"blue",
// title: "some",
// tabBarLabel: ({ focused, color, position, children }) => {
//   return <Text>{children}</Text>;
// },
// tabBarShowLabel: false,
// tabBarLabelPosition: "below-icon", // beside-icon
// tabBarLabelStyle: {
//   color: "red", //Text style Properties
// },
// tabBarIcon: ({ focused, color, size }) => {},
// tabBarIconStyle: {},
//  tabBarBadge: 1,
// tabBarBadgeStyle: {
//   color: "white",
//   backgroundColor: "green",
// },
// tabBarHideOnKeyboard: false,
// tabBarStyle: {
//   paddingBottom: 5,
//   height: 55,
//   width: Dimensions.get("screen").width - 20,
//   position: "absolute",
//   bottom: 10,
//   left: 10,
//   borderRadius: 10,
//   elevation: 10,
// },
