import { Stack, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function RootLayout2() {
  const router = useRouter();
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "red",
      }}
    >
      <View
        style={{
          borderWidth: 2,
          height: 50,
        }}
      >
        <Text>Header</Text>
      </View>
      <Stack
        screenOptions={{
          // headerStyle: {
          //   backgroundColor: "blue",
          // },
          headerTintColor: "red",
          headerLeft: () => null,
          headerRight: (props) => {
            console.log(props);
            return (
              <Pressable onPress={() => router.back()}>
                <Text>{props.canGoBack ? "GO BACK" : "HOME"}</Text>
              </Pressable>
            );
          },
          // headerShown: false,
          // headerTransparent: true,
          // orientation: "landscape",
        }}
      >
        <Stack.Screen
          name="contact/index"
          options={{
            title: "Contact Us",
          }}
          // getId={({ params }) => String(Date.now())}
        />
        <Stack.Screen
          name="index"
          options={{
            title: "Home Page",
          }}
        />
        {/* <Stack.Screen
        name="about"
        options={{
          title: "About Us",
        }}
        // getId={({ params }) => String(Date.now())}
      /> */}
      </Stack>

      <View
        style={{
          borderWidth: 2,
          height: 50,
        }}
      >
        <Text>Footer</Text>
      </View>
    </View>
  );
}

//Main Stack Style Options
// using screenOptions

// optional to pass screen based custom styling

// export function RootLayout() {
//   return <Stack />;
// }

// screenOptions={
//   {
// headerStyle: {
//   backgroundColor: "red",
// },
// headerTintColor: "blue",
// headerRight: (props) => {
//   console.log(props);
//   return (
//     <View>
//       <Text>Show Menu</Text>
//     </View>
//   );
// },
// title: "soe",
// headerTitle: (e) => (
//   <Text>
//     {e.children.includes("/") ? e.children.split("/")[0] : e.children}
//   </Text>
// ),
// headerSearchBarOptions: {
//   onChangeText: (e) => console.log(e.nativeEvent.text),
//   onSearchButtonPress: (e) => console.log("Pressed"),
// },
// headerTransparent: false,
// header: (e) => {
//   return (
//     <View>
//       <Text>Header</Text>
//     </View>
//   );
// },
// animation: "slide_from_bottom",
// orientation: "all",
//   }
// }
