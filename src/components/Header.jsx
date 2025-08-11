import { useContext } from "react";
import { CartContext } from '../store/cartStore'; // named import
import logo from "../../public/logo.jpg";
import Button from "./common/Button";

export default function Header() {
    const { cartItem } = useContext(CartContext);

    return (
        <header id="main-header">
            <div className="left-header" id="title">
                <img src={logo} alt="Food Logo" />
                <h1>Logo</h1>
            </div>
            <div className="right-header">
                <Button textOnly>cart({cartItem.length})</Button>
            </div>
        </header>
    );
}
