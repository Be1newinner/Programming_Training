import React from "react";
import { View, FlatList, Text } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "1 Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "2 Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "3 Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-adased5-3ad53abb28ba",
    title: "4 Item",
  },
  {
    id: "3ac68asafc-c605-48d3-a4f8-fbd91aa97f63",
    title: "5 Item",
  },
  {
    id: "58a694a0f-3da1-471f-bd96-145571e29d72",
    title: "6 Item",
  },
  {
    id: "bad7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "7 Item",
  },
  {
    id: "3aac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "8 Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-14a5571e29d72",
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
        renderItem={({ item }, index) => {
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
