"use client";

import GoBack from "@/components/GoBack";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [inputType, setInputType] = useState<string>("password");
  const [isShowingPassword, setIsShowingPassword] = useState<boolean>(false);
  const showPassword = () => {
    const passwordTypes = ["password", "text"];
    setIsShowingPassword(!isShowingPassword);
    setInputType(isShowingPassword ? passwordTypes[0] : passwordTypes[1]);
  };
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col gap-4 bg-gray-300 h-screen lg:w-72 lg:h-fit lg:rounded-md lg:mx-auto lg:my-28 lg:p-10 ">
        <GoBack />
        <h1 className="text-center  font-semibold text-xl">
          <span className="bg-red-500 text-white p-2">Login</span>
        </h1>
        <div className="flex justify-center flex-col">
          <label className="flex mb-1 mr-5 justify-center font-extralight">
            Email
          </label>

          <input
            placeholder="email"
            className="p-2 mx-auto border-2 rounded-3xl "
          />
        </div>
        <div className="flex justify-center flex-col">
          <label className="flex  mb-1 mr-5 justify-center font-extralight">
            Password
          </label>
          <div className="relative flex items-center">
            <input
              type={inputType}
              placeholder="password "
              className="mx-auto p-2 border-2 rounded-3xl"
            />
            <span className="absolute right-24 md:right-72 lg:right-1 cursor-pointer">
              {isShowingPassword ? (
                <FaEye onClick={showPassword} className="my-2" />
              ) : (
                <FaEyeSlash onClick={showPassword} className="my-2" />
              )}
            </span>
          </div>
        </div>
        <div className="text-center my-2">
          <Link href="/">
            <button
              className="bg-red-500 p-2 px-5 text-white font-medium rounded-3xl "
              onClick={() => {
                alert(
                  "login successful.Since this is a dummy api this feature doesnt work"
                );
              }}
            >
              Login
            </button>
          </Link>
        </div>
        <div className="mx-auto flex justify-center flex-col mt-7">
          <h2>Dont have an Account? Create One</h2>
          <Link href="/register" className="mx-auto">
            <button className="bg-red-500 mx-auto p-2 px-5 text-white font-medium rounded-3xl ">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
