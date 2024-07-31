import React, { Suspense } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Fetched Data"), 5000);
  });
};

const createResource = (promise) => {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

const resource = createResource(fetchData());

const DataComponent = () => {
  const data = resource.read();

  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
        <DataComponent />
      </Suspense>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
