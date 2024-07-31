import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="ProductListPage"
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="CartPage"
        options={{
          tabBarLabel: "Cart",
        }}
      />
    </Tabs>
  );
}
