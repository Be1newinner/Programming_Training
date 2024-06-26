import React, { useContext } from "react";
import { CartContextConsumer } from "../service/CartService/CartContext";
import { Button, Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function C19_CartContextP1() {
  const { cartData, setCartData } = useContext(CartContextConsumer);

  // useEffect(() => {
  //   console.log("THE DATA IN CART IS => ", cartData);
  // }, [cartData]);

  function increaseCounter() {
    const data = fetch("");
    const repsonse = data.json();

    setCartData(repsonse.message);
  }

  return (
    <View>
      <Text>C19_CartContextP1 {cartData}</Text>
      <Link href={"C20_CartContextP2"}>C20</Link>
      <Pressable onPress={increaseCounter}>
        <Text>Increase Data</Text>
      </Pressable>
    </View>
  );
}
