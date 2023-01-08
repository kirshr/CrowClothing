import { createContext, useReducer } from "react";

//Helper function
const addCartItem = (cartItems, productToAdd) => {
  //find if cart item has the productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //If found, increment quantity and add
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //Return new array with modified cartItems/newCartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, cartItemToRemove) => {
  //find if cart item has the cartItemToRemove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  //Check if quantity is equals to one, if it is,remove the item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const removeItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
};

//REDUCER

//Reducer ACTION_TYPES

export const CART_ACTION_TYPES = {
  IS_CART_OPEN: "IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};
//Remember: REDUCERS ONLY STORE READABLE VALUES

//So, cartReducer, takes in a "state" and an action, we deconstruct the action into an object that has a TYPE and Payload
//We then use a switch statement, that essentially says, HEY, if this TYPE is called, then give return the spread out state and the PAYLOAD. The PAYLOAD is defined later.
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "IS_CART_OPEN":
      return {
        ...state,
        isCartOpen: payload,
      };
      break;
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
      break;
    default:
      return state;
  }
};

export const CartContext = createContext({
  //We want to store wether or not the dropdown is active
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  cartCount: 0,
  cartTotal: 0,
  removeItem: () => {},
});
export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const setIsCartOpen = (state) => {
    dispatch({ type: CART_ACTION_TYPES.IS_CART_OPEN, payload: state });
  };

  //updateCartItemReducer takes in a new variable called newCartItems (which is a new array depending on what is being called (Add, remove etc))
  //we then create new variables to store the values for newCartTotal and newCartCount, both of which need newCartItems
  const updateCartItemReducer = (newCartItems) => {
    /** * Generate newCartTotal*/
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    /** Generate newCartCount*/
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    dispatch({
      type: "SET_CART_ITEMS",
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
    /*
     * Dispatch new action with payload = {
     * newCartItems,
     * newCartTotal,
     * newCartCount
     *
     * }
     *
     */
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };
  const removeItemToCart = (produceToRemove) => {
    const newCartItems = removeCartItem(cartItems, produceToRemove);
    updateCartItemReducer(newCartItems);
  };
  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeItem(cartItems, cartItemToRemove);
    updateCartItemReducer(newCartItems);
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    cartTotal,
    removeItemToCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
