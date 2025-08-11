import Header from "./components/Header";
import CartContextProvider from "./store/cartStore"
import Menu from "./components/Menu";
import { useEffect, useState } from "react";
import { getAllMenu } from './services/api'

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function fetchMenu() {
      const allMeals = await getAllMenu();
      setMenu(allMeals);
    }
    fetchMenu();
  }, []);


  return (
    <>
      <CartContextProvider>
        <Header />
        <Menu
          menu={menu} />
      </CartContextProvider>
    </>
  );
}

export default App;
