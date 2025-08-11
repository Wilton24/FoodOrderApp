import { currencyFormatter } from "../utils/formatter";
import Button from "./common/Button";

export default function Meal({ meal }) {
    return (
        <li className="meal-item">
            <article>
                <img src={`backend/public/${meal.image}`} alt="Picture of a meal" />
                <h3>{meal.name}</h3>
                <p className="meal-item-description">
                    {meal.description}
                </p>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <div className="meal-item-actions">
                    <Button>Add to Cart</Button>
                </div>
            </article>
        </li>
    )
}