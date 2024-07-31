import { Text, TouchableHighlight } from "react-native";

export default function Button1({ title, onPress, color = "pink" }) {
  return (
    <TouchableHighlight
      style={{
        // backgroundColor: color || "pink",
        backgroundColor: color,
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

export function Button2({ title, onPress, color = "red" }) {
  return (
    <TouchableHighlight
      style={{
        // backgroundColor: color || "pink",
        backgroundColor: color,
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

export function Button3({ title, onPress, color = "blue" }) {
  return (
    <TouchableHighlight
      style={{
        // backgroundColor: color || "pink",
        backgroundColor: color,
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
