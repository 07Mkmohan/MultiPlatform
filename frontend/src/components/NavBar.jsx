import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>MultiPlatform</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/features">Features</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/register">Get Started</Link>
      </div>
    </nav>
  );
}

export default Navbar;
