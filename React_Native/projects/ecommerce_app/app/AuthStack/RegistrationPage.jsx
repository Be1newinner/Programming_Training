import { useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { UserContext } from "@/service/UserService/UserContext";

const RegistrationPage = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useContext(UserContext);
  const navigation = useRouter();

  const handleRegister = async () => {
    try {
      await register(email, password, username);
      navigation.navigate("Login");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUserName}
      />
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
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          styles.buttonOutline,
          { opacity: pressed ? 0.6 : 1.0 },
        ]}
        onPress={() => navigation.back()}
      >
        <Text style={[styles.buttonText, styles.buttonTextOutline]}>
          Back to Login
        </Text>
      </Pressable>
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
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
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

export default RegistrationPage;
