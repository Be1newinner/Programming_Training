import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export default function C31_DateTimePicker() {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <View>
      <Text>C31_DateTimePicker</Text>
      <Button
        title="Toggle"
        onPress={() => {
          setShow(!show);
        }}
      />

      {show && (
        <RNDateTimePicker
          value={date}
          onChange={(e) => setDate(new Date(e.nativeEvent.timestamp))}
          onTouchCancel={() => setShow(false)}
          // display="spinner"
          themeVariant="dark"
        />
      )}
    </View>
  );
}
