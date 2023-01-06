import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";
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
      <CheckoutItemContainer key={id}>
        <ImageContainer>
          <img src={imageUrl} alt={name} />
        </ImageContainer>
        <BaseSpan className="name">{name}</BaseSpan>
        <Quantity>
          <Arrow onClick={removeItemFromCartHandler}>&#10094;</Arrow>
          {quantity}
          <Arrow onClick={addItemHandler}>&#10095;</Arrow>
        </Quantity>
        <BaseSpan>{price}</BaseSpan>
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
      </CheckoutItemContainer>
    </>
  );
};
