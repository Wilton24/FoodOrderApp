import { createContext, useState } from "react";

export const CartContext = createContext({
    cartItem: [],
});

export default function CartContextProvider({ children }) {
    const [cartItem, setCartItem] = useState([]);

    const context = {
        cartItem,
        setCartItem,
    };

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    );
}
