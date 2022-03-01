import React, { useContext } from "react";
import ShopContext from "../../context/shop-context";
import MainNavigation from "../../components/MainNavigation";
import "./customer_styles.css";

const CartPage = props => {
  const context = useContext(ShopContext);
  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <main className="cart">
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <div className="cart_container">
          {context.cart.map(cartItem => (
            <div className="cart_item" key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price}
              </div>
              <div>
                    <img className="cart_img" src={cartItem.image} alt="img"/>
              </div>
              <div>
                <h3>Qty - {cartItem.quantity}</h3>
              </div>
              <div>
                <button
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      {context.cart.length!==0 &&
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"16px",padding:"16px"}}>
        <button>Confirm Order</button>
      </div>}
    </React.Fragment>
  );
};
export default CartPage;
