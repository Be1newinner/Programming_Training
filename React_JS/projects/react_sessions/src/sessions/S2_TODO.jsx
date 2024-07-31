import { useState } from "react";

export default function S2Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  const updateTodo = () => {
    const newTodos = todos.map((todo, i) =>
      i === editIndex ? inputValue : todo
    );
    setTodos(newTodos);
    setInputValue("");
    setEditIndex(null);
  };

  return (
    <div>
      <input
        placeholder="Please enter any task!"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          padding: "5px 10px",
          margin: 10,
        }}
      />
      <button onClick={editIndex !== null ? updateTodo : addTodo}>
        {editIndex !== null ? "Update Task" : "Add Task"}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
