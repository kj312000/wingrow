import React from "react";
import ShopContext from "../../context/shop-context";
import MainNavigation from "../../components/MainNavigation";
import "./customer_styles.css";
import Button from './Button'

const ProductsPage = () => {
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
             <Button product={context.products}/>:
          </main>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};

export default ProductsPage;
