import React, { useRef, useState } from "react";
import { Animated, View, Button, StyleSheet } from "react-native";

const SpringExample = () => {
  // const [position, setPosition] = useState(0);
  const moveAnim = useRef(new Animated.Value(0)).current;

  const move = () => {
    // let newPosition;

    // if (position < 300) {
    //   newPosition = position + 300;
    // } else {
    //   newPosition = position - 300;
    // }
    // setPosition(newPosition);

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
