import React from "react";

export default React.createContext({
  products: [
    { id: "p1", title: "Cabbage", price: 29.99 },
    { id: "p2", title: "Onion", price: 9.99 },
    { id: "p3", title: "Spinach", price: 0.99 },
    { id: "p4", title: "Cucumber", price: 2.99 },
    { id: "p1", title: "Cabbage", price: 29.99 },
    { id: "p2", title: "Onion", price: 9.99 },
    { id: "p3", title: "Spinach", price: 0.99 },
    { id: "p4", title: "Cucumber", price: 2.99 }
  ],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});
