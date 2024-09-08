"use client";

import Card from "@/components/Card";
import GoBack from "@/components/goBack";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const [categoryName, setCategoryName] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${params.category}`)
      .then((res) => {
        console.log(res.data);
        setCategoryName(res.data);
      });
  }, [params.category]);

  console.log(`category name : ${categoryName}`);

  return (
    <>
      <div className="my-2 w-screen min-h-screen overflow-scroll">
        <GoBack />
        <main className="flex-grow my-2 w-full">
          <h1 className="text-center font-light md:font-normal">
            Category page for{" "}
            <span className="bg-red-500 text-white p-1">
              {params.category}{" "}
            </span>
          </h1>
          <div className=" grid md:grid-cols-3 lg:grid-cols-3 gap-6 h-72">
            {categoryName.map((product) => (
              <>
                {" "}
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
        </main>
      </div>
    </>
  );
};
export default CategoryPage;
