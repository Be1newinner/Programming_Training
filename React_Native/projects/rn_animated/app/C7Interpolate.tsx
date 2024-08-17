import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet } from "react-native";

const InterpolateExample = () => {
  const animValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, []);

  const backgroundColor = animValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["red", "pink", "blue"],
  });

  return <Animated.View style={[styles.box, { backgroundColor }]} />;
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
  },
});

export default InterpolateExample;
