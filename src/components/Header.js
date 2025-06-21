// components/Header.jsx
import { useState } from "react";
import Logo from "../assets/Logo.svg";
import Hamburger from "../assets/hamburger.svg";
import "../styles/App.css"; // Make sure your styles are loaded
import { Link, useNavigate, useLocation } from "react-router-dom";

/**
 * Header component renders the top navigation bar of the application.
 * It includes the logo and a hamburger menu for mobile view.
 *
 * Features:
 * - Navigation to the home page by clicking the logo.
 * - Hamburger menu that toggles the navigation menu in mobile view.
 * - Smooth scrolling to 'About' and 'Menu' sections when their respective
 *   links are clicked.
 *
 * State Management:
 * - `isMenuOpen`: Boolean state to toggle the mobile menu.
 *
 * Hooks:
 * - `useNavigate`: Hook from react-router-dom for programmatic navigation.
 * - `useLocation`: Hook from react-router-dom to access the current URL path.
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToHome = () => {
    navigate("/");
  };

  const handleAboutClick = (e) => {
    e.preventDefault();

    // Close mobile menu if open
    setIsMenuOpen(false);

    // If we're already on the home page, just scroll to the about section
    if (location.pathname === "/") {
      scrollToAbout();
    } else {
      // Navigate to home page first, then scroll to about
      navigate("/");
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        scrollToAbout();
      }, 100);
    }
  };

  const handleMenuClick = (e) => {
    e.preventDefault();

    // Close mobile menu if open
    setIsMenuOpen(false);

    // If we're already on the home page, just scroll to the menu section
    if (location.pathname === "/") {
      scrollToMenu();
    } else {
      // Navigate to home page first, then scroll to about
      navigate("/");
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        scrollToMenu();
      }, 100);
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const scrollToMenu = () => {
    const aboutSection = document.getElementById("menu");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <a href="#about" onClick={handleAboutClick}>
                About
              </a>
            </li>
            <li>
              <a href="#menu" onClick={handleMenuClick}>
                Menu
              </a>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
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
