import { createContext, useState } from "react";


export const UserProgressContext = createContext({
    progress: 0,
    showCart: () => { },
    hideCart: () => { },
    showCheckout: () => { },
    hideCheckout: () => { }
});


export default function UserProgressContextProvider({ children }) {
    const [userProgress, setUserProgress] = useState(0);

    function showCart() {
        setUserProgress('cart');
    }

    function hideCart() {
        setUserProgress('');
    }

    function showCheckout() {
        setUserProgress('checkout');
    }

    function hideCheckout() {
        setUserProgress('');
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }

    return (
        <UserProgressContext.Provider value={userProgressCtx}>
            {children}
        </UserProgressContext.Provider>
    );
}

