import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function LoginPage() {
  const [userIDInput, setUserID] = useState("");
  const [pwrdInput, setPwrd] = useState("");

  const router = useRouter();

  const userAccounts = [
    {
      key: 0,
      id: "be1newinner",
      pwrd: "123456",
      name: "Vijay",
    },
    {
      key: 1,
      id: "be1newinner1",
      pwrd: "123456",
      name: "Vijay1",
    },
    {
      key: 2,
      id: "be1newinner2",
      pwrd: "123456",
      name: "Vijay2",
    },
  ];

  function signInFunction() {
    const isAccountExist =
      userAccounts.filter(({ id }) => id == userIDInput).length > 0;

    if (!isAccountExist) {
      alert("User Account Doesn't exist!");
      return;
    }

    const isIdPwrdCorrect =
      userAccounts.filter(
        ({ id, pwrd }) => id == userIDInput && pwrd == pwrdInput
      ).length > 0;

    if (!isIdPwrdCorrect) {
      alert("Invalid Password!");
      return;
    }

    router.replace({
      pathname: "about",
      params: {
        name: "Vijay",
      },
    });

    console.log("Sign In");
  }

  return (
    <View
      style={{
        padding: 10,
        gap: 10,
      }}
    >
      <TextInput
        style={{
          borderWidth: 1,
          height: 50,
          padding: 10,
        }}
        value={userIDInput}
        placeholder="User ID"
        onChangeText={setUserID}
      />
      <TextInput
        style={{
          borderWidth: 1,
          height: 50,
          padding: 10,
        }}
        value={pwrdInput}
        placeholder="Password Input"
        onChangeText={setPwrd}
      />
      <Pressable
        style={{
          width: 100,
          backgroundColor: "red",
          padding: 10,
        }}
        onPress={signInFunction}
      >
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
}
