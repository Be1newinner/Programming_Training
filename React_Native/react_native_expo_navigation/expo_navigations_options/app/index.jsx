import { Link, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function App() {
  const router = useRouter();

  function RouteToContact() {
    // router.push("contact");
    // router.replace("contact");
    // const canGoBack = router.canGoBack();
    // console.log(canGoBack);
    // if (canGoBack) {
    //   router.back();
    // } else {
    //   console.log("Can't GO Back!");
    // }
    //push with some data

    router.push({
      pathname: "about",
      params: {
        user: "Vijay kumar",
        id: 75,
        data: {
          some: "More Data",
        },
      },
    });
  }

  return (
    <View
      style={{
        backgroundColor: "skyblue",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        I am Index Screen
      </Text>

      <Text style={{ margin: 10 }}>Normal Navigation</Text>
      <Link href={"contact"} style={{ color: "blue" }}>
        Contact Us
      </Link>
      <Link href={"about"} style={{ color: "blue" }}>
        About Us
      </Link>
      <Text style={{ margin: 10 }}>Replace Navigation</Text>
      <Link href={"contact"} replace style={{ color: "blue" }}>
        Contact Us
      </Link>
      <Link href={"about"} replace style={{ color: "blue" }}>
        About Us
      </Link>

      <Pressable
        style={{
          backgroundColor: "red",
          width: 120,
          textAlign: "center",
          margin: 10,
          padding: 10,
          elevation: 10,
          borderRadius: 10,
        }}
        onPress={RouteToContact}
      >
        <Text>Go to About Screen using function</Text>
      </Pressable>
    </View>
  );
}
