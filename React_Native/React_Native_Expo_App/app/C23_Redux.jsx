import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View, Button } from "react-native";
import { increment, decrement } from "../service/Store/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.counterContainer}>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Text style={styles.counterText}>{count}</Text>
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counterText: {
    fontSize: 20,
    marginHorizontal: 10,
  },
});

export default Counter;

// npm install @reduxjs/toolkit react-redux
