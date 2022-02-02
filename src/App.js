import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Farmers from "./pages/Farmers";
import Admin from "./pages/Admin";
import Orders from "./pages/Orders";

function App() {
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
