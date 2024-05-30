import { Link } from "react-router-dom";

export default function SeondPage() {
  return (
    <div>
      <h1>Second Page</h1>
      <a href="/"> Home Page </a>
      <br />
      <Link to="/"> Home Page </Link>
    </div>
  );
}
