import { Link } from "react-router";

export function Welcome() {
  return (
    <main className="">
      {/* <h1>
        <a href="/contact">Contact</a>
      </h1>

      <a href="/about">About</a> */}

      <h1>
        <Link to="/contact">Contact</Link>
      </h1>

      <h1>
        <Link to="/about">About</Link>
      </h1>
    </main>
  );
}
