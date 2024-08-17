import { Drawer } from "expo-router/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Drawer>
        <Drawer.Screen name="C1Timing" />
      </Drawer>
    </SafeAreaProvider>
  );
}
