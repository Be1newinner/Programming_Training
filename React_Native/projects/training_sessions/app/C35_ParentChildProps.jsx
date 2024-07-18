import { Text } from "react-native";
import { View } from "react-native";

export default function Parent() {
  return (
    <View>
      <Text>hello</Text>
      <Child1 title={"Child 1 COmpoennt"} />
      <Child2 title={"child 2 component"} />
    </View>
  );
}

export function Child1({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export function Child2({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
