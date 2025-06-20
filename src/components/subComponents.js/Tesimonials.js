import Emily from "../../assets/testimonials/Emily.png";
import John from "../../assets/testimonials/John.png";
import Jack from "../../assets/testimonials/Jack.png";
import Mary from "../../assets/testimonials/Mary.png";

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
