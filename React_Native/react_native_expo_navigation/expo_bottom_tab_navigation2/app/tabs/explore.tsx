import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ExploreScreen() {
  return (
    <View>
      <Text>Explore Screen</Text>
      <Link href="/tabs">Navigate to Home</Link>
    </View>
  );
}
