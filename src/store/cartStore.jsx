import { createContext, useState, useEffect, useReducer } from "react";
import { getAllMenu } from "../services/api"

export const CartContext = createContext({
    cartItem: [],
    menu: [],
    addItem: () => { },
    removeItem: () => { }
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
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

        const updatedItems = [...state.items];
        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItem, 1);
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
        dispatchCartAction({ type: ACTION_TYPE.REMOVE_ITEM });
    }



    const context = {
        cart: cart.items,
        cartItem,
        setCartItem,
        menu
    };

    return (
        <CartContext value={context}>
            {children}
        </CartContext>
    );
}
