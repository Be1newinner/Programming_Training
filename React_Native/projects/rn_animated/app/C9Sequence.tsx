import React, { useRef } from "react";
import { Animated, View, Button, StyleSheet } from "react-native";

const SequenceExample = () => {
  const animValue1 = useRef(new Animated.Value(0)).current;
  const animValue2 = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.sequence([
      Animated.timing(animValue1, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(animValue2, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, { transform: [{ translateY: animValue1 }] }]}
      />
      <Animated.View
        style={[styles.box, { transform: [{ translateX: animValue2 }] }]}
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
    margin: 10,
  },
});

export default SequenceExample;
