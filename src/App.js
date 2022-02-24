import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Farmers from "./pages/Farmers/Farmers";
import Admin from "./pages/Admin";
import Orders from "./pages/Orders";
import AOS from 'aos'
import 'aos/dist/aos.css';
import ProductsPage from "./pages/Customer/Products";
import CartPage from "./pages/Customer/Cart";
import GlobalState from "./context/GlobalState";


function App() {
  AOS.init({duration : 3000})
  return (
    <>
    <GlobalState>
      <BrowserRouter>
        <Navbar />
        <div className="content">
        <Switch>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/farmers" component={Farmers}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/orders" component={Orders}></Route>
          <Route path="/customers" component={ProductsPage} exact />
          <Route path="/cart" component={CartPage} exact />
        </Switch>
        </div>
      </BrowserRouter>
      </GlobalState>
    </>
  );
}

export default App;
