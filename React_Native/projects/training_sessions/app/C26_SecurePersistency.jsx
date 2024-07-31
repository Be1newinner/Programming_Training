import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function C24_SecurePersistencey() {
  const [count, setCount] = useState("empty");

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("my-key", "Vijay");
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("my-key");
      setCount(value);
      console.log(value);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Text> {count}</Text>

      <Button title="save" onPress={() => storeData()} />
      <Button title="Get" onPress={() => getData()} />

      <Text>The Persistencey</Text>
    </View>
  );
}
