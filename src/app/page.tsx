"use client";
import Card from "@/components/Card";

import axios from "axios";
import { get } from "http";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
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
                ></Card>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
