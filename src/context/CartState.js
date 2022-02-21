import React,{useState} from "react";
import Context from "./Context";


const CartState = (props) =>{
    const [Data, setData] = useState([])
    return(
        <Context.Provider value={{Data,setData}}>
            {props.children}
        </Context.Provider>
    )
}

export default CartState