"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
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
  const { addItem } = useCart();
  const [productDetails, setProductDetails] = useState<ProductDetails | null>();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res) => {
      console.log(res.data);
      setProductDetails(res.data);
    });
  }, [params.id]);

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
            <button className="bg-red-500 p-3 text-white font-semibold rounded-sm">
              Buy Now
            </button>

            <button
              className="bg-red-500 p-3 text-white font-semibold rounded-sm"
              onClick={() => {
                console.log(productDetails);
              }}
            >
              Add to Cart
            </button>
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
