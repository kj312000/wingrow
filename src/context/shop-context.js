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
  bookingStalls : 
  [
    {
      id:1,
    city:"pune",
    address:"address1",
    capacity:"40",
    day:"monday-friday",
    time:"9am-6pm"
    },
    {
      id:2,
      city:"pune",
    address:"address2",
    capacity:"30",
    day:"monday-friday",
    time:"9am-6pm"
    },
    {
      id:3,
      city:"pune",
    address:"address3",
    capacity:"50",
    day:"monday-friday",
    time:"9am-6pm"
    },
    {
      id:4,
      city:"pune",
    address:"address4",
    capacity:"40",
    day:"monday-friday",
    time:"9am-6pm"
    },
    {
      id:5,
      city:"pune",
    address:"address5",
    capacity:"20",
    day:"monday-friday",
    time:"9am-6pm"
    },
    {
      id:6,
      city:"nashik",
    address:"address1",
    capacity:"40",
    day:"monday-friday",
    time:"9am-6pm"
  },
  {
    id:7,
    city:"nashik",
    address:"address2",
    capacity:"30",
    day:"monday-friday",
    time:"9am-6pm"
  },
  {
    id:8,
    city:"nashik",
    address:"address3",
    capacity:"40",
    day:"monday-friday",
    time:"9am-6pm"
  },
    {
      id:9,
      city:"mumbai",
    address:"address1",
    capacity:"40",
    day:"monday-friday",
    time:"9am-6pm"
    },
    {
      id:10,
      city:"mumbai",
    address:"address2",
    capacity:"30",
    day:"monday-friday",
    time:"9am-6pm"
    },
    {
      id:11,
      city:"mumbai",
    address:"address3",
    capacity:"40",
    day:"monday-friday",
    time:"9am-6pm"
    }
  ],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});
