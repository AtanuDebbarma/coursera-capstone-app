// components/Header.jsx
import { useState } from "react";
import Logo from "../assets/Logo.svg";
import Hamburger from "../assets/hamburger.svg";
import "../App.css"; // Make sure your styles are loaded

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div className="header-container">
                <img src={Logo} alt="Little Lemon Logo" className="logo" />
                <img
                    src={Hamburger}
                    alt="Menu"
                    className="hamburger-icon"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                />

                <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
