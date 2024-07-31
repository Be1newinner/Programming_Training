import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function TabOneScreen() {
  return (
    <View>
      <Text>Index</Text>
      <Link href={"/"}>GO to Login</Link>
      <Link href={"/(tabs)/explore"}>GO to explore</Link>
    </View>
  );
}
