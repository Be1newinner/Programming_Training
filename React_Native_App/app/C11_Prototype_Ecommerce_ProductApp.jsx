import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";
import Man from "../assets/images/man.png";

function App() {
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

      <ScrollView>
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
          >
            Man
          </Text>
          <Text
            style={{
              fontSize: 18,
            }}
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
          {Array.from({ length: 10 }).map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: Dimensions.get("screen").width / 2 - 14,
                  aspectRatio: 0.8,
                }}
              >
                <Image
                  source={Man}
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
                  Jacket ABC
                </Text>
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: 18,
                    marginLeft: 10,
                    marginBottom: 20,
                  }}
                >
                  $ 72.69
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default App;
