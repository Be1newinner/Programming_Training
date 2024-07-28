import { useContext } from "react";
import { Link } from "react-router-dom";
import { CounterContextConsumer } from "../../services/CounterContext/CounterContext";

export default function HomePage() {
  const { counter } = useContext(CounterContextConsumer);

  return (
    <div>
      {counter}
      <br />
      <br />
      <Link to="/second"> Second Page with Link </Link>
    </div>
  );
}
