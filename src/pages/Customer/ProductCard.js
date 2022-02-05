import React from 'react';
import {data} from '../../components/data'
import '../Customer/Customer.css'

function ProductCard({Type}) {
    console.log(Type);
  return( 
      <>
        <div className='product'>
        {data.map(e=>{
            const {name ,category , id , image , price , description} = e
            if(category===Type){
                return(<div className='card' key={id}>
                    <h1>{name}</h1>
                    <img style={{display:"block",width:"200px"}} src={image} alt="img" />
                    <p>{description}</p>
                    <p>Rs:{price}</p>
                </div>)
            }else{
                return<></>
            }
        })}        
        </div>
    </>
        )
}

export default ProductCard;
