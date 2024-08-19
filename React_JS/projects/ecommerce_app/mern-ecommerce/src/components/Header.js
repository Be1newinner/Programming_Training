import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">E-Commerce</Link>
        </h1>
        <nav>
          <Link to="/shop" className="mr-4">
            Shop
          </Link>
          {userInfo ? (
            <>
              <Link to="/dashboard" className="mr-4">
                Dashboard
              </Link>
              <Link to="/profile" className="mr-4">
                Profile
              </Link>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
