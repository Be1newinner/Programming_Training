import React, { useEffect, useRef } from "react";
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

  // useEffect(() => {
  //   fadeIn();
  // }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
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
  fadingBox: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});

export default TimingExample;
