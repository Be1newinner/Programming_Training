import React, { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

function C18_CustomDropDown() {
  const [selected, setSelected] = useState(0);

  return (
    <View>
      <Text>C18_CustomDropDown</Text>

      <DropDown
        data={[
          { id: 0, title: "Something_0" },
          { id: 1, title: "Something_1" },
          { id: 2, title: "Something_2" },
          { id: 3, title: "Something_3" },
          { id: 4, title: "Something_4" },
        ]}
        selected={selected}
        setSelected={setSelected}
      />
    </View>
  );
}

function DropDown({ data, selected = 0, setSelected }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View
      style={{
        padding: 10,
      }}
    >
      <Pressable onPress={() => setIsOpen(!isOpen)}>
        <View
          style={{
            borderWidth: 2,
            padding: 5,
            borderRadius: 5,
          }}
        >
          <Text>Drop Down</Text>
        </View>
      </Pressable>
      {isOpen ? (
        <View
          style={{
            borderWidth: 2,
            padding: 5,
            borderRadius: 5,
            marginTop: 5,
          }}
        >
          <FlatList
            data={data}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  borderTopWidth: 1,
                }}
              />
            )}
            contentContainerStyle={{
              gap: 5,
            }}
            renderItem={({ item: { title, id } }) => {
              return (
                <View
                  style={{
                    height: 30,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: selected === id ? 800 : 400,
                    }}
                  >
                    {title}
                  </Text>
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      ) : null}
      <Text>Bottom Data</Text>
      <Text>Bottom Data</Text>
      <Text>Bottom Data</Text>
      <Text>Bottom Data</Text>
    </View>
  );
}

export default C18_CustomDropDown;
