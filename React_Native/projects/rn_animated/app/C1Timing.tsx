import React, { useEffect, useRef } from "react";
import { Animated, View, Button, StyleSheet } from "react-native";

const TimingExample = () => {
  const fadeAnim = useRef(new Animated.Value(110)).current;

  const anim = Animated.timing(fadeAnim, {
    toValue: 250,
    duration: 5000,
    useNativeDriver: false,
  });

  // useEffect(() => {
  //   anim.start();
  // }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{ opacity: 1, width: fadeAnim, backgroundColor: "blue" }}
      >
        <View style={styles.fadingBox} />
      </Animated.View>
      <Button title="Fade In" onPress={() => anim.start()} />
      <Button title="Fade In" onPress={() => anim.reset()} />
      <Button title="Fade In" onPress={() => anim.stop()} />
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
