import { useState } from "react";
import { Button, Text, View } from "react-native";

function App() {
  const [state, dispatch] = useState(0);

  function reducer(state, type) {
    if (type == "increase") {
      return state + 1;
    }
    if (type == "decrease") {
      return state - 1;
    }
  }

  function increase() {
    if (state < 10) {
      dispatch(reducer(state, "increase"));
    }
  }

  function decrease() {
    if (state > 0) {
      dispatch(reducer(state, "decrease"));
    }
  }

  return (
    <View>
      <Text> variable vaalue is {state} </Text>
      <Button title="increase" onPress={increase} />
      <Button title="decrease" onPress={decrease} />
    </View>
  );
}

export default App;
