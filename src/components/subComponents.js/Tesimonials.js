import Emily from "../../assets/testimonials/Emily.png";
import John from "../../assets/testimonials/John.png";
import Jack from "../../assets/testimonials/Jack.png";
import Mary from "../../assets/testimonials/Mary.png";
/**
 * The testimonials array contains a list of customer testimonials.
 * Each testimonial includes the customer's name, rating, message, and an image.
 * This data is used to render the Testimonials component, which displays
 * customer feedback in a structured format.
 */
const testimonials = [
  {
    name: "Emily",
    rating: "4.8",
    message: `"Absolutely loved the flavors! Every dish was fresh, vibrant, and beautifully presented."`,
    image: Emily,
  },
  {
    name: "John",
    rating: "4.7",
    message: `"Warm atmosphere, attentive staff, and food that hits the spot every single time."`,
    image: John,
  },
  {
    name: "Maria",
    rating: "4.8",
    message: `"Amazing experience — quick service, rich tastes, and portions that left me smiling."`,
    image: Mary,
  },
  {
    name: "Jack",
    rating: "5.0",
    message: `"Authentic and delicious! You can tell care goes into every bite. Definitely coming back."`,
    image: Jack,
  },
];

/**
 * The Testimonials component renders a section with customer testimonials.
 *
 * The component takes no props and returns a JSX element with the following structure:
 * - A section element with a class of "testimonials".
 * - An h2 element with the text "Testimonials".
 * - A div element with a class of "testimonials-grid".
 * - An array of article elements, each with a class of "testimonial-card".
 *   - A div element with a class of "rating" and the customer's rating.
 *   - An img element with the customer's photo, an alt tag with the text
 *     "Customer - [customer name]", and a class of "customer-photo".
 *   - An h4 element with the customer's name.
 *   - A p element with the customer's testimonial message.
 */
export const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <article key={index} className="testimonial-card">
            <div className="rating">{testimonial.rating}</div>
            <img
              src={testimonial.image}
              alt={`Customer - ${testimonial.name}`}
              className="customer-photo"
            />
            <h4>{testimonial.name}</h4>
            <p>{testimonial.message}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
