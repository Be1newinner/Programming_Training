import { Link, useGlobalSearchParams, useLocalSearchParams } from "expo-router";
// import { useRoute } from "expo-router";
import { Text, View } from "react-native";

export default function AboutUs() {
  // Recieve Props using if any

  const navigate = useLocalSearchParams();
  // const navigate2 = useGlobalSearchParams();
  console.log(navigate);
  // alert(navigate.name);
  // console.log(navigate2);

  return (
    <View
      style={{
        backgroundColor: "yellow",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        I am About Screen. Hello {navigate.name}
      </Text>

      <Text style={{ margin: 10 }}>Normal Navigation</Text>
      <Link href={"contact"} style={{ color: "blue" }}>
        Contact Us
      </Link>
      <Link href={"/"} style={{ color: "blue" }}>
        Home Screen
      </Link>
      <Text style={{ margin: 10 }}>Replace Navigation</Text>
      <Link href={"contact"} replace style={{ color: "blue" }}>
        Contact Us
      </Link>
      <Link href={"/"} replace style={{ color: "blue" }}>
        Home Screen
      </Link>
    </View>
  );
}
