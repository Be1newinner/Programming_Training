import { Ionicons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [count, setUser] = useState(10);
  return (
    <View
      style={{
        backgroundColor: "skyblue",
      }}
    >
      <Tabs.Screen
        options={{
          title: "HomePage",
          tabBarIcon: ({ color }) => (
            <Ionicons name="analytics-outline" color={color} />
          ),
          tabBarBadge: count,
        }}
      />
      <Text>Home Screen</Text>
      <TextInput />
      <Link href="/tabs/explore">Navigate to nested route</Link>
      <ScrollView>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
      </ScrollView>
    </View>
  );
}
