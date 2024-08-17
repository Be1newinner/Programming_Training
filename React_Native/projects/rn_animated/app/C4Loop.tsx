import React, { useRef, useEffect } from "react";
import { Animated, View, StyleSheet } from "react-native";

const LoopExample = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <Animated.View style={[styles.fadingContainer, { opacity: fadeAnim }]}>
      <View style={styles.fadingBox} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  fadingContainer: {
    width: 100,
    height: 100,
    backgroundColor: "powderblue",
  },
  fadingBox: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});

export default LoopExample;
