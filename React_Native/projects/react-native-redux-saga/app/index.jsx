import { Link } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Counter = () => {
  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity style={styles.button}>
        <Link href={"/CounterA"} style={styles.buttonText}>
          Counter A
        </Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Link href={"/CounterB"} style={styles.buttonText}>
          Counter B
        </Link>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Light background color
  },
  button: {
    backgroundColor: "#6200ee", // Button background color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff", // Text color
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Counter;
