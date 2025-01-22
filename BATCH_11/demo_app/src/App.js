import "./App.css";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Button from "./components/Button";
import { useState } from "react";
export default function App() {

  // let count = 0;
  const [count, setCount] = useState(0);

  function increaseCount() {
    let temp = count;
    temp++;
    setCount(temp);
  }

  return (
    <div className="body">
      <Header />
      <main>
        <h2>{count}</h2>
        <Button title="Prdsgfsdfdsfsdfess Me" />
        <Button title="ddasd" />
        <Button />

        <button onClick={increaseCount}>increase counter</button>

      </main>
      <Footer />
    </div >
  );
}

