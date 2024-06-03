import { Link, useLocation } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();

  console.log(location);

  return (
    <div>
      <h1>{location.state?.name || "Default"}</h1>
      <h1>{location.state?.age || "36"}</h1>
      <a href="/second"> Second Page with a </a>
      <br />
      <Link to="/second"> Second Page with Link </Link>
      <br />
      <Link to="/second" replace={true}>
        Second Page with replace
      </Link>
    </div>
  );
}
