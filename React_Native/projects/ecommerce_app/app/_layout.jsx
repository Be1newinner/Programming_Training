import { Stack } from "expo-router";
import ContextProvider from "@/utils/ContextProvider";

export default function _layout() {
  return (
    <ContextProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </ContextProvider>
  );
}
