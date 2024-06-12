import { Link, Stack } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { Text, View } from "react-native";

export default function AboutUs() {
  const [UserName, setUserName] = useState("Ajay");

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     // headerShown: false,
  //     title: "SomeTo",
  //   });
  // }, []);

  return (
    <View
      style={{
        backgroundColor: "yellow",
        height: "100%",
      }}
    >
      <Stack.Screen
        options={{
          title: "hello, " + UserName,
        }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        I am About Screen
      </Text>

      <Link href={"contact"} replace style={{ color: "blue" }}>
        Contact Us
      </Link>
      <Link href={"/"} style={{ color: "blue" }}>
        Home Screen
      </Link>
    </View>
  );
}
