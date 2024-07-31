import React, { useState } from "react";
import { View, Switch } from "react-native";

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  function onChangeFunction() {
    setIsEnabled(!isEnabled);

    // alert('Switch Value is ' + isEnabled);
  }

  return (
    <View style={{ marginTop: 50 }}>
      <Switch
        trackColor={{ false: "blue", true: "yellow" }}
        thumbColor={isEnabled ? "red" : "orange"}
        onValueChange={onChangeFunction}
        value={isEnabled}
      />
    </View>
  );
};

export default App;
