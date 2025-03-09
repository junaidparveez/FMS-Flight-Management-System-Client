import { Link } from "react-router-dom";
import "../styles/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">✈️ Flight Management</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/flights">Flights</Link></li>
        <li><Link to="/booking">Bookings</Link></li>
        <li><Link to="/login" className="login-btn">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
