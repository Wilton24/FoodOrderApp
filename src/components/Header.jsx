import { useContext } from "react";
import { CartContext } from '../store/cartStore';
import logo from "../../public/logo.jpg";
import Button from "./common/Button";

export default function Header() {
    const { cart } = useContext(CartContext);

    const cartLength = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0)

    return (
        <header id="main-header">
            <div className="left-header" id="title">
                <img src={logo} alt="Food Logo" />
                <h1>Logo</h1>
            </div>
            <div className="right-header">
                <Button textOnly>cart({cart.length})</Button>
            </div>
        </header>
    );
}
