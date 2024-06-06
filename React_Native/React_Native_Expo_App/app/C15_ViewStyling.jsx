import { Dimensions, Text, View } from "react-native";

export default function ViewStyling() {
  return (
    <>
      <View
        style={{
          backgroundColor: "blue",
          height: 500,
          padding: 50,
          margin: 50,
          //   position: "static",
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            height: 100,
            width: 200,
            // width: Dimensions.get("screen").width,
            // margin: 20,
            //   marginLeft: 10,
            //   marginRight: 10,
            //   marginHorizontal: 20,
            //   marginVertical: 20,
            //   padding: 20,
            //   borderWidth: 10,
            //   borderLeftWidth: 20,
            //   borderColor: "blue",
            //   borderStyle: "dotted",
            borderLeftColor: "green",
            //   elevation: 20,
            overflow: "hidden",
            position: "absolute",
            // top: 0,
            //   bottom: 50,
            // left: 0,
            //   right: 40,
          }}
        >
          <Text
            style={{
              color: "blue",
              fontSize: 22,
              fontWeight: 700,
              textAlign: "center",
              fontStyle: "italic",
              lineHeight: 50,
              letterSpacing: 5,
              textDecorationLine: "line-through",
            }}
          >
            Something
          </Text>
          <Text>Something</Text>
          <Text>Something</Text>
          <Text>Something</Text>
          <Text>Something</Text>
          <Text>Something</Text>
          <Text>Something</Text>
          <Text>Something</Text>
          <Text>Something</Text>
          <Text>Something</Text>
          <Text>Something</Text>
          <Text>Something</Text>
        </View>
      </View>
      {/* <View
        style={{
          backgroundColor: "blue",
          height: 100,
          width: 200,
        }}
      >
        <Text>Something</Text>
      </View> */}
    </>
  );
}
