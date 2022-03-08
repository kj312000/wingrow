import React from 'react'
import Otp from "../../components/Otp";
import Feed from "../Farmers/Feed";
import Login from "../../components/Login";
import Register from "../../components/Register";
import Booking from "../Farmers/Booking";
import StallDetails from "../Farmers/StallDetails";
import { Route, Routes } from "react-router-dom";

function Farmer() {
  return (
    <div>
        <Routes>
        <Route path="/bookings" element={<Booking/>}/>
        <Route path="/bookings/bookingdetails/:id" element={<StallDetails/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/feed" element={<Feed/>}/>
        </Routes>
    </div>
  )
}

export default Farmer