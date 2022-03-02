import React, { useContext ,useState , useEffect } from "react";
import ShopContext from "../../context/shop-context";
import MainNavigation from "../../components/MainNavigation";
import "./customer_styles.css";

const CartPage = props => {
  const context = useContext(ShopContext);
  const [Total, setTotal] = useState('')

  useEffect(() => {
    setTotal(
      context.cart.reduce((acc, curr) => acc + Number(curr.price) * curr.value, 0)
    );
  }, [context.cart]);
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
                <h3>{cartItem.title}</h3>
              </div>
              <div>
                    <img className="cart_img" src={cartItem.image} alt="img"/>
              </div>
              <div>
                <h4>Qty : {cartItem.value}Kg</h4>
                <h4>Total : {Math.round(cartItem.value*cartItem.price)}Rs</h4>
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
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <h3>Sub Total : {Math.round(Total)} Rs</h3>
      </div>
      {context.cart.length!==0 &&
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <button>Confirm Order</button>
      </div>}
      </main>
      
    </React.Fragment>
  );
};
export default CartPage;
