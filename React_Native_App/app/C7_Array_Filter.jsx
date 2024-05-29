import { useState } from "react";
import { Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

function App() {
  const [array1] = useState([
    {
      title: "Vijay0",
      price: 20,
    },
    {
      title: "Vijay1",
      price: 21,
    },
    {
      title: "Vijay2",
      price: 22,
    },
    {
      title: "Vijay3",
      price: 23,
    },
    {
      title: "Vijay4",
      price: 24,
    },
  ]);

  return (
    <View>
      <AntDesign name="search1" size={48} color="red" />

      {array1
        // .filter((item, index) => {
        //   return index === 1;
        // })
        // .filter((item, index) => index > 2)
        .filter((item, index) => item.price > 21)
        .map((item, index) => {
          return (
            <Text key={index}>
              {" "}
              {item.title} {item.price}
            </Text>
          );
        })}
    </View>
  );
}

export default App;
