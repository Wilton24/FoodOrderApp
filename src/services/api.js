import axios from "axios";

export async function getAllMenu() {
    try {
        const url = "http://localhost:3000/meals";
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.log(err);
    };

}


export async function createOrder(orderData) {
    try {
        const url = "http://localhost:3000/orders";
        const response = await axios.post(url, { order: orderData });
        console.log(response.data);

        return response.data;
    } catch (err) {
        console.error(err);
    }
}
