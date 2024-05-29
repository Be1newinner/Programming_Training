// import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");

  const [array1, setArray1] = useState([
    {
      title: "Vijay0",
      name: 0,
    },
    {
      title: "Vijay1",
      name: 1,
    },
    {
      title: "Vijay2",
      name: 2,
    },
    {
      title: "Vijay3",
      name: 3,
    },
    {
      title: "Vijay4",
      name: 4,
    },
  ]);

  function changeArray() {
    setArray1([
      ...array1,
      {
        title: inputValue,
      },
    ]);

    console.log(array1);
  }

  return (
    <View>
      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Your Input"
      />
      <TextInput
        value={inputValue1}
        onChangeText={setInputValue1}
        placeholder="Your Input"
      />

      {array1.map((item, index) => {
        return <Text key={index}> {item.title}</Text>;
      })}

      <Pressable
        onPress={changeArray}
        style={{
          backgroundColor: "red",
        }}
      >
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
}

export default App;

// Incrementor Link
