import React, { useState } from "react";
import { View, Text, Button } from "react-native";

// Child component without React.memo
const ChildComponent = ({ title }) => {
  console.log("ChildComponent rendered");
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

// Child component with React.memo
// const ChildComponent = React.memo(({ title }) => {
//   console.log("ChildComponent rendered");
//   return (
//     <View>
//       <Text>{title}</Text>
//     </View>
//   );
// });

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [title] = useState("Hello World");

  return (
    <View>
      <ChildComponent title={title} />
      <Button title="Increment Count" onPress={() => setCount(count + 1)} />
      <Text>Count: {count}</Text>
    </View>
  );
};

export default ParentComponent;
