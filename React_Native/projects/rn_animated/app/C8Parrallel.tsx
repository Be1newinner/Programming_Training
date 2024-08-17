import React, { useRef } from "react";
import { Animated, View, Button, StyleSheet } from "react-native";

const ParallelExample = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const moveAnim = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(moveAnim, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          { opacity: fadeAnim, transform: [{ translateY: moveAnim }] },
        ]}
      />
      <Button title="Animate" onPress={animate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});

export default ParallelExample;
