import { Link } from "react-router-dom";
import heroImg from "../../assets/restauranfood.jpg";

/**
 * HeroSection component renders the hero section of the landing page.
 *
 * Features:
 * - Displays the restaurant's name and location.
 * - Provides a brief description of the restaurant's focus.
 * - Includes a call-to-action button that navigates to the booking page.
 * - Displays a hero image representing the restaurant.
 *
 * @return {React.JSX.Element} A JSX element representing the hero section.
 */
export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link className="cta-button" to={"/booking"}>
            Reserve a Table
          </Link>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Restaurant hero" />
        </div>
      </div>
    </section>
  );
};
