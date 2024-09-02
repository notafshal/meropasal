"use client";
import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
const Navbar = () => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  return (
    <nav className="sticky z-100 h-12 md:h-18  w-full bg-red-500 flex flex-row justify-between">
      <div className="ml-5">
        <p className="text-white py-2 lg:py-3">
          mero<span className="text-yellow-300 font-semibold">Pasal</span>
        </p>
      </div>
      <div className="mt-3">
        <ul className="flex flex-row gap-4 cursor-pointer text-white mr-5 lg:gap-10 ">
          <Link href="/">
            {" "}
            <li>Home</li>
          </Link>
          <li>
            <FaShoppingCart className="mx-3 text-[1.5em]" />
          </li>
          <li>SignIn</li>
        </ul>
      </div>

      {/* <div className="py-3 lg:py-4 mr-5">
        <div className="">
          <FaBars className="text-white cursor-pointer lg:hidden" />
        </div> 
      </div>*/}
    </nav>
  );
};
export default Navbar;
