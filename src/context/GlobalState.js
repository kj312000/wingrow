import React, { useReducer } from "react";

import ShopContext from "./shop-context";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";

const GlobalState = props => {
  const products = [
    { id: "p1", title: "Cabbage", price: 29.99 },
    { id: "p2", title: "Onion", price: 9.99 },
    { id: "p3", title: "Spinach", price: 0.99 },
    { id: "p4", title: "Cucumber", price: 2.99 },
    { id: "p1", title: "Cabbage", price: 29.99 },
    { id: "p2", title: "Onion", price: 9.99 },
    { id: "p3", title: "Spinach", price: 0.99 },
    { id: "p4", title: "Cucumber", price: 2.99 }
  ];
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 700);
  };

  const removeProductFromCart = productId => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
