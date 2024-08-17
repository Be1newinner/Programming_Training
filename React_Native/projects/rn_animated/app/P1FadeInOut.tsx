import React, { useRef } from "react";
import { Animated, View, Button, StyleSheet } from "react-native";

const FadeInOutExample = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.fadingContainer, { opacity: fadeAnim }]}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: "blue",
          }}
        />
      </Animated.View>
      <Button title="Fade In" onPress={fadeIn} />
      <Button title="Fade Out" onPress={fadeOut} />
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
    backgroundColor: "red",
  },
});

export default FadeInOutExample;
