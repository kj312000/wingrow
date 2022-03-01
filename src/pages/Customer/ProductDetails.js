import React from 'react'
import { useParams } from 'react-router-dom';
import "./customer_styles.css";
import ShopContext from "../../context/shop-context";
import MainNavigation from "../../components/MainNavigation";



function ProductDetails() {
    const {item} = useParams()
  return (
    <ShopContext.Consumer>
      {context => (
        <React.Fragment>
          <MainNavigation
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
          <main className="customer_products">
            <div className="products_container">
              {context.products.filter(product =>
                product.title===item).map((product)=>{
                    return(
                        <div className='products_item'>
                            <div>
                                <h2><strong>{product.title}</strong></h2>
                            </div>
                            <div className='img_container'>
                                <img className='products_img' src={`../.${product.image}`} alt="img"/>
                                <div className='products_sub_details'>
                                  <div><h1>Price : {product.price}</h1></div>
                                  <div>No of Kg : 1</div>
                                </div>
                            </div>
                            <div>
                                <button
                                onClick={()=>context.addProductToCart.bind(this, product)}>Add to Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
          </main>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  )
}

export default ProductDetails