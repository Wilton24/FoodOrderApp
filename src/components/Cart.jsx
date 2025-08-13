import Modal from "./common/Modal";
import { useContext } from "react";
import Button from "./common/Button";
import { CartContext } from '../store/cartStore';
import { UserProgressContext } from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    const cartLength = cartCtx.cart.length;

    return (
        <Modal
            className="cart"
            open={userProgressCtx.progress === 'cart'}
            onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.cart.map(item => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        onIncrease={() => cartCtx.addItem(item)}
                        onDecrease={() => cartCtx.removeItem(item.id)}
                    />
                ))}
            </ul>
            <p className="cart-total">Total: {cartCtx.cartTotal}</p>
            <p className="modal-actions">
                <Button onClick={handleCloseCart}>Close</Button>
                {cartLength > 0 && <Button onClick={userProgressCtx.showCheckout}>Go to Checkout</Button>}
            </p>
        </Modal>
    )
}