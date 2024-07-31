import { useContext } from "react";
import { Link } from "react-router-dom";
import { CounterContextConsumer } from "../../services/CounterContext/CounterContext";

export default function SecondPage() {
  const { counter, setCounter } = useContext(CounterContextConsumer);

  return (
    <div>
      {counter}
      <br />
      <button onClick={() => setCounter((prev) => prev + 1)}>increase</button>
      <br />
      <Link to="/">Home Page with Link</Link>
    </div>
  );
}
