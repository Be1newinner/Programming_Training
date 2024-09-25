import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet } from "react-native";

const DecayExample = () => {
  const moveAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.decay(moveAnim, {
        velocity: 100 / 100, // lesser the denominator farther the distance
        deceleration: 0.9985, // greater value makes smoother stop.
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.movingBox, { transform: [{ translateY: moveAnim }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  movingBox: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});

export default DecayExample;
