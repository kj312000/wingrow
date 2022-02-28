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
  ],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});
