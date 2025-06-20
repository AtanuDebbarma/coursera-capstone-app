import GreekSalad from "../../assets/food/greek-salad.jpg";
import Bruchetta from "../../assets/food/bruchetta.svg";
import LemonDessert from "../../assets/food/lemon-dessert.jpg";

const specials = [
    {
        name: "Greek salad",
        price: "$12.99",
        description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        image: GreekSalad,
        alt: "Greek Salad",
    },
    {
        name: "Bruchetta",
        price: "$5.99",
        description:
            "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: Bruchetta,
        alt: "Bruchetta",
    },
    {
        name: "Lemon Dessert",
        price: "$5.00",
        description:
            "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image: LemonDessert,
        alt: "Lemon Dessert",
    },
];

export const SpecialsSection = () => {
    return (
        <section className="specials">
            <div className="specials-header">
                <h2>Specials</h2>
                <button className="online-menu-btn">Online Menu</button>
            </div>
            <div className="specials-grid">
                {specials.map((dish, index) => (
                    <article key={index} className="dish-card">
                        <img src={dish.image} alt={dish.alt} />
                        <div className="card-content">
                            <div className="card-header">
                                <h3>{dish.name}</h3>
                                <span className="price">{dish.price}</span>
                            </div>
                            <p>{dish.description}</p>
                            <button className="delivery-btn">Order a delivery 🛵</button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};
