import React, { useRef } from "react";
import { View, Animated, PanResponder, StyleSheet } from "react-native";

const SwipeExample = () => {
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (event, gestureState) => {
        // swipe direction Detect krne k liye
        console.log(gestureState);
        if (gestureState.dx > 50) {
          // Right swipe krne k liye
          Animated.spring(pan, {
            toValue: { x: 100, y: 0 },
            useNativeDriver: true,
          }).start();
        } else if (gestureState.dx < -50) {
          // Left swipe krne k liye
          Animated.spring(pan, {
            toValue: { x: -100, y: 0 },
            useNativeDriver: true,
          }).start();
        } else {
          // No swipe k case me, return to original position
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.box,
          { transform: [{ translateX: pan.x }, { translateY: pan.y }] },
        ]}
      />
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

export default SwipeExample;
