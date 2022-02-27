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
import Booking from "./pages/Farmers/Booking";
import StallDetails from "./pages/Farmers/StallDetails";



function App() {
  AOS.init({duration : 3000})
  return (
    <>
    <GlobalState>
      <BrowserRouter>
        <Navbar />
        <div className="content">
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/farmers" component={Farmers} exact />
          <Route path="/admin" component={Admin} exact />
          <Route path="/orders" component={Orders} exact />
          <Route path="/customers" component={ProductsPage} exact />
          <Route path="/cart" component={CartPage} exact />
          <Route path="/bookings" component={Booking}/>
          <Route path="/bookingdetails/:id" component={StallDetails} exact />
        </Switch>
        </div>
      </BrowserRouter>
      </GlobalState>
    </>
  );
}

export default App;
