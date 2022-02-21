import React, { useContext } from 'react'
import './Customer.css'
import Context from '../../context/Context';
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";


function Cart() {
    const res = useContext(Context)
    const {Data} =res
    console.log(Data)
  return (
    <div className='cart_main'>
        <div className='cart_component'>
                <h1 className='heading_cart'>Your Cart</h1>
                <div className='cart_items'>
                    {
                       typeof Data===undefined?(<h1>Loading...</h1>)
                        :
                        Data.map((e)=>{
                            if(Data===[]){
                                return(<h1>Your Cart is Empty</h1>)
                            }else
                            return(
                                <div className='cart_product'>
                                    <img style={{display:"block",height:"70px",width:"70px"}} src={e.image} alt="img"/>
                                    <p>{e.name}<br></br>{e.price}</p>
                                    <div className='qty'>
                                    <h4>Qty</h4>
                                    <div className='btn_grp'>
                                        <button><AddIcon fontSize="small" /></button> 
                                        <button><RemoveIcon fontSize="small" /></button>
                                    </div>
                                    </div> 
                                    <div>
                                    <button>Remove Item</button>
                                    </div>     
                                </div>
                            )
                        })
                    }
                    </div>
                <div className='cart_button'>
                    <button style={{padding:"0.6em"}}>Buy Now</button>                
            </div>
        </div>
    </div>
  )
}

export default Cart

