import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function AboutUs() {
  // Recieve Props using if any
  const navigate = useLocalSearchParams();
  const router = useRouter();

  console.log(navigate);

  function goBack() {
    const canGoBack = router.canGoBack();
    console.log(canGoBack);
    if (canGoBack) {
      router.back();
    } else {
      console.log("Can't GO Back!");
    }
  }

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

      <Text onPress={goBack}>Go Back</Text>
    </View>
  );
}
