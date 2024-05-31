import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";
import Man from "../assets/images/man.png";
import { useState } from "react";

function App() {
  const [currentSelection, setCurrentSelection] = useState("all");

  const productData = [
    {
      img: Man,
      title: "Jacket ABC0",
      price: 75,
      type: "male",
    },
    {
      img: Man,
      title: "Jacket ABC1",
      price: 75,
      type: "male",
    },
    {
      img: Man,
      title: "Jacket ABC2",
      price: 75,
      type: "male",
    },
    {
      img: Man,
      title: "Jacket ABC3",
      price: 75,
      type: "male",
    },
    {
      img: Man,
      title: "Jacket ABC4",
      price: 75,
      type: "female",
    },
    {
      img: Man,
      title: "Jacket ABC5",
      price: 75,
      type: "female",
    },
    {
      img: Man,
      title: "Jacket ABC6",
      price: 75,
      type: "female",
    },
    {
      img: Man,
      title: "Jacket ABC7",
      price: 75,
      type: "female",
    },
  ];

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 20,
          margin: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <AntDesign name="meh" size={24} color="black" />
          <Text
            style={{
              fontWeight: 700,
              fontSize: 22,
            }}
          >
            Maxlook
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
          }}
        >
          <AntDesign name="search1" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
      </View>

      <ScrollView
        style={
          {
            // paddingBottom: 150,
          }
        }
      >
        <View
          style={{
            paddingBottom: 300,
          }}
        >
          <View
            style={{
              height: 150,
              borderRadius: 20,
              backgroundColor: "orange",
              margin: 20,
            }}
          ></View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
              }}
              onPress={() => setCurrentSelection("all")}
            >
              All
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              Newest
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              Popular
            </Text>
            <Text
              style={{
                fontWeight: 900,
                textDecorationLine: "underline",
                fontSize: 20,
              }}
              onPress={() => setCurrentSelection("male")}
            >
              Man
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}
              onPress={() => setCurrentSelection("female")}
            >
              Woman
            </Text>
          </View>

          <View
            style={{
              gap: 5,
              flexDirection: "row",
              flexWrap: "wrap",
              padding: 10,
            }}
          >
            {productData
              .filter((item) => {
                if (currentSelection === "all") {
                  return true;
                } else if (currentSelection === "male") {
                  return item.type == "male";
                } else if (currentSelection === "female") {
                  return item.type == "female";
                }
              })
              .map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: Dimensions.get("screen").width / 2 - 14,
                      aspectRatio: 0.8,
                    }}
                  >
                    <Image
                      source={item.img}
                      style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "cover",
                        backgroundColor: "rgba(50,100,255, 0.3)",
                        borderRadius: 20,
                      }}
                    />
                    <Text
                      style={{
                        fontWeight: 500,
                        fontSize: 18,
                        marginTop: 10,
                        marginLeft: 10,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontWeight: 500,
                        fontSize: 18,
                        marginLeft: 10,
                        marginBottom: 20,
                      }}
                    >
                      $ {item.price}
                    </Text>
                  </View>
                );
              })}
          </View>
          <View
            style={{
              height: 100,
            }}
          >
            <Text>End of List</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default App;
