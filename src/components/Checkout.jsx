import { CartContext } from "../store/cartStore";
import Modal from "./common/Modal";
import { useContext } from "react";
import Input from "./common/Input";
import Button from "./common/Button";
import { UserProgressContext } from "../store/UserProgressContext";

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);


    function handleSubmit(e) {
        e.preventDefault();
        e.target.reset();
    }

    return (
        <Modal open={userProgressCtx.progress === 'checkout'} className="checkout" onClose={userProgressCtx.hideCheckout}>
            <form action="" onSubmit={handleSubmit}>
                <h2 className="checkout">Checkout</h2>
                <p>Total amount: {cartCtx.cartTotal}</p>
                <Input label="Full name" type="text" id="full-name" />
                <Input label="Email" type="email" id="email" />
                <Input label="Address" type="text" id="address" />
                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code" />
                    <Input label="City" type="text" id="city" />
                </div>
                <p className="modal-actions">
                    <Button textOnly type="button" onClick={userProgressCtx.hideCheckout}>Close</Button>
                    <Button textOnly type="button" onClick={cartCtx.onClose}>Submit Order</Button>
                </p>
            </form>
        </Modal>
    )
}