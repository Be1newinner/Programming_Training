import * as React from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  const [input, setInput] = React.useState("Some Sample Text");

  const speak = () => {
    Speech.speak(input);
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setInput}
        value={input}
        style={styles.textInput}
        multiline={true}
      />
      <Button title="Press to hear some words" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  textInput: {
    borderWidth: 1,
    padding: 0,
    paddingHorizontal: 10,
  },
});
