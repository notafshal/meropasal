"use client";

import GoBack from "@/components/GoBack";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Login = () => {
  const [inputType, setInputType] = useState<string>("password");
  const [isShowingPassword, setIsShowingPassword] = useState<boolean>(false);
  const [user, setUser] = useState<any>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const [token, setToken] = useState("");
  const showPassword = () => {
    const passwordTypes = ["password", "text"];
    setIsShowingPassword(!isShowingPassword);
    setInputType(isShowingPassword ? passwordTypes[0] : passwordTypes[1]);
  };
  const handelLogin = async (e: any) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      setError("Credentials missing!!!");
    }
    await axios
      .post("http://localhost:5000/api/login", {
        email: user.email,
        password: user.password,
      })
      .then((result) => {
        console.log(result);

        if (result.data.status === "success") {
          console.log(`logged in successfully ${user}`);
          router.push("/");
        }
        localStorage.setItem("token", JSON.stringify(result.data.token));
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col gap-4 bg-gray-300 h-screen lg:w-72 lg:h-fit lg:rounded-md lg:mx-auto lg:my-28 lg:p-10 ">
        <GoBack />
        <h1 className="text-center  font-semibold text-xl">
          <span className="bg-red-500 text-white p-2">Login</span>
        </h1>
        <p className="text-red-500 font-light text-sm text-center">{error}</p>
        <form onSubmit={handelLogin}>
          <div className="flex justify-center flex-col">
            <label className="flex mb-1 mr-5 justify-center font-extralight">
              Email
            </label>
            <input
              placeholder="email"
              className="p-2 mx-auto border-2 rounded-3xl "
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
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
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <span className="absolute right-24 md:right-72 lg:-right-4 cursor-pointer">
                {isShowingPassword ? (
                  <FaEye onClick={showPassword} className="my-2" />
                ) : (
                  <FaEyeSlash onClick={showPassword} className="my-2" />
                )}
              </span>
            </div>
          </div>
          <div className="text-center my-2">
            <button
              className="bg-red-500 p-2 px-5 text-white font-medium rounded-3xl mt-4"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mx-auto flex justify-center flex-col mt-4 border-t-4 p-11">
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
