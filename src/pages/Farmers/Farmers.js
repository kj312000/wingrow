import React,{useState} from "react";
import Register from '../../components/Register'
import Login from '../../components/Login'
import Feed from '../../pages/Farmers/Feed'
// import Otp from '../../components/Otp'

function Farmers() {
  const [toggle, settoggle] = useState(true);
  const [feed, setFeed] = useState(true);
  const heading = "Login"
  const handleFeed = () =>{
    setFeed(!Feed)
  }
  const handleClick=()=>{
    settoggle(!toggle)
  }
  return (
    <div>
        {feed?<div>
          {toggle?<Login heading={heading} handleClick={handleClick} handleFeed={handleFeed}/>:<Register/>}</div>:<Feed/>}
    </div>
    
  );
}

export default Farmers;
