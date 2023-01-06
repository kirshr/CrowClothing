import React from "react";
import {
  CartItemContainer,
  ImageStyle,
  ItemDetails,
  Name,
  Price,
} from "./cart-item.styles";
const CardItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <ImageStyle src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CardItem;
