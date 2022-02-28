import React, { useContext } from "react";
import ShopContext from "../../context/shop-context";
import MainNavigation from "../../components/MainNavigation";
import "./Cart.css";

const CartPage = props => {
  const context = useContext(ShopContext);
  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <div style={{display:"flex",justifyContent:"center",alignitems:"center",flexDirection:"column"}}>
      <main className="cart">
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {context.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price}
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
            </li>
          ))}
        </ul>
      </main>
      {context.cart.length!==0 &&
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"16px",padding:"16px"}}>
        <button>Confirm Order</button>
      </div>}
      </div>
    </React.Fragment>
  );
};
export default CartPage;
