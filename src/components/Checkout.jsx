import { CartContext } from "../store/cartStore";
import Modal from "./common/Modal";
import { useContext } from "react";
import Input from "./common/Input";
import Button from "./common/Button";
import { UserProgressContext } from "../store/UserProgressContext";
import { createOrder } from "../services/api";
import useHttp from "../hooks/useHttp";

const requestConfig = {
    method: 'POST',
    body: JSON.stringify(orderData)
};

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const { data, isLoading, error, sendRequest } = useHttp('http://localhost:3000/orders', requestConfig, {});

    async function handleSubmit(e) {
        e.preventDefault();
        const fd = new FormData(e.target)
        const formData = Object.fromEntries(fd.entries());

        const orderData = {
            items: cartCtx.cart.map(item => ({
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                price: item.price
            })),
            customer: { ...formData },
        };

        userProgressCtx.hideCheckout();
        // cartCtx.dispatchCartAction({ type: 'REMOVE_ITEM', id: null }); // Clear cart after order submission
        cartCtx.cart = [];
    }

    return (
        <Modal open={userProgressCtx.progress === 'checkout'} className="checkout" onClose={userProgressCtx.hideCheckout}>
            <form action="" onSubmit={handleSubmit}>
                <h2 className="checkout">Checkout</h2>
                <p>Total amount: {cartCtx.cartTotal}</p>
                <Input label="Full name" type="text" id="name" />
                <Input label="Email" type="email" id="email" />
                <Input label="Street" type="text" id="street" />
                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code" />
                    <Input label="City" type="text" id="city" />
                </div>
                <p className="modal-actions">
                    <Button textOnly type="button" onClick={userProgressCtx.hideCheckout}>Close</Button>
                    {/* <Button textOnly type="button" onClick={cartCtx.onClose}>Submit Order</Button> */}
                    <Button type="submit" onClick={cartCtx.onClose}>Submit Order</Button>
                </p>
            </form>
        </Modal>
    )
}