import React,{useContext, useState} from 'react'
import { useParams  } from 'react-router-dom';
import "./customer_styles.css";
import ShopContext from "../../context/shop-context";
import MainNavigation from "../../components/MainNavigation";
import SelectDropdown from '../../components/SelectDropdown';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useButton } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import shopContext from '../../context/shop-context';

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const CustomButtonRoot = styled('button')`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${blue[500]};
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${blue[600]};
  }

  &.active {
    background-color: ${blue[700]};
  }

  &.focusVisible {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CustomButton = React.forwardRef(function CustomButton(props, ref) {
  const { children } = props;
  const { active, disabled, focusVisible, getRootProps } = useButton({
    ...props,
    ref,
    component: CustomButtonRoot,
  });

  const classes = {
    active,
    disabled,
    focusVisible,
  };

  return (
    <CustomButtonRoot {...getRootProps()} className={clsx(classes)}>
      {children}
    </CustomButtonRoot>
  );
});

CustomButton.propTypes = {
  children: PropTypes.node,
};



function ProductDetails() {
    const {addProductToCart}=useContext(shopContext)
    const {item} = useParams()
    const [ToggleButton, setToggleButton] = useState(true)
    const [Value, setValue] = React.useState('');
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
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
                  product.value=Value
                  const handleClick = ()=>{
                    addProductToCart(product);
                    setToggleButton(!ToggleButton)
                  }
                    return(
                        <div className='products_item'>
                            <div>
                                <h2><strong>{product.title}</strong></h2>
                            </div>
                            <div className='img_container'>
                                <img className='products_img' src={`../.${product.image}`} alt="img"/>
                                <div className='products_sub_details'>
                                  <div><h3>Price : {product.price}/Kg</h3></div>
                                  <div className='dropdown'>
                                    <h3>No.of kg :</h3>
                                    <SelectDropdown value={"kg"} Value={Value} setValue={setValue} handleChange={handleChange}/>
                                  </div>
                                  <div>
                                    <h3>Total : {Math.round(product.price*Value)} Rs</h3>
                                  </div>
                                </div>
                            </div>
                            <div>
                                {/* <button
                                onClick={}>Add to Cart
                                </button> */}
                                {ToggleButton?<CustomButton onClick={handleClick}>Add to Cart</CustomButton>
                                  :<CustomButton disabled>Item added</CustomButton>
                                  }
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