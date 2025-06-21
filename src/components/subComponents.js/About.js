import Restaurant from "../../assets/restaurant.jpg";
import ChefCooking from "../../assets/restaurant chef B.jpg";

/**
 * The About component renders the About section of the page.
 *
 * The About component includes a hero image, a heading, a paragraph of text,
 * and an image of a chef cooking.
 *
 * @return {ReactElement} A JSX element representing the About section.
 */
export const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant nestled in
            the heart of Chicago. Founded by two brothers with a love for their
            heritage, we bring traditional recipes to life with a modern twist.
            From our kitchen to your table, every dish is crafted with fresh
            ingredients, bold flavors, and a touch of home. Discover a taste of
            the Mediterranean—right here in the city.
          </p>
        </div>
        <div className="about-images">
          <img
            src={Restaurant}
            alt="Restaurant interior"
            className="about-img-1"
          />
          <img src={ChefCooking} alt="Chef cooking" className="about-img-2" />
        </div>
      </div>
    </section>
  );
};
