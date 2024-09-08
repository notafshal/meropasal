"use client";
import { createContext, useContext, useState } from "react";
interface ProductDetails {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: any;
  rating: {
    rate: number;
    count: number;
  };
}
interface CartContextType {
  addCart: ProductDetails[];
  addToCart: (product: ProductDetails) => void;
  clearCart: () => void;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [addCart, setAddCart] = useState<ProductDetails[]>([]);

  const addToCart = (product: ProductDetails) => {
    setAddCart((prevCart) => [...prevCart, product]);
  };
  const clearCart = () => {
    setAddCart([]);
  };
  return (
    <CartContext.Provider value={{ addCart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("UseCart must be used within a cart provider");
  }
  return context;
};
