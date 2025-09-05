import Meal from "./Meal";
import useHttp from "../hooks/useHttp";
import { useEffect, useState } from "react";


export default function Menu() {
    const { data, isLoading, error } = useHttp('http://localhost:3000/meals', { method: 'GET' });

    // const [data, setData] = useState([])

    // useEffect(() => {

    //     async function callData() {
    //         const response = await fetch("http://localhost:3000/meals")
    //         const data = await response.json();
    //         setData(data);
    //         console.log(data);
    //         console.log('called');

    //     };
    //     callData();
    // }, [])

    return (
        <ul id="meals">
            {data && data.map((meal, index) => (
                <Meal key={index} meal={meal} />
            ))}
            <h1>hello</h1>
        </ul>
    )
}