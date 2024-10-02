"use client";
import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { VscClose } from "react-icons/vsc";
import { useCart } from "@/app/context/CartContext";
const Navbar = () => {
  const [isClick, setisClick] = useState<boolean>(false);

  const { addCart } = useCart();
  const cartNumber = addCart.length;
  const toogleNav = (): void => {
    setisClick(!isClick);
  };
  return (
    <>
      <nav className="sticky z-100 h-12 md:h-18  w-full bg-red-500 flex flex-row justify-between">
        <Link href="/">
          <div className="ml-5">
            <p className="text-white py-2 lg:py-3">
              mero<span className="text-yellow-300 font-semibold">Pasal</span>
            </p>
          </div>
        </Link>
        <div className="mt-3 flex flex-row ">
          <div className="hidden md:block ">
            <ul className="flex flex-row gap-4 cursor-pointer text-white mr-5 lg:gap-10  ">
              <Link href="/">
                {" "}
                <li className="hover:bg-white hover:text-red-500 px-2 rounded-sm">
                  Home
                </li>
              </Link>
              <Link href="/category">
                <li className="hover:bg-white hover:text-red-500 px-2 rounded-sm">
                  Category
                </li>
              </Link>
              <Link href="/login">
                <li className="hover:bg-white hover:text-red-500 px-2 rounded-sm">
                  SignIn
                </li>
              </Link>
            </ul>
          </div>
          <Link href="/cart">
            <FaShoppingCart className=" mx-3 text-[1.5em] text-white md:ml-32 hover:bg-white hover:text-red-500 rounded-sm cursor-pointer" />
          </Link>
          {cartNumber === 0 ? (
            <div className="hidden"></div>
          ) : (
            <div className="flex items-center justify-center text-red-500 text-xs  -mx-4 bg-white rounded-full h-3  overflow-hidden ">
              {cartNumber}
            </div>
          )}
        </div>
        <div className="m-3 ">
          <button className="md:hidden" onClick={toogleNav}>
            {isClick ? (
              <VscClose className="text-white text-lg cursor-pointer " />
            ) : (
              <FaBars className="text-white text-lg cursor-pointer " />
            )}
          </button>
        </div>
      </nav>
      {isClick && (
        <div className="md:hidden">
          <div className="h-full">
            <ul className=" bg-red-500 md:flex md:flex-col gap-8 cursor-pointer text-white underline rounded-sm ml-56 py-6 px-12">
              <Link href="/">
                {" "}
                <li className=" ">Home</li>
              </Link>
              <Link href="/category">
                <li>Category</li>
              </Link>
              <Link href="/login">
                <li>SignIn</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
