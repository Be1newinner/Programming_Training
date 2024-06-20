import { View, Text, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../service/store/counterSlice";

export default function C23_Redux() {
  const Counter = useSelector((selector) => selector.counter);
  const dispatch = useDispatch();

  console.log(Counter);

  return (
    <View>
      <Text>C23_Redux</Text>
      <Text>Value is {Counter.value}</Text>
      <Button title="Increase" onPress={() => dispatch(increment())} />
    </View>
  );
}
