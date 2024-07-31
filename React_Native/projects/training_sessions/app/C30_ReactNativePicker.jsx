import { View, Text } from "react-native";
import React, { useRef, useState } from "react";
import { Picker } from "@react-native-picker/picker";

export default function C30_ReactNativePicker() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  return (
    <View>
      <Text>C30_ReactNativePicker</Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        ref={pickerRef}
        onBlur={close}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}
