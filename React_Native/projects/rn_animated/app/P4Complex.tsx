import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet } from "react-native";

const BouncingBall = () => {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const bounce = Animated.sequence([
      Animated.timing(bounceAnim, {
        toValue: 300,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(bounceAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]);

    Animated.loop(bounce).start();
  }, []);

  return (
    <Animated.View
      style={[styles.ball, { transform: [{ translateY: bounceAnim }] }]}
    />
  );
};

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 50,
  },
});

export default BouncingBall;
