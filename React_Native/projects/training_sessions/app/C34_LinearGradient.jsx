import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Simple Gradient
export function SimpleGradient() {
  return (
    <LinearGradient
      colors={["red", "yellow", "green"]}
      style={{
        flex: 1,
      }}
    >
      <Text style={styles.text}>Hello, Gradient!</Text>
    </LinearGradient>
  );
}

// Complex Gradients
export function ComplexGradient() {
  return (
    <LinearGradient
      colors={[
        "#ff7e5f",
        "#1e00ff",
        "#ff6f91",
        "#00ff5e",
        "#ff7e5f",
        "#1e00ff",
        "#ff6f91",
        "#00ff5e",
        "#ff7e5f",
        "#1e00ff",
        "#ff6f91",
        "#00ff5e",
      ]}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.9, y: 1 }}
      style={{
        flex: 1,
      }}
    >
      <Text style={styles.text}>Complex Gradient</Text>
    </LinearGradient>
  );
}

// Overlay Gradients
export default function OverlayGradients() {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Cumulus_Clouds_over_Yellow_Prairie2.jpg/1280px-Cumulus_Clouds_over_Yellow_Prairie2.jpg",
        }}
        style={styles.image}
      >
        <LinearGradient
          colors={[
            "rgba(0,0,255,0.3)",
            "rgba(255, 255, 255, 0.3)",
            "rgba(255,0,0,0.3)",
          ]}
          style={{
            position: "absolute",
            height: Dimensions.get("window").height - 50,
            width: Dimensions.get("window").width,
          }}
        />
        <Text style={styles.text}>Gradient Overlay</Text>
      </ImageBackground> */}

      {/* -------------- Gradient No. 4 ------------------------------- */}

      <View
        style={{
          backgroundColor: "red",
          height: 500,
          marginTop: 100,
        }}
      >
        <LinearGradient
          colors={[
            "rgba(0,0,0,0.6)",
            "rgba(0,0,0,0.7)",
            "rgba(0,0,0,0.8)",
            "rgba(0,0,0,0.8)",
            "rgba(0,0,0,0.8)",
            "rgba(0,0,0,0.8)",
            "rgba(0,0,0,0.8)",
            "rgba(0,0,0,0.8)",
            "rgba(0,0,0,0.7)",
            "rgba(0,0,0,0.6)",
          ]}
          style={{
            position: "absolute",
            flex: 1,
            height: Dimensions.get("window").height - 50,
            width: Dimensions.get("window").width,
            top: -100,
          }}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
        <Text style={styles.text}>Gradient Overlay</Text>
        <Text style={styles.text}>Gradient Overlay</Text>
        <Text style={styles.text}>Gradient Overlay</Text>
        <Text style={styles.text}>Gradient Overlay</Text>
        <Text style={styles.text}>Gradient Overlay</Text>
        <Text style={styles.text}>Gradient Overlay</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
});
