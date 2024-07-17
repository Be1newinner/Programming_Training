import React, { useContext, useState } from "react";
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
  // const { login } = useContext(UserContext);
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    username: "",
    password: "",
    other: "",
  });

  const validations = () => {
    const tempErrors = {
      username: "",
      password: "",
      other: "",
    };

    let isCorrect = true;

    if (!UserName) {
      tempErrors.username = "UserName is empty!";
      isCorrect = false;
    }

    if (UserName.length < 3) {
      tempErrors.username = "UserName is invalid!";
      isCorrect = false;
    }

    if (!password) {
      tempErrors.password = "Password is empty!";
      isCorrect = false;
    }

    setError(tempErrors);

    return isCorrect;
  };

  const handleLogin = async () => {
    // if (!validations()) {
    //   return;
    // }

    try {
      const response = await fetch(
        "http://10.10.10.41:9001/api/Employee/GetEmployee?id=1242783"
      );
      const data = await response.json();
      console.log("DATA => ", data);
    } catch (error) {
      console.error(error.message);
    }
  };

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
