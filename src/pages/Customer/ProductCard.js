import React,{useContext} from 'react';
import '../Customer/Customer.css'
import {data} from '../../components/data'
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Context from '../../context/Context';

function ProductCard({Type,itemCount,setItemCount}) {
    const res = useContext(Context)
    const {Data , setData} = res
    
    function increment(id){
        setItemCount(itemCount + 1)
        const result = data.find((e)=>{return e.id===id})
        const res = [...Data]
        res.push(result)
        setData(res)
        
    }
    function decrement(id){
        setItemCount(Math.max(itemCount - 1, 0))
    }
  
    return( 
      <>
        {(typeof data === 'undefined')?(<p>Loading....</p>):
        <div className='product'>
        {data.map(e=>{
            const {name ,category , id , image , price , description} = e
            if(category===Type){
                return(<div className='card' key={id}>
                    <h1>{name}</h1>
                    <img style={{display:"block",width:"200px"}} src={image} alt="img" />
                    <p>{description}</p>
                    <p>Rs:{price}</p>
                    <ButtonGroup>
                        <Button
                            key={id}
                            onClick={()=>decrement(id)}
                        >
                            {" "}
                            <RemoveIcon fontSize="small" />
                        </Button>
                        <Button
                            onClick={()=>increment(id)}
                        >
                            {" "}
                            <AddIcon fontSize="small" />
                        </Button>
                        </ButtonGroup>
                </div>)
            }else{
                return<></>
            }
        })}        
        </div>
        }
    </>
        )
}

export default ProductCard;
