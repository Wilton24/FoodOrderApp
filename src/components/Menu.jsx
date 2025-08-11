import Meal from "./Meal";
import { useContext } from "react";
import { CartContext } from '../store/cartStore';


export default function Menu() {
    const { menu } = useContext(CartContext)
    return (
        <ul id="meals">
            {menu && menu.map((meal, index) => (
                <Meal key={index} meal={meal} />
            ))}
        </ul>
    )
}