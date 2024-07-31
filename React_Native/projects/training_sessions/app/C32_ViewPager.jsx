import { useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import ViewPager from "react-native-pager-view";

export default function MyPager() {
  const pager = useRef(0);

  return (
    <View style={styles.container}>
      <View>
        <Text
          onPress={() => {
            pager.current.setPage(0);
          }}
        >
          Page 1
        </Text>
        <Text
          onPress={() => {
            pager.current.setPage(1);
          }}
        >
          Page 2
        </Text>
        <Text
          onPress={() => {
            pager.current.setPage(2);
          }}
        >
          Page 3
        </Text>
      </View>

      <ViewPager style={styles.container} initialPage={0} ref={pager}>
        <View style={({ ...styles.page }, { backgroundColor: "red" })} key="1">
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
          <Text>Swipe ➡️</Text>
          <Text>Swipe ➡️</Text>
          <Text>Swipe ➡️</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={({ ...styles.page }, { backgroundColor: "blue" })} key="2">
          <Text>Second page</Text>
          <Text>Swipe ➡️</Text>
          <Text>Swipe ➡️</Text>
          <Text>Swipe ➡️</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View
          style={({ ...styles.page }, { backgroundColor: "green" })}
          key="3"
        >
          <Text>Third page</Text>
          <Text>Swipe ➡️</Text>
          <Text>Swipe ➡️</Text>
          <Text>Swipe ➡️</Text>
          <Text>Swipe ➡️</Text>
        </View>
      </ViewPager>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
});
