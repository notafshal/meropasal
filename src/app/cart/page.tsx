"use client";
import { useCart } from "@/app/context/CartContext";
import { Key, ReactNode } from "react";

const Cart = () => {
  const { addCart } = useCart();
  console.log();
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
        <div>
          <ul>
            {addCart.map(
              (item: {
                title: ReactNode;
                price: ReactNode;
                id: Key | null | undefined;
              }) => (
                <li key={item.id}>
                  {item.title} -Rs {item.price}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Cart;
