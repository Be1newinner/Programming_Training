import React, { useState, useEffect, useCallback, useMemo } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const DataDisplay = React.memo(({ fetchDataCallback }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchDataCallback().then(setProduct);
  }, [fetchDataCallback]);

  console.log("DataDisplay rendered");

  return (
    <View>
      <Image source={{ uri: product.imageURL }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.text}>MRP: ${product.mrp}</Text>
      <Text style={styles.text}>Price: ${product.price}</Text>
      <Text style={styles.text}>SKU: {product.sku}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [PId, setPId] = useState(1);

  const fetchDataCallback = useCallback(async () => {
    const response = await fetch(
      `https://fake-api1.vercel.app/api/products/sku00${PId}`
    );
    console.log("API IS GETTING CALLED!");
    const data = await response.json();
    return data;
  }, [PId]);

  // const fetchDataCallback = useMemo(
  //   () => async () => {
  //     const response = await fetch(
  //       `https://fake-api1.vercel.app/api/products/sku00${PId}`
  //     );
  //     console.log("API IS GETTING CALLED!");
  //     const data = await response.json();
  //     return data;
  //   },
  //   [PId]
  // );

  return (
    <View>
      <Text>Counter : {count}</Text>
      <Text>PID : {PId}</Text>
      <Button title="Inc Counter" onPress={() => setCount(count + 1)} />
      <Button title="Inc ProductID" onPress={() => setPId(PId + 1)} />
      <DataDisplay fetchDataCallback={fetchDataCallback} />
    </View>
  );
};

export default ParentComponent;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
});
