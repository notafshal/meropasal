"use client";

import CategoryCard from "@/components/CategoryCard";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

import { FaHeadphones, FaTshirt } from "react-icons/fa";
import { GiAmpleDress, GiDiamondRing } from "react-icons/gi";

const Category = () => {
  const [categories, setCategories] = useState<any[]>([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategories(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <div>
        <h1 className="text-center my-5 ">
          All <span className="bg-red-500 text-white">Categories</span>{" "}
        </h1>
        <div className="w-full  min-h-screen grid grid-cols-2 md:grid-cols-4">
          <CategoryCard icon={<FaHeadphones />} name={categories[0]} />

          <CategoryCard icon={<GiDiamondRing />} name={categories[1]} />

          <CategoryCard icon={<FaTshirt />} name={categories[2]} />

          <CategoryCard icon={<GiAmpleDress />} name={categories[3]} />
        </div>
      </div>
    </>
  );
};
export default Category;
