import axios from "axios";

export async function getAllMenu() {
    try {
        const url = "http://localhost:3000/meals";
        const response = await axios.get(url);
        console.log(response.data);

        return response.data;
    } catch (err) {
        console.log(err);

    }

}