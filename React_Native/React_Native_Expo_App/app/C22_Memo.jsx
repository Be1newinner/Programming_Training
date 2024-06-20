import { View, Text, Button } from "react-native";
import { useState, useMemo } from "react";

export default function C22_Memo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = expensiveCalculation(count);
  // const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <View>
        <Text>My Todos</Text>
        {todos.map((todo, index) => {
          return <Text key={index}>{todo}</Text>;
        })}
        <Button onPress={addTodo} title="Add Todo" />
      </View>
      <View>
        <Text>Count: {count}</Text>
        <Button onPress={increment} title="+" />
        <Text>Expensive Calculation</Text>
        <Text> {calculation}</Text>
      </View>
    </View>
  );
}

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 200000000; i++) {
    num += 1;
  }
  return num;
};
