import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

const products = [
  { id: "1", name: "Product 1" },
  { id: "2", name: "Product 2" },
];

const ProductListPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text>{item.name}</Text>
            <Button
              title="View Details"
              onPress={() =>
                navigation.navigate("ProductDetails", { productId: item.id })
              }
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  product: {
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default ProductListPage;
