import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";
export const CheckoutItem = ({ cartItem }) => {
  const { id, name, price, imageUrl, quantity } = cartItem;
  const { addItemToCart, removeItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => {
    addItemToCart(cartItem);
  };

  const removeItemFromCartHandler = () => {
    removeItemToCart(cartItem);
  };

  const clearItemHandler = () => {
    removeItemFromCart(cartItem);
  };

  return (
    <>
      <div key={id} className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={name} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <div className="arrow" onClick={removeItemFromCartHandler}>
            &#10094;
          </div>
          {quantity}
          <div className="arrow" onClick={addItemHandler}>
            &#10095;
          </div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={clearItemHandler}>
          &#10005;
        </div>
      </div>
    </>
  );
};
