import { Stack } from "expo-router";

export function RootLayout() {
  return <Stack />;
}

export default function RootLayout() {
  return (
    <Stack
      screenOptions={
        {
          // headerStyle: {
          //   backgroundColor: "red",
          // },
          // headerTintColor: "blue",
          // headerRight: (props) => {
          //   console.log(props);
          //   return (
          //     <View>
          //       <Text>Show Menu</Text>
          //     </View>
          //   );
          // },
          // title: "soe",
          // headerTitle: (e) => (
          //   <Text>
          //     {e.children.includes("/") ? e.children.split("/")[0] : e.children}
          //   </Text>
          // ),
          // headerSearchBarOptions: {
          //   onChangeText: (e) => console.log(e.nativeEvent.text),
          //   onSearchButtonPress: (e) => console.log("Pressed"),
          // },
          // contentInsetAdjustmentBehavior: "automatic",
          // headerTransparent: false,
          // header: (e) => {
          //   return (
          //     <View>
          //       <Text>Header</Text>
          //     </View>
          //   );
          // },
          // animation: "slide_from_bottom",
          // orientation: "all",
        }
      }
    >
      <Stack.Screen
        name="contact/index"
        options={{
          title: "Contact",
        }}
        getId={({ params }) => String(Date.now())}
      />
    </Stack>
  );
}

import { useState } from "react";
import { Text, View } from "react-native";

//Main Stack Style Options
// using screenOptions

// optional to pass screen based custom styling
