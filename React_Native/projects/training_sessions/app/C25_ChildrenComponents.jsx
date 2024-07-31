import { View, Text } from "react-native";
import React from "react";

export default function C25_ChildrenComponents() {
  return (
    <View>
      <Text>C25_ChildrenComponents</Text>
      <ChildrenColor>
        <Text>dasd</Text>
        <Text>dasd</Text>
        <Text>dasd</Text>
        <Text>dasd</Text>
        <Text>dasd</Text>
      </ChildrenColor>
      <Color color="red" />
    </View>
  );
}

export function Color({ color = "black" }) {
  return (
    <View>
      <Text
        style={{
          color: color,
        }}
      >
        dasdsad
      </Text>
    </View>
  );
}

export function ChildrenColor({ children }) {
  return (
    <View
      style={{
        backgroundColor: "red",
        padding: 10,
      }}
    >
      {children}
    </View>
  );
}
