import Meal from "./Meal";
import { useContext } from "react";
import { CartContext } from '../store/cartStore';
import useHttp from "../hooks/useHttp";



export default function Menu() {
    const { data, isLoading, error } = useHttp('http://localhost:3000/meals', { method: 'GET' }, []);

    return (
        <ul id="meals">
            {data && data.map((meal, index) => (
                <Meal key={index} meal={meal} />
            ))}
            <h1>hello</h1>
        </ul>
    )
}