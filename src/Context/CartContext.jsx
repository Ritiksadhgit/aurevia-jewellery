import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState([]);


  // Add product to cart
  const addToCart = (product) => {

    setCart((currentCart) => {

      // Check karo product already cart mein hai ya nahi
      const existingProduct = currentCart.find(
        (item) => item.name === product.name
      );

      // Product already hai
      if (existingProduct) {

        return currentCart.map((item) =>
          item.name === product.name
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );

      }

      // Product new hai
      return [
        ...currentCart,
        {
          ...product,
          quantity: 1
        }
      ];

    });
  };


  // Increase quantity
  const increaseQuantity = (productName) => {

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.name === productName
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );

  };


  // Decrease quantity
  const decreaseQuantity = (productName) => {

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.name === productName && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      )
    );

  };

  // Remove product from cart
const removeFromCart = (productName) => {

  setCart((currentCart) =>
    currentCart.filter(
      (item) => item.name !== productName
    )
  );

};


  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;