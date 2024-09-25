import React, { useEffect, useRef } from "react";
import { Animated, View, Button, StyleSheet } from "react-native";

const TimingExample = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const anim = Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 5000,
    useNativeDriver: true,
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim, backgroundColor: "blue" }}>
        <View style={styles.fadingBox} />
      </Animated.View>
      <Button title="start" onPress={() => anim.start()} />
      <Button title="reset" onPress={() => anim.reset()} />
      <Button title="stop" onPress={() => anim.stop()} />
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
