import {
  CartDropdownContainer,
  CartItems,
  StyledButton,
} from "./cart-dropdown.styles";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CardItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CardItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <Link to="/checkout">
        <StyledButton>Check Out</StyledButton>
      </Link>
    </CartDropdownContainer>
  );
};
