import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
      <Link href="/tabs/explore">Navigate to nested route</Link>
    </View>
  );
}
