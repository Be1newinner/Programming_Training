import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function AboutUs() {
  return (
    <View
      style={{
        backgroundColor: "yellow",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        I am About Screen
      </Text>

      <Text style={{ margin: 10 }}>Normal Navigation</Text>
      <Link href={"contact"} style={{ color: "blue" }}>
        Contact Us
      </Link>
      <Link href={"/"} style={{ color: "blue" }}>
        Home Screen
      </Link>
      <Text style={{ margin: 10 }}>Replace Navigation</Text>
      <Link href={"contact"} replace style={{ color: "blue" }}>
        Contact Us
      </Link>
      <Link href={"/"} replace style={{ color: "blue" }}>
        Home Screen
      </Link>
    </View>
  );
}
