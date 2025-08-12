import Header from "./components/Header";
import CartContextProvider from "./store/cartStore"
import Menu from "./components/Menu";
import UserProgressContext from "./store/UserProgressContext";
import Cart from "./components/Cart";

function App() {

  return (
    <>
      <UserProgressContext>
        <CartContextProvider>
          <Header />
          <Menu />
          <Cart />
        </CartContextProvider>
      </UserProgressContext>
    </>
  );
}

export default App;
