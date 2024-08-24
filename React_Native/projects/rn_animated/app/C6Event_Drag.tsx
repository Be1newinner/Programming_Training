import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

const EventExample = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  // PanResponder is a powerful utility that allows us to handle and respond to touch gestures. It provides a way to track and manage touch events, including gestures like dragging, swiping, pinching, and more. This can be used to create custom gestures or to respond to user interactions in a highly customized way.

  // Type of Gestures
  // 1. Drag (Panning)
  // 2. Swipe
  // 3. Pinch (Zoom)
  // 4. Rotate
  // 5. Fling
  // 6. Tap
  // 7. Double Tap
  // 8. Long Press
  // 9. Scroll
  // 10. Multitouch Gestures
  // 11. Combination Gestures
  // 12. Custom Gestures

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        // Animated.spring(pan, {
        //   // duration: 1000,
        //   toValue: { x: 0, y: 0 },
        //   useNativeDriver: false,
        // }).start();

        // Update the offset to keep the item in the new position
        pan.flattenOffset();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box]}
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

export default EventExample;
