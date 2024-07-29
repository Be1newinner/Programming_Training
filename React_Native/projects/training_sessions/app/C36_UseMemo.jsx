import React, { useMemo, useState } from "react";
import { View, Text, Button } from "react-native";

// Component that calculates factorial of a number
const Factorial = ({ number }) => {
  const factorial = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    console.log("Factorial calculated");
    return result;
  };

  const memoizedFactorial = useMemo(() => factorial(number), [number]);

  return (
    <View>
      {/* <Text>
        Factorial of {number}: {factorial(number)}
      </Text> */}
      <Text>
        Factorial of {number}: {memoizedFactorial}
      </Text>
    </View>
  );
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  return (
    <View>
      <Factorial number={number} />
      <Button title="Increment Count" onPress={() => setCount(count + 1)} />
      <Button title="Change Number" onPress={() => setNumber(number + 1)} />
      <Text>Count: {count}</Text>
    </View>
  );
};

export default ParentComponent;
