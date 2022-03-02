import React from "react";
import "./App.css";
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
import ProductDetails from "./pages/Customer/ProductDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  AOS.init({duration : 3000})
  return (
    <>
    <GlobalState>
      <BrowserRouter>
        <Navbar />
        <div className="content">
        <Routes>
          <Route path="/" exact element={<Dashboard/>}/>
          <Route path="/farmers" element={<Farmers/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/customers" element={<ProductsPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/farmers/bookings" element={<Booking/>}/>
          <Route path="/farmers/bookings/bookingdetails/:id" element={<StallDetails/>}/>
          <Route path="/customers/productdetails/:item" element={<ProductDetails/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </GlobalState>
    </>
  );
}

export default App;
