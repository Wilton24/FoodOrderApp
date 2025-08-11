export default function Meal({ meal }) {
    return (
        <li className="meal-item">
            <article>
                <img src={`backend/public/${meal.image}`} alt="Picture of a meal" />
                <h3>{meal.name}</h3>
                <p className="meal-item-description">
                    {meal.description}
                </p>
                <p className="meal-item-price">{meal.price}</p>
                <div className="meal-item-actions">
                    <button>Add to Cart</button>
                </div>
            </article>
        </li>
    )
}