import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { CartContext } from "@/service/CartService/CartContext";

const ProductDetailsPage = ({ route }) => {
  const { addToCart } = useContext(CartContext);
  const { productId } = route.params;

  const handleAddToCart = () => {
    addToCart({ id: productId, name: `Product ${productId}` });
  };

  return (
    <View style={styles.container}>
      <Text>Product Details - {productId}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductDetailsPage;
