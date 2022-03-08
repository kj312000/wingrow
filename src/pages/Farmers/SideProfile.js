import React from 'react'
import { Link } from 'react-router-dom'

function SideProfile() {
    return (
        <>
        <div style={{height:350, width:'18vw', backgroundColor: 'white', borderRadius: 10, margin: 10}}>
            <h1>Want to book your slot?</h1>
            <Link to="../bookings">Register below!</Link>
        </div>
        </>
    )
}

export default SideProfile
