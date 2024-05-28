import { useState } from "react";
import { Button, Image, Text, View } from "react-native";

// let abc = 15;
// abc++;
// console.log(abc);

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  return (
    <View>
      <Button title="Submit" onPress={increase} />
      <Text> variable vaalue is {count} </Text>
    </View>
  );
}

{
  /* <Image
  source={{
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVtQYjLQyDLEXCmFSEyTnHfYvuC4wXX11vfVECr9-Ehw&s",
  }}
  style={{
    height: 100,
    width: 100,
  }}
/> */
}

{
  /* <Text>fsdfasd asdas das d fsa fasdd asd as d</Text> */
}
{
  /* <Button
        title="Submit"
        onPress={() => {
          console.log("hi");
        }}
      /> */
}
export default App;
