import React, { useRef } from "react";
import { Animated, View, Button, StyleSheet } from "react-native";

const MoveExample = () => {
  const moveAnimX = useRef(new Animated.Value(0)).current;
  const moveAnimY = useRef(new Animated.Value(0)).current;

  const moveX = () => {
    Animated.timing(moveAnimX, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  const moveY = () => {
    Animated.timing(moveAnimY, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const reset = () => {
    moveAnimX.setValue(0);
    moveAnimY.setValue(0);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.movingBox,
          { transform: [{ translateX: moveAnimX }, { translateY: moveAnimY }] },
        ]}
      />
      <Button title="MoveX" onPress={moveX} />
      <Button title="MoveY" onPress={moveY} />
      <Button title="reset" onPress={reset} />
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

export default MoveExample;
