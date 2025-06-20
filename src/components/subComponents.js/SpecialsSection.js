import GreekSalad from "../../assets/food/greek-salad.jpg";
import Bruchetta from "../../assets/food/bruchetta.svg";
import LemonDessert from "../../assets/food/lemon-dessert.jpg";

export const SpecialsSection = () => {
    return (
        <section className="specials">
            <div className="specials-header">
                <h2>Specials</h2>
                <button className="online-menu-btn">Online Menu</button>
            </div>
            <div className="specials-grid">
                <article className="dish-card">
                    <img src={GreekSalad} alt="Greek Salad" />
                    <div className="card-content">
                        <div className="card-header">
                            <h3>Greek salad</h3>
                            <span className="price">$12.99</span>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <button className="delivery-btn">Order a delivery 🛵</button>
                    </div>
                </article>

                <article className="dish-card">
                    <img src={Bruchetta} alt="Bruchetta" />
                    <div className="card-content">
                        <div className="card-header">
                            <h3>Bruchetta</h3>
                            <span className="price">$5.99</span>
                        </div>
                        <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <button className="delivery-btn">Order a delivery 🛵</button>
                    </div>
                </article>

                <article className="dish-card">
                    <img src={LemonDessert} alt="Lemon Dessert" />
                    <div className="card-content">
                        <div className="card-header">
                            <h3>Lemon Dessert</h3>
                            <span className="price">$5.00</span>
                        </div>
                        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <button className="delivery-btn">Order a delivery 🛵</button>
                    </div>
                </article>
            </div>
        </section>
    )
}


