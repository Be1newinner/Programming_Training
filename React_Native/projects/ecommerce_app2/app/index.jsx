import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";

const LoginPage = () => {
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    username: "",
    password: "",
    other: "",
  });

  async function runApi() {
    try {
      const data = await fetch(UserName);
      const response = await data.json();
      console.log(response);
      alert("response" + JSON.stringify(response));
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }

  async function runApiStatic() {
    try {
      const data = await fetch("http://10.110.240.128:3000/products");
      const response = await data.json();
      console.log(response);
      alert("response" + JSON.stringify(response));
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }

  async function runApiStatic2() {
    try {
      const data = await fetch(
        "http://10.10.9.89:202/api/Users/Get/1245701?locationid=10701"
      );
      const response = await data.json();
      console.log(response);
      alert("response" + JSON.stringify(response));
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={[styles.input, { borderColor: error.username ? "red" : "#ccc" }]}
        placeholder="UserName ID"
        placeholderTextColor="#999"
        value={UserName}
        onChangeText={setUserName}
      />
      {error.username ? <Text>{error.username}</Text> : null}
      <TextInput
        style={[styles.input, { borderColor: error.password ? "red" : "#ccc" }]}
        placeholder="Password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error.password ? <Text>{error.password}</Text> : null}

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { opacity: pressed ? 0.6 : 1.0 },
        ]}
        onPress={runApi}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { opacity: pressed ? 0.6 : 1.0 },
        ]}
        onPress={runApiStatic}
      >
        <Text style={styles.buttonText}>Login2</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { opacity: pressed ? 0.6 : 1.0 },
        ]}
        onPress={runApiStatic2}
      >
        <Text style={styles.buttonText}>Login3</Text>
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
