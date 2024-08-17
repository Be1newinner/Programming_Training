import React, { useRef } from "react";
import { Animated, View, Button, StyleSheet } from "react-native";

const RotateScaleExample = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const rotateAndScale = () => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const scale = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, { transform: [{ rotate }, { scale }] }]}
      />
      <Button title="Rotate and Scale" onPress={rotateAndScale} />
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

export default RotateScaleExample;
