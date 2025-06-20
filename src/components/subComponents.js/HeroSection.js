import { Link } from "react-router-dom"
import heroImg from "../../assets/restauranfood.jpg"

export const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link className="cta-button" to={"/booking"}>Reserve a Table</Link>
                </div>
                <div className="hero-image">
                    <img src={heroImg} alt="Restaurant hero" />
                </div>
            </div>
        </section>
    )
}


