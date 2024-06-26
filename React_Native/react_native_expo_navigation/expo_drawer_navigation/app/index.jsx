import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "skyblue",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        I am Index Screen
      </Text>

      <Drawer.Screen
        options={{
          title: "Home",
          headerShown: true,
          drawerLabel: "Home Page",
          drawerIcon: () => <Ionicons name="baseball" size={40} />,
        }}
      />

      <Link href={"contact"} style={{ color: "blue" }}>
        Contact Us
      </Link>
      <Link href={"about"} style={{ color: "blue" }}>
        About Us
      </Link>
    </View>
  );
}
