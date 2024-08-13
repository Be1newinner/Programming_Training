import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementB,
  decrementB,
  fetchCounterBRequest,
} from "../redux/actions/counterBActions";
import { selectCounterBValue } from "../redux/selectors/counterBSelector";

export default function CounterB() {
  const count = useSelector(selectCounterBValue);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter B: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => dispatch(incrementB())} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Decrement" onPress={() => dispatch(decrementB())} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Fetch From API"
          onPress={() => dispatch(fetchCounterBRequest())}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  counterText: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#333",
  },
  buttonContainer: {
    marginVertical: 10,
    width: "60%",
  },
});
