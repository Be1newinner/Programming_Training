import React, { useRef, useEffect } from "react";
import { Animated, View, StyleSheet } from "react-native";

const StaggerExample = () => {
  const animValue1 = useRef(new Animated.Value(0)).current;
  const animValue2 = useRef(new Animated.Value(0)).current;

  // The Animated.stagger function is used to create a staggered animation sequence where multiple animations are executed with a delay between the start of each animation. It allows you to create a cascading effect where animations start one after another, rather than all at once or in strict sequence.

  useEffect(() => {
    Animated.loop(
      Animated.stagger(1000, [
        Animated.timing(animValue1, {
          toValue: 300,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animValue2, {
          toValue: 300,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, { transform: [{ translateY: animValue1 }] }]}
      />
      <Animated.View
        style={[styles.box, { transform: [{ translateY: animValue2 }] }]}
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
    margin: 10,
  },
});

export default StaggerExample;
