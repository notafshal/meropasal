"use client";
import axios from "axios";
import { useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CartProvider, useCart } from "react-use-cart";
const Cart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  console.log(items);
  if (isEmpty) return <p className="text-center my-2">Your cart is Empty</p>;

  return (
    <>
      <div className="h-lvh overflow-scroll ">
        <div>
          <h1 className="text-center my-4">
            Your
            <span className="p-1 text-white bg-red-500">Cart</span>
            <span></span>
          </h1>
        </div>
      </div>
    </>
  );
};
export default Cart;
