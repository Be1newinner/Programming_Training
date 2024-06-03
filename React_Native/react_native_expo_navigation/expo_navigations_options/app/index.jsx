import { Link } from "expo-router";
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

      <Text style={{ margin: 10 }}>Normal Navigation</Text>
      <Link href={"contact"} style={{ color: "blue" }}>
        Contact Us
      </Link>
      <Link href={"about"} style={{ color: "blue" }}>
        About Us
      </Link>
      <Text style={{ margin: 10 }}>Replace Navigation</Text>
      <Link href={"contact"} replace style={{ color: "blue" }}>
        Contact Us
      </Link>
      <Link href={"about"} replace style={{ color: "blue" }}>
        About Us
      </Link>
    </View>
  );
}
