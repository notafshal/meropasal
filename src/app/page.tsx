"use client";
import Card from "@/components/Card";

import axios from "axios";

import Link from "next/link";
import { useState, useEffect } from "react";

import { Hourglass } from "react-css-spinners";
export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setisLoading] = useState<boolean>(true);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        setError("Failed to load products");
        setisLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <p className=" font-semibold text-xl mx-5 px-5 my-5">
        <Hourglass className=" bg-black" />
        <br />
        Loading......
      </p>
    );
  }
  if (error) {
    return (
      <p className="text-center mx-10 my-10 font-bold text-6xl text-red-500">
        {error}
      </p>
    );
  }
  return (
    <div className="h-screen overflow-scroll">
      {" "}
      <h1 className="text-center mt-5 font-semibold">
        All{" "}
        <span className="bg-red-500 text-white p-1 border-none">Products</span>
      </h1>
      <div className="m-8">
        <div className="object-fit grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <>
              <Link href={`/product/${product.id}`}>
                <Card
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
