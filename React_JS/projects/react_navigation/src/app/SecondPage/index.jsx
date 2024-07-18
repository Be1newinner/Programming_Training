import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function SeondPage() {
  let { userId } = useParams();
  // const navigate = useNavigate();

  const navigate = useNavigate();

  function goToDirectory() {
    navigate("/", {
      state: {
        name: "Vijay",
        age: 25,
      },
    });

    // navigate("/");
  }

  console.log({ userId });

  return (
    <div>
      <h1>Second Page </h1>
      <p>{userId}</p>

      <a href="/"> Home Page with a </a>
      <br />
      <Link to="/" param> Home Page with Link </Link>

      <button onClick={() => navigate("/")}>go to </button>
      <button onClick={() => navigate("/", { replace: true })}>
        go to using replace
      </button>

      <button onClick={goToDirectory}>go to with some data</button>
    </div>
  );
}
