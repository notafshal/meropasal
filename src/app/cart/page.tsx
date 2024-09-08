"use client";
import { useCart } from "@/app/context/CartContext";

import CartCard from "@/components/CartCard";
import { useEffect, useState } from "react";

const Cart = () => {
  const { addCart, clearCart } = useCart();
  const [total, setTotal] = useState<number>(0);
  let sum = 0;
  const items = addCart.map((item) => {
    return item.price;
  });
  const finalSum = items.reduce((acc, item) => acc + item, 0);
  useEffect(() => {
    setTotal(finalSum);
  }, [finalSum]);
  const checkout = () => {
    alert(
      "Dear user. Thank you for your purchase. Since this is a dummy project dont expect any products to come at your door"
    );
    setTotal(0);
    clearCart();
  };
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
        <div className="p-2 bg">
          <ul>
            {addCart.map(
              (item: {
                title: string;
                price: number;
                id: number;
                image: string;
              }) => (
                <>
                  <CartCard
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                  />
                </>
              )
            )}
          </ul>
        </div>
        <div className="flex flex-row justify-between mx-3">
          <h1>Total</h1>
          <h1>{total}</h1>
        </div>
        <div className="flex justify-end my-2 mx-3">
          <button
            className="text-center bg-red-500 text-white p-2 rounded-md "
            onClick={checkout}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};
export default Cart;
