import Modal from "./common/Modal";
import { useContext } from "react";
import { currencyFormatter } from "../utils/formatter";
import Button from "./common/Button";
import { CartContext } from '../store/cartStore';
import { UserProgressContext } from "../store/UserProgressContext";

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }


    return (
        <Modal open={userProgressCtx.progress === 'cart'} className="cart">
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.cart.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <p className="cart-total">Total: ${currencyFormatter.format(cartCtx.cartItem.reduce((total, item) => total + item.price, 0).toFixed(2))} </p>
            <p className="modal-actions">
                <Button onClick={handleCloseCart}>Checkout</Button>
                <Button onClick={handleCloseCart}>Remove</Button>
            </p>
        </Modal>
    )
}