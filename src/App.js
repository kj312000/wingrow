import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Customers from "./pages/Customer/Customers";
import Farmers from "./pages/Farmers";
import Admin from "./pages/Admin";
import Orders from "./pages/Orders";
import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {
  AOS.init({duration : 3000})
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="content">
        <Switch>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/farmers" component={Farmers}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/orders" component={Orders}></Route>
        </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
