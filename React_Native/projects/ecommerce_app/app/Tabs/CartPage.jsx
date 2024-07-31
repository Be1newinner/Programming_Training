import React, { useContext } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { CartContext } from "../../service/CartService/CartContext";

const CartPage = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      <Button title="Clear Cart" onPress={clearCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cartItem: {
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default CartPage;
