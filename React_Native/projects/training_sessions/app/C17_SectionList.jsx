import React from "react";
import { Text, View, SectionList, StatusBar } from "react-native";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

const App = () => (
  <View
    style={{
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16,
    }}
  >
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View
          style={{ backgroundColor: "#f9c2ff", padding: 20, marginVertical: 8 }}
        >
          <Text
            style={{
              fontSize: 24,
            }}
          >
            {item}
          </Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text
          style={{
            fontSize: 32,
            backgroundColor: "#27c742",
          }}
        >
          {title}
        </Text>
      )}
    />
  </View>
);

export default App;
