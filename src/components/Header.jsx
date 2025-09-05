import { useContext } from "react";
import { CartContext } from '../store/cartStore';
import logo from "../../public/logo.jpg";
import Button from "./common/Button";
import { UserProgressContext } from "../store/UserProgressContext";


export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);


    function handleShowCart() {
        userProgressCtx.showCart();
    };
    function handleHideCart() {
        userProgressCtx.hideCart();
    };
    function handleShowCheckout() {
        userProgressCtx.showCheckout();
    };
    function handleHideCheckout() {
        userProgressCtx.hideCheckout();
    };

    return (
        <header id="main-header">
            <div className="left-header" id="title">
                <img src={logo} alt="Food Logo" />
                <h1>Logo</h1>
            </div>
            <div className="right-header">
                <Button
                    onClick={handleShowCart}
                    textOnly>CART({cartCtx.cart.length})
                </Button>
            </div>
        </header>
    );
}
