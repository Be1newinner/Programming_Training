import { Slot } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View
      style={{
        paddingTop: 25,
      }}
    >
      <Slot />
    </View>
  );
}
