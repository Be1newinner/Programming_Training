import React, { useRef } from "react";
import { Animated, View, Button, StyleSheet } from "react-native";

const TimingExample = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.fadingContainer, { opacity: fadeAnim }]}>
        <View style={styles.fadingBox} />
      </Animated.View>
      <Button title="Fade In" onPress={fadeIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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

export default TimingExample;
