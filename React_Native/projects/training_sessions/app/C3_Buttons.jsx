import {
  Pressable,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

function App() {
  return (
    <View>
      <Button1
        title={"Vijay"}
        onPress={() => {
          console.log("Hi");
        }}
      />
      <Button1
        title={"Vijay1"}
        onPress={() => {
          console.log("Hi2");
        }}
      />
      <Button1
        title={"Allan"}
        onPress={() => {
          console.log("hi Allan");
        }}
      />
    </View>
  );
}

export default App;

function Button1({ title, onPress }) {
  return (
    <TouchableHighlight
      style={{
        backgroundColor: "pink",
        width: 100,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderRadius: 20,
        elevation: 45,
      }}
      onPress={onPress}
    >
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

function Button2({ title, onPress }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "pink",
        width: 100,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderRadius: 20,
        elevation: 45,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontWeight: 500,
          fontSize: 18,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

function Button3({ title, onPress }) {
  return (
    <Pressable
      style={{
        backgroundColor: "pink",
        width: 100,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderRadius: 20,
        elevation: 45,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontWeight: 500,
          fontSize: 18,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
