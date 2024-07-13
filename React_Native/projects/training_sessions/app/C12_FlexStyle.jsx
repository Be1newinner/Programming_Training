import { Text, View } from "react-native";

function App() {
  return (
    <View
      style={{
        display: "flex", // flex || none       default: flex
        backgroundColor: "red",
        height: 350,
        flexDirection: "row", // row || row-reverse || column || column-reverse  default: column
        // flexWrap: "wrap", // wrap || wrap-reverse || nowrap  default: nowrap
        // justifyContent: "space-between", // flex-start || center || flex-end || space-between || space-around || space-evenly, default: flex-start
        // gap: 10,
        // rowGap:10,
        // columnGap:10,
        // alignContent: "space-evenly", // flex-start || center || flex-end default: flex-start
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          height: 100,
          width: 100,
          // flexGrow: 2,
          flexBasis: "70%",
          // display:"none",
          flexShrink: 1,
        }}
      >
        <Text
          style={{
            fontSize: 45,
          }}
        >
          1
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "orange",
          height: 100,
          width: 100,
          // flexGrow: 1,
          // flexBasis: "40%",
          flexBasis: "30%",
          flexShrink: 1,
          order: 4,
        }}
      >
        <Text
          style={{
            fontSize: 45,
          }}
        >
          2
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "pink",
          height: 100,
          width: 100,
          flexBasis: "50%",
          flexShrink: 1,
        }}
      >
        <Text
          style={{
            fontSize: 45,
          }}
        >
          3
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "blue",
          height: 100,
          width: 100,
          flexShrink: 1,
        }}
      >
        <Text
          style={{
            fontSize: 45,
          }}
        >
          4
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "blue",
          height: 100,
          width: 100,
          flexShrink: 1,
        }}
      >
        <Text
          style={{
            fontSize: 45,
          }}
        >
          5
        </Text>
      </View>
    </View>
  );
}

export default App;