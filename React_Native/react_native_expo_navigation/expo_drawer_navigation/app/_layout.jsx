import React from "react";
import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Drawer
      screenOptions={{
        // headerShown: false,
        // header: () => {
        //   return (
        //     <View
        //       style={{
        //         height: 100,
        //         backgroundColor: "red",
        //       }}
        //     >
        //       <Text>Header</Text>
        //     </View>
        //   );
        // },
        title: "Something",
        drawerLabel: "Page1",
        drawerActiveTintColor: "red",
        drawerInactiveTintColor: "blue",
        drawerActiveBackgroundColor: "orange",
        drawerInactiveBackgroundColor: "pink",
        drawerLabelStyle: {
          fontSize: 18,
          fontWeight: 900,
        },
        drawerItemStyle: {
          borderRadius: 200,
        },
        // swipeEnabled: false,
        drawerIcon: () => <Ionicons name="apps-outline" />,
      }}
    />
  );
}

// Install first this
// npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
