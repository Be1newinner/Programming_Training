import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { UserContext } from "@/service/UserService/UserContext";
import { Link } from "expo-router";

const LoginPage = () => {
  // const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        password: "Vijay123",
        username: "abc",
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "https://fake-api1.vercel.app/api/users/login",
        requestOptions
      );
      const data = await response.text();

      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="email ID"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { opacity: pressed ? 0.6 : 1.0 },
        ]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Link
        href={"AuthStack/RegistrationPage"}
        style={{
          width: "100%",
        }}
      >
        <View
          style={[
            styles.button,
            styles.buttonOutline,
            {
              width: Dimensions.get("window").width - 40,
            },
          ]}
        >
          <Text
            style={{
              color: "#4CAF50",
              fontWeight: "800",
            }}
          >
            Register
          </Text>
        </View>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f4f7",
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonOutline: {
    backgroundColor: "#fff",
    borderColor: "#4CAF50",
    borderWidth: 2,
  },
  buttonTextOutline: {
    color: "#4CAF50",
  },
});

export default LoginPage;
