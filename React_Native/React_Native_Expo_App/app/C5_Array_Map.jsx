// import { Link } from "expo-router";
import { useState } from "react";
import { Button, Pressable, Text, View } from "react-native";

function App() {
  // const item0 = "Vijay0";
  // const item1 = "Vijay1";
  // const item2 = "Vijay2";
  // const item3 = "Vijay3";
  // const item4 = "Vijay4";
  // const item5 = "Vijay5";

  // const array = ["Vijaya0", "Vijay1", "Vijay2", "Vijay3", "Vijay4"];

  // {
  //   title: "",
  //   price:"",
  //   mrp:"",
  //   image:""
  // }

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
    // array1.push();

    // const array2 = array1;

    // console.log(array2);

    setArray1([
      ...array1,
      {
        title: "Ajay",
        name: 6,
      },
    ]);

    // setArray1((prev) => [
    //   ...prev,
    //   {
    //     title: "Ajay",
    //     name: 6,
    //   },
    // ]);

    // const array2 = [...array1];

    // console.log(array2);

    // setArray1(array1);
  }

  //  Old way to create Array
  // const array1 = [
  //   {
  //     title: "Vijay0",
  //     name: 0,
  //   },
  //   {
  //     title: "Vijay1",
  //     name: 1,
  //   },
  //   {
  //     title: "Vijay2",
  //     name: 2,
  //   },
  //   {
  //     title: "Vijay3",
  //     name: 3,
  //   },
  //   {
  //     title: "Vijay4",
  //     name: 4,
  //   },
  // ];

  return (
    <View>
      {/* Routing */}
      {/* <Link href={"Destructuing_4"}> Go to 1 </Link> */}

      {/* Key can be simport { Link } from "expo-router";
tring or number  */}

      {/* aRRAY OF STRINGS OR NUMBER */}
      {/* {array.map((item, index) => {
        return (
          <Text
            key={index}
            onPress={() => {
              console.log(index);
            }}
          >
            {item}
          </Text>
        );
      })} */}

      {/* aRRAY OF OBJECTS */}

      {array1.map((item) => {
        return <Text key={item.name}> {item.title}</Text>;
      })}

      <Pressable onPress={changeArray}>
        <Text>Change Somehting</Text>
      </Pressable>
    </View>
  );
}

export default App;

// Incrementor Link
