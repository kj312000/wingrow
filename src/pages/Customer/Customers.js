import React,{useState} from "react";
import ProductCard from "./ProductCard";
import '../Customer/Customer.css'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";



function Customers() {
  const [Type, setType] = useState("fruits");
  const [itemCount, setItemCount] = useState(0);
  function handleClick(e){
    setType(e.target.value)
  }
  return (
    <div className="customers">
      <h1 style={{textAlign:"center"}}>Customers</h1>
      <div className="nav_customers">
        <button onClick={(e)=>handleClick(e)} value="fruits" name="fruits">Fruits</button>
        <button onClick={(e)=>handleClick(e)} value="vegetable" name="vegetable">Vegetables</button>
        <div className="product_cart">
        <Badge color="secondary" badgeContent={itemCount}>
          <Link to='./cart'>
            <ShoppingCartIcon  />{" "}
          </Link>
        </Badge>
        </div>
        </div>
      <div className="customer"> 
          <ProductCard Type={Type} itemCount={itemCount} setItemCount={setItemCount}/>
      </div>
    </div>
  );
}

export default Customers;
