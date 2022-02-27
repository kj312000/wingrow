import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "../../context/shop-context";


function Booking() {
    const context = useContext(ShopContext)
    const {bookingStalls} = context
    console.log(bookingStalls)
  return (
    <div className="booking_main">
        <h2>Choose suitable stall</h2>
        <div className="bookings_container">
            {
                bookingStalls.map((e,index)=>{
                    return(
                        <>
                        <Link className="link_details" to={`./bookingdetails/${index+1}`}>
                        <div key={index} className="cities">
                            <div>City : {e.city}</div>
                            <div>{e.address}</div>
                            <div>
                                <p>{e.day}</p>
                                <p>{e.time}</p>
                            </div>
                        </div>
                        </Link>
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Booking