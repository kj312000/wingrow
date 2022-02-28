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

  const bookingStalls = 
    [
      {
        id:1,
      city:"Pune",
      address:"address1",
      capacity:"40",
      day:"monday-friday",
      time:"9am-6pm"
      },
      {
        id:2,
        city:"Pune",
      address:"address2",
      capacity:"30",
      day:"monday-friday",
      time:"9am-6pm"
      },
      {
        id:3,
        city:"Pune",
      address:"address3",
      capacity:"50",
      day:"monday-friday",
      time:"9am-6pm"
      },
      {
        id:4,
        city:"Pune",
      address:"address4",
      capacity:"40",
      day:"monday-friday",
      time:"9am-6pm"
      },
      {
        id:5,
        city:"Pune",
      address:"address5",
      capacity:"20",
      day:"monday-friday",
      time:"9am-6pm"
      },
      {
        id:6,
        city:"Nashik",
      address:"address1",
      capacity:"40",
      day:"monday-friday",
      time:"9am-6pm"
    },
    {
      id:7,
      city:"Nashik",
      address:"address2",
      capacity:"30",
      day:"monday-friday",
      time:"9am-6pm"
    },
    {
      id:8,
      city:"Nashik",
      address:"address3",
      capacity:"40",
      day:"monday-friday",
      time:"9am-6pm"
    },
      {
        id:9,
        city:"Mumbai",
      address:"address1",
      capacity:"40",
      day:"monday-friday",
      time:"9am-6pm"
      },
      {
        id:10,
        city:"Mumbai",
      address:"address2",
      capacity:"30",
      day:"monday-friday",
      time:"9am-6pm"
      },
      {
        id:11,
        city:"Mumbai",
      address:"address3",
      capacity:"40",
      day:"monday-friday",
      time:"9am-6pm"
      }
    ]





  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 100);
  };

  const removeProductFromCart = productId => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 100);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        bookingStalls : bookingStalls
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
