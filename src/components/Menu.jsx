import Meal from "./Meal";


export default function Menu({ menu }) {
    return (
        <ul id="meals">
            {menu && menu.map((meal, index) => (
                <Meal key={index} meal={meal} />
            ))}
        </ul>
    )
}