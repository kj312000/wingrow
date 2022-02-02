import React,{useState} from "react";
import Register from '../components/Register'
import Login from '../components/Login'
import Feed from '../components/Feed'

function Farmers() {
  const [toggle, settoggle] = useState(true);
  const [feed, setFeed] = useState(true);
  const handleClick = () =>{
    settoggle(!toggle)
  }
  const handleFeed = () =>{
    setFeed(!Feed)
  }
  return (
    <div>
        {feed?<div>{toggle?<Login handleClick={handleClick} handleFeed={handleFeed}/>:<Register handleClick={handleClick}/>}</div>:<Feed/>}
    </div>
    
  );
}

export default Farmers;
