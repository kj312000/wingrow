import React from 'react'
import './Customer.css'
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";


function Cart() {
  return (
    <div className='cart_main'>
        <div className='cart_component'>
                <h1 className='heading_cart'>Your Cart</h1>
                <div className='cart_items'>
                    <div className='cart_product'>
                        <p>item 1</p>
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
                    <div className='cart_product'>
                        <p>item 1</p>
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
                    
                    </div>
                <div className='cart_button'>
                    <button style={{padding:"0.6em"}}>Buy Now</button>                
            </div>
        </div>
    </div>
  )
}

export default Cart

