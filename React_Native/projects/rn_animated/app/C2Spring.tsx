import React, { useRef } from "react";
import { Animated, View, Button, StyleSheet } from "react-native";

const SpringExample = () => {
  const moveAnim = useRef(new Animated.Value(0)).current;

  const move = () => {
    Animated.spring(moveAnim, {
      toValue: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.movingBox, { transform: [{ translateY: moveAnim }] }]}
      />
      <Button title="Move" onPress={move} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  movingBox: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});

export default SpringExample;
