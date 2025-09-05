import { useContext, useActionState } from "react";
import { CartContext } from "../store/cartStore";
import Modal from "./common/Modal";
import Input from "./common/Input";
import Button from "./common/Button";
import { UserProgressContext } from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const { data, isLoading: isSending, error, sendRequest, clearData } = useHttp('http://localhost:3000/orders', requestConfig);

    async function checkoutAction(prevState, fd) {
        const customerData = Object.fromEntries(fd.entries());

        await sendRequest(JSON.stringify({
            order: {
                items: cartCtx.items,
                customer: customerData
            }
        }));
        userProgressCtx.hideCheckout();
        cartCtx.cart = [];
    };

    const [formState, formAction, pending] = useActionState(checkoutAction, null);


    function handleFinish() {
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
    }

    let actions = <>
        <Button textOnly type="button" onClick={userProgressCtx.hideCheckout}>Close</Button>
        <Button type="submit" onClick={handleFinish}>Submit Order</Button>
    </>

    if (isSending) {
        actions = <span>Sending Order data...</span>
    }

    if (data && !error) {
        return <Modal open={userProgressCtx.progress === 'checkout'} className="checkout" onClose={userProgressCtx.hideCheckout}>
            <h2>Success!</h2>
            <p>Your order has been successfully submitted!</p>
            <p className="modal-actions">
                <Button onClick={userProgressCtx.hideCheckout}>Close</Button>
            </p>
        </Modal>
    }

    return (
        <Modal open={userProgressCtx.progress === 'checkout'} className="checkout" onClose={userProgressCtx.hideCheckout}>
            <form action={formAction} disabled={pending}>
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
                    {actions}
                </p>
            </form>
        </Modal>
    )
}