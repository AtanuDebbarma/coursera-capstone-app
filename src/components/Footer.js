import Logo from "../assets/Logo.svg";

/**
 * Footer component renders the bottom navigation bar of the application.
 *
 * Features:
 * - Displays the restaurant's logo.
 * - Provides a list of links to the main sections of the website.
 * - Includes a copyright notice.
 *
 * @return {React.JSX.Element} A JSX element representing the footer.
 */
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={Logo} alt="Little Lemon Logo" />
          </div>
          <div className="footer-section">
            <h4>Doormat Navigation</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#reservations">Reservations</a>
              </li>
              <li>
                <a href="#order">Order Online</a>
              </li>
              <li>
                <a href="#login">Login</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Address</p>
            <p>phone number</p>
            <p>email</p>
          </div>
          <div className="footer-section">
            <h4>Social Media Links</h4>
            <p>Address</p>
            <p>phone number</p>
            <p>email</p>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
