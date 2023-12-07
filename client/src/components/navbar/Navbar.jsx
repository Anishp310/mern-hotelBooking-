import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Register from "../../pages/register/Register";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">anishbooking</span>
        </Link>

        {!user ? (
          user.username
        ) : (
          <div className="navItems">
            <button className="navButton">
              <Link to={"/register"}>Register</Link>
            </button>
            <button className="navButton">
              <Link to={"/login"}>Login</Link>
            </button>
            <button className="navButton" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
