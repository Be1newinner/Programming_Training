import { Text, TouchableHighlight, View } from "react-native";

function Button1({ title, activeOpacity, ...rest }) {
  console.log(rest);
  return (
    <TouchableHighlight {...rest}>
      <Text
        style={{
          fontWeight: 500,
          fontSize: 18,
        }}
      >
        {title}
      </Text>
    </TouchableHighlight>
  );
}

function App() {
  return (
    <View>
      <Button1
        title={"Vijay"}
        onPress={() => {
          console.log("Hi");
        }}
        style={{
          backgroundColor: "pink",
        }}
        activeOpacity={0.5}
      />
      <Button1
        title={"Vijay"}
        onPress={() => {
          console.log("Hi");
        }}
        style={{
          backgroundColor: "red",
        }}
        activeOpacity={0.5}
      />
    </View>
  );
}

export default App;
