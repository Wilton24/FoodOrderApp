import { currencyFormatter } from "../utils/formatter";
import Button from "./common/Button";
import { CartContext } from "../store/cartStore";
import { useContext } from "react";

export default function Meal({ meal }) {

    const { addItem } = useContext(CartContext);

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
                    <Button onClick={() => addItem(meal)}>Add to Cart</Button>
                </div>
            </article>
        </li>
    )
}