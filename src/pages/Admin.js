import React from "react";
import Login from '../components/Login'

function Admin() {
  const heading = "Admin Panel"
  return (
    <div>
      <Login heading={heading}/>
    </div>
  );
}

export default Admin;
