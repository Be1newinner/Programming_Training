import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function login() {
  return (
    <SafeAreaView>
      <Text>login</Text>
      <Link href={"(tabs)"}>Home</Link>
    </SafeAreaView>
  );
}
