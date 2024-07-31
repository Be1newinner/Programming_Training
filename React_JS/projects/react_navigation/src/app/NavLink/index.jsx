import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

export default function SeondPage() {
  return (
    <div>
      <h1>Nav Link Page</h1>

      <div>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            console.log("/", isActive, isPending)
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/second"
          className={({ isActive, isPending }) =>
            console.log("/second", isActive, isPending)
          }
        >
          second Page
        </NavLink>
        <NavLink
          to="/navlink"
          className={({ isActive, isPending }) =>
            console.log("/navlink", isActive, isPending)
          }
          second
        >
          Nav Page
        </NavLink>
      </div>

      <div>
        <Link to="/"> Home Page </Link>
      </div>
    </div>
  );
}
