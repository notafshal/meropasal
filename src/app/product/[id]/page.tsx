"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";

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
const ProductPage = ({ params }: { params: { id: number } }) => {
  const [productDetails, setProductDetails] = useState<ProductDetails | null>();
  const { addToCart } = useCart();
  const [cartMessage, setCartMessage] = useState<string>("");
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res) => {
      console.log(res.data);
      setProductDetails(res.data);
    });
  }, [params.id]);

  const handleAddtoCart = () => {
    if (productDetails) {
      addToCart(productDetails);
      setCartMessage(productDetails?.title);
      setIsAddedToCart(true);
    }
  };
  const handleBuyNow = () => {
    if (productDetails) {
      addToCart(productDetails);
      setIsAddedToCart(false);
    }
  };

  return (
    <>
      <div className="mt-10 mx-4 h-screen ">
        <Image
          src={productDetails?.image}
          className="mx-auto h-36 w-36 md:h-52 md:w-52 lg:h-72 lg:w-72"
          width={200}
          height={200}
          alt="product image"
        />
        <div className="flex flex-col gap-3 mt-6">
          <h1 className=" font-semibold ">{productDetails?.title}</h1>
          <p className="font-extralight text-sm  ">
            Category: {productDetails?.category}
          </p>
          <p className="font-light text-sm ">{productDetails?.description}</p>
          <p className="font-semibold md:text-lg text-sm text-red-500">
            Rs. {productDetails?.price}
          </p>{" "}
          <div className="flex gap-4">
            <Link href="/cart">
              <button
                className="bg-red-500 p-3 text-white font-semibold rounded-sm"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </Link>
            <button
              className="bg-red-500 p-3 text-white font-semibold rounded-sm"
              onClick={handleAddtoCart}
            >
              Add to Cart
            </button>
            {isAddedToCart && (
              <p className="font-extralight text-sm my-2">
                Your item{" "}
                <span className="md:bg-red-500 md:text-white md:p-1">
                  {cartMessage}
                </span>{" "}
                has been added to the cart.
              </p>
            )}
          </div>
          <p className=" text-sm bg-yellow-400 p-2 rounded-xl text-center text-white font-semibold ">
            Total Purchases : {productDetails?.rating.count}
          </p>
          <p className="text-sm bg-yellow-400 p-2 rounded-xl text-center text-white font-semibold ">
            Rating : {productDetails?.rating.rate} / 5
          </p>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
