import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

export default function App() {
  const markers = [
    {
      id: 1,
      title: "Point A",
      description: "This is Point A",
      coordinate: { latitude: 37.78825, longitude: -122.4324 },
    },
    {
      id: 2,
      title: "Point B",
      description: "This is Point B",
      coordinate: { latitude: 37.75825, longitude: -122.4624 },
    },
    {
      id: 3,
      title: "Point C",
      description: "This is Point C",
      coordinate: { latitude: 37.72825, longitude: -122.4824 },
    },
    {
      id: 4,
      title: "Point D",
      description: "This is Point D",
      coordinate: { latitude: 37.70825, longitude: -122.5024 },
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        ))}
        <Polyline
          coordinates={markers.map((e) => e.coordinate)}
          strokeColor="blue"
          strokeWidth={1}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
