"use client";

import { createContext, ReactNode, useContext, useState } from "react";
type CartProps = {
  children: ReactNode;
};
type CartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};
type CartItem = {
  id: number;
  quantity: number;
};
const CartContext = createContext<any>({});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  return (
    <CartContext.Provider value={{ getItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
