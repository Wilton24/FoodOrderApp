import Modal from "./common/Modal";
import { useContext } from "react";
import { currencyFormatter } from "../utils/formatter";
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


    return (
        <Modal open={userProgressCtx.progress === 'cart'} className="cart">
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
            <p className="cart-total">Total: {currencyFormatter.format(cartCtx.cart.reduce((total, item) => total + item.price * item.quantity, 0))}</p>
            <p className="modal-actions">
                <Button onClick={handleCloseCart}>Checkout</Button>
                <Button onClick={handleCloseCart}>Remove</Button>
            </p>
        </Modal>
    )
}