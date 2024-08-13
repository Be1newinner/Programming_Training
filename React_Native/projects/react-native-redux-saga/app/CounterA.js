import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementA,
  fetchCounterARequest,
  decrementA,
} from "../redux/actions/counterAActions";
import { selectCounterAValue } from "../redux/selectors/counterASelector";

export default function CounterA() {
  // const count = useSelector((e) => e.counterA.value);
  // const count = useSelector((e) => e.counterA).value;
  // const count = useSelector((e) => e.counterA);
  const count = useSelector(selectCounterAValue);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter A: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => dispatch(incrementA())} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Decrement" onPress={() => dispatch(decrementA())} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Fetch From API"
          onPress={() => dispatch(fetchCounterARequest())}
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
