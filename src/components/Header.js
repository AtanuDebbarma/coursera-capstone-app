// components/Header.jsx
import { useState } from "react";
import Logo from "../assets/Logo.svg";
import Hamburger from "../assets/hamburger.svg";
import "../styles/App.css"; // Make sure your styles are loaded
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <header>
      <div className="header-container">
        <img
          src={Logo}
          alt="Little Lemon Logo"
          className="logo"
          onClick={navigateToHome}
        />
        <img
          src={Hamburger}
          alt="Menu"
          className="hamburger-icon"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />

        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <Link to="#reservations">Reservations</Link>
            </li>
            <li>
              <a href="#order">Order Online</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
