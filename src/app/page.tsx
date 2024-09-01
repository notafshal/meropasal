"use client";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

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
      <Navbar />
      <div className="m-10">
        <div className="object-fit grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            ></Card>
          ))}
        </div>
      </div>
    </>
  );
}
