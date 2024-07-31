import { useReducer } from "react";
import { Pressable, Text } from "react-native";

function reducer(state, action) {
  if (action.type === "increaseQuantity") {
    return {
      age: state.age + action.payload,
    };
  }
  if (action.type === "decreaseQuantity") {
    return {
      age: state.age - 1,
    };
  }
  if (action.type === "removeProduct") {
    return {
      age: state.age - 1,
    };
  }
  throw Error("Unknown action.");
}

export default function S21_useReducer() {
  const [state, dispatch] = useReducer(reducer, { age: 0 });

  return (
    <>
      <Pressable
        onClick={() => {
          dispatch({ type: "increase", payload: 5 });
        }}
      >
        <Text>Increase age</Text>
      </Pressable>
      <Pressable
        onClick={() => {
          dispatch({ type: "decrease" });
        }}
      >
        <Text>Decrease age</Text>
      </Pressable>
      <Text>Hello! You are {state.age}.</Text>
    </>
  );
}
