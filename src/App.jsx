import Header from "./components/Header";
import CartContextProvider from "./store/cartStore"
import Menu from "./components/Menu";

function App() {

  return (
    <>
      <CartContextProvider>
        <Header />
        <Menu />
      </CartContextProvider>
    </>
  );
}

export default App;
