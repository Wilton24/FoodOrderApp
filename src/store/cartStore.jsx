import { createContext, useState, useEffect, useReducer } from "react";
import { getAllMenu } from "../services/api";
import { currencyFormatter } from "../utils/formatter";

export const CartContext = createContext({
    cart: [],
    cartItem: [],
    menu: [],
    addItem: () => { },
    removeItem: () => { },
    cartTotal: 0
});

const ACTION_TYPE = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM'
}

function cartReducer(state, action) {
    if (action.type === ACTION_TYPE.ADD_ITEM) {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }
        return { ...state, items: updatedItems }
    };

    if (action.type === ACTION_TYPE.REMOVE_ITEM) {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];

        const updatedItems = [...state.items];
        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity - 1 }
            updatedItems[existingCartItemIndex] = updatedItem
        }

        return { ...state, items: updatedItems }
    }

}

export default function CartContextProvider({ children }) {
    const [cartItem, setCartItem] = useState([]);
    const [menu, setMenu] = useState([]);
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] })

    useEffect(() => {
        async function fetchMenu() {
            const allMeals = await getAllMenu();
            setMenu(allMeals);
        }
        fetchMenu();
    }, []);

    function addItem(item) {
        dispatchCartAction({ type: ACTION_TYPE.ADD_ITEM, item });
    };

    function removeItem(id) {
        dispatchCartAction({ type: ACTION_TYPE.REMOVE_ITEM, id });
    }
    const cartTotal = currencyFormatter.format(cart.items.reduce((total, item) => total + item.price * item.quantity, 0));



    const context = {
        cart: cart.items,
        addItem,
        removeItem,
        cartItem,
        menu,
        cartTotal
    };

    return (
        <CartContext value={context}>
            {children}
        </CartContext>
    );
}
