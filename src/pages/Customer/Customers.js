import React,{useState} from "react";
import ProductCard from "./ProductCard";
import '../Customer/Customer.css'

function Customers() {
  const [Type, setType] = useState("fruits");
  function handleClick(e){
    setType(e.target.value)
  }
  return (
    <div className="customers">
      <h1 style={{textAlign:"center"}}>Customers</h1>
      <button onClick={(e)=>handleClick(e)} value="fruits" name="fruits">Fruits</button>
      <button onClick={(e)=>handleClick(e)} value="vegetable" name="vegetable">Vegetables</button>
      <div className="customer"> 
          <ProductCard Type={Type}/>
      </div>
    </div>
  );
}

export default Customers;
