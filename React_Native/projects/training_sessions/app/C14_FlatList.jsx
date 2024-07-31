import React from "react";
import { View, FlatList, Text } from "react-native";

const DATA = [
  {
    id: "1",
    title: "1 Item",
  },
  {
    id: "2",
    title: "2 Item",
  },
  {
    id: "3",
    title: "3 Item",
  },
  {
    id: "4",
    title: "4 Item",
  },
  {
    id: "5",
    title: "5 Item",
  },
  {
    id: "6",
    title: "6 Item",
  },
  {
    id: "7",
    title: "7 Item",
  },
  {
    id: "8",
    title: "8 Item",
  },
  {
    id: "9",
    title: "9 Item",
  },
];

const App = () => {
  return (
    <View>
      <View>
        <Text> The HEader 1 </Text>
      </View>

      <FlatList
        ListHeaderComponent={() => {
          return (
            <View>
              <Text> The HEader 2 </Text>
            </View>
          );
        }}
        data={DATA}
        ListEmptyComponent={() => {
          return (
            <View>
              <Text>List is Empty!</Text>
            </View>
          );
        }}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                backgroundColor: "#f9c2ff",
              }}
            >
              <Text
                style={{
                  fontSize: 32,
                }}
              >
                {item.title}
              </Text>
            </View>
          );
        }}
        // ItemSeparatorComponent={() => {
        //   return (
        //     <View
        //       style={{
        //         width: 400,
        //         backgroundColor: "red",
        //         height: 2,
        //       }}
        //     ></View>
        //   );
        // }}
        // horizontal
        // numColumns={4}
        // keyExtractor={(item) => item.id}
        // contentContainerStyle={{
        //   gap: 10,
        // }}
      />
    </View>
  );
};

export default App;
