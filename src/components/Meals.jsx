import taco from "../../backend/public/images/beef-tacos.jpg";

export default function Meals({ menu }) {
    return (
        <ul id="meals">
            <li className="meal-item">
                <article>
                    <img src={taco} alt="Delicious Pasta" />
                    <h3>Delicious Pasta</h3>
                    <p className="meal-item-description">
                        Freshly made pasta with tomato sauce and parmesan cheese.
                    </p>
                    <p className="meal-item-price">$12.99</p>
                    <div className="meal-item-actions">
                        <button>Add to Cart</button>
                    </div>
                </article>
            </li>
        </ul>
    )
}