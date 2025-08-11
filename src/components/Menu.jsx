import taco from "../../backend/public/images/beef-tacos.jpg";
import Meal from "./Meal";

let content = <h1>Meals List</h1>

export default function Menu({ menu }) {
    return (

        // <ul id="meals">
        //     <li className="meal-item">
        //         <article>
        //             <img src="backend\public\images\caesar-salad.jpg" alt="Delicious Pasta" />
        //             <h3>Delicious Pasta</h3>
        //             <p className="meal-item-description">
        //                 Freshly made pasta with tomato sauce and parmesan cheese.
        //             </p>
        //             <p className="meal-item-price">$12.99</p>
        // <div className="meal-item-actions">
        //     <button>Add to Cart</button>
        // </div>
        //         </article>
        //     </li>
        // </ul>

        <ul id="meals">
            {menu && menu.map((data, index) => {
                return <li key={index} className="meal-item">
                    <article>
                        <img src={`backend/public/${data.image}`} alt="" />
                        <h3>{data.name}</h3>
                        <p className="meal-item-description">
                            {data.description}
                        </p>
                        <p className="meal-item-price">{data.price}</p>
                        <div className="meal-item-actions">
                            <button>Add to Cart</button>
                        </div>
                    </article>
                </li>
            })}
        </ul>
    )
}