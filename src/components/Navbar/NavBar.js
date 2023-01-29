import { HashLink as Link } from "react-router-hash-link";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-container section" id="navbar">
      <div className="logo">AIrrigate</div>
      <div className="nav-items">
        <Link to="/" className="nav-items">
          Home
        </Link>
        /
        <Link to="/crop" className="nav-items">
          Crop
        </Link>
        /
        <Link to="/fertilizer" className="nav-items">
          Fertilizer
        </Link>{" "}
        /
        <Link to="/yield" className="nav-items">
          Yield
        </Link>{" "}
        /
        <Link to="/disease" className="nav-items">
          Disease
        </Link>
      </div>
      <Link to="#footer" className="contact-button">
        Contact us
      </Link>
    </div>
  );
};
export default NavBar;
