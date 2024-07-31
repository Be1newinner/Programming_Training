import { ScrollView, Text, View } from "react-native";

function App() {
  return (
    <View>
      <ScrollView
        horizontal
        style={{
          height: 100,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            backgroundColor: "pink",
            flexDirection: "row",
            height: 100,
          }}
        >
          <View
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
            }}
          >
            <Text>Hello</Text>
          </View>

          <View
            style={{
              backgroundColor: "blue",
              width: 100,
              height: 100,
            }}
          >
            <Text>Hello</Text>
          </View>

          <View
            style={{
              backgroundColor: "green",
              width: 100,
              height: 100,
            }}
          >
            <Text>Hello</Text>
          </View>

          <View
            style={{
              backgroundColor: "yellow",
              width: 100,
              height: 100,
            }}
          >
            <Text>Hello</Text>
          </View>

          <View
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
            }}
          >
            <Text>Hello</Text>
          </View>

          <View
            style={{
              backgroundColor: "pink",
              width: 100,
              height: 100,
            }}
          >
            <Text>Hello</Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          backgroundColor: "red",
          marginTop: 20,
        }}
      >
        <Text></Text>
      </View>
    </View>
  );
}

export default App;
