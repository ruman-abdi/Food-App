import { Fragment } from "react";
import ShopinCart from "./Components/Cart/ShopinCart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  
  return (
    <Fragment>
    <ShopinCart/>
<Header/>

<Meals/>
</Fragment>
      
    
  );
}

export default App;
