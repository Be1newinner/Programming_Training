import React, { useContext, useEffect } from "react";
import { CartContextConsumer } from "../service/CartService/CartContext";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function C19_CartContextP2() {
  const { cartData } = useContext(CartContextConsumer);

  useEffect(() => {
    console.log("THE DATA IN CART IS => ", cartData);
  }, [cartData]);

  return (
    <View>
      <Text>CART DATA is {cartData}</Text>
      <Link href={"C19_CartContextP1"}>C19</Link>
    </View>
  );
}
