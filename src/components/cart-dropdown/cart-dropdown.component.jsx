import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CardItem from "../card-item/card-item.component";
import { Link } from "react-router-dom";

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CardItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to="/checkout">
        <Button>Check Out</Button>
      </Link>
    </div>
  );
};
