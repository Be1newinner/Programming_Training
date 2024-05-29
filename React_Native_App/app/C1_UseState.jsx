import { useState } from "react";
import { Button, TextInput, View } from "react-native";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [age, setAge] = useState("");

  function SubmitFunction() {
    const fullName = `Hi, Your Full Name is ${fName} ${lName}`;

    const newDate = new Date();
    const currentYear = newDate.getFullYear();
    const DOY = currentYear - age;
    console.log(DOY);

    const YearStatement = `Your DOY is ${DOY}`;
    alert(fullName + "\n" + YearStatement);
  }

  // const dates = new Date();
  // // const state = "My Name is " + name;
  // const state = `My Name \n is ${name}`;

  // console.log(dates.getSeconds());
  // console.log(dates.getDay());
  // dates.setFullYear(2025);
  // console.log(dates.toLocaleString());

  return (
    <View>
      {/* <Text> variable  </Text> */}
      <TextInput
        placeholder="Your First Name!"
        value={fName}
        onChangeText={(e) => setFName(e)}
      />
      <TextInput
        placeholder="Your Last Name!"
        value={lName}
        onChangeText={setLName}
      />
      <TextInput
        placeholder="Your Age!"
        value={age}
        onChangeText={setAge}
        inputMode="numeric"
      />

      <Button title="Submit" onPress={SubmitFunction} />
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
