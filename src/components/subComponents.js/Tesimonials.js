import Emily from "../../assets/testimonials/Emily.png";
import John from "../../assets/testimonials/John.png";
import Jack from "../../assets/testimonials/Jack.png";
import Mary from "../../assets/testimonials/Mary.png";

export const Tesimonials = () => {
    return (
        <section className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonials-grid">
                <article className="testimonial-card">
                    <div className="rating">4.8</div>
                    <img src={Emily} alt="Customer" className="customer-photo" />
                    <h4>Emily</h4>
                    <p>"Absolutely loved the flavors! Every dish was fresh, vibrant, and beautifully presented."</p>
                </article>

                <article className="testimonial-card">
                    <div className="rating">4.7</div>
                    <img src={John} alt="Customer" className="customer-photo" />
                    <h4>John</h4>
                    <p>"Warm atmosphere, attentive staff, and food that hits the spot every single time."</p>
                </article>

                <article className="testimonial-card">
                    <div className="rating">4.5</div>
                    <img src={Mary} alt="Customer" className="customer-photo" />
                    <h4>Mary</h4>
                    <p>"Amazing experience — quick service, rich tastes, and portions that left me smiling."</p>
                </article>

                <article className="testimonial-card">
                    <div className="rating">5.0</div>
                    <img src={Jack} alt="Customer" className="customer-photo" />
                    <h4>Jack</h4>
                    <p>"Authentic and delicious! You can tell care goes into every bite. Definitely coming back."</p>
                </article>
            </div>
        </section>

    )
}


