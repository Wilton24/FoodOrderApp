import Menu from "./components/Menus";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { useEffect, useState } from "react";
import { getAllMenu } from './services/api'

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const allMeals = getAllMenu();
    setMenu(allMeals);
  }, []);


  return (
    <>
      <Header />
      <Meals
        menu={menu} />
    </>
  );
}

export default App;
