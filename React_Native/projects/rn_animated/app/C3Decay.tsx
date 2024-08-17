import React, { useRef } from "react";
import { Animated, View, Button, StyleSheet } from "react-native";

const DecayExample = () => {
  const moveAnim = useRef(new Animated.Value(0)).current;

  const move = () => {
    Animated.decay(moveAnim, {
      velocity: 1,
      deceleration: 0.997,
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

export default DecayExample;
