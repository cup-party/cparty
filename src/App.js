import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Cart from "./layouts/Cart/Cart";
import Landing from './layouts/Landing/Landing';
import Order from './layouts/Order/Order';
import Restro from "./layouts/Restro/Restro";
import CartContextProvider from './contexts/CartContext/CartContext';
function App() {
  return (
    <CartContextProvider>
      <Router>
        <div className="App">
          {/* <header className="App-header"> */}
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/restro" component={Restro} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/order" component={Order} />
          </Switch>
          {/* </header> */}
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;
