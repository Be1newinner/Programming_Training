import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ContactUs() {
  return (
    <View
      style={{
        backgroundColor: "pink",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        I am Contact Screen
      </Text>

      <Text style={{ margin: 10 }}>Normal Navigation</Text>
      <Link href={"/"} style={{ color: "blue" }}>
        Home Screen
      </Link>
      <Link href={"about"} style={{ color: "blue" }}>
        About Us
      </Link>
      <Text style={{ margin: 10 }}>Replace Navigation</Text>
      <Link href={"/"} replace style={{ color: "blue" }}>
        Home Screen
      </Link>
      <Link href={"about"} replace style={{ color: "blue" }}>
        About Us
      </Link>
    </View>
  );
}
