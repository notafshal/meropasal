"use client";

import GoBack from "@/components/GoBack";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
const Register = () => {
  const [isShowingPassword, setIsShowingPassword] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>("password");
  const [isShowingConfirmPassword, setIsShowingConfirmPassword] =
    useState<boolean>(false);
  const [inputConfirmType, setInputConfirmType] = useState<string>("password");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const showPassword = () => {
    const passwordTypes = ["text", "password"];
    setIsShowingPassword(!isShowingPassword);
    setInputType(isShowingPassword ? passwordTypes[1] : passwordTypes[0]);
  };
  const showConfirmPassword = () => {
    const passwordTypes = ["text", "password"];
    setIsShowingConfirmPassword(!isShowingConfirmPassword);
    setInputConfirmType(
      isShowingConfirmPassword ? passwordTypes[1] : passwordTypes[0]
    );
  };
  const handelRegister = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password do not match");
      return;
    }

    axios
      .post("http://localhost:5000/api/users/register", {
        email,
        username,
        password,
      })
      .then((result) => {
        console.log(result);
        setEmail("");
        setPassword("");
        setUsername("");
        router.push("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {" "}
      <div className="h-screen w-screen">
        <div className="flex flex-col gap-4 bg-gray-300 h-screen lg:w-72 lg:h-fit lg:rounded-md lg:mx-auto lg:my-28 lg:p-10 ">
          <GoBack />
          <h1 className="text-center  font-semibold text-xl rounded-md">
            <span className=" bg-red-500 text-white p-2"> Register</span>
          </h1>
          <p className="text-sm font-light text-red-500 text-center">{error}</p>
          <form onSubmit={handelRegister}>
            <div className="flex justify-center flex-col">
              <label className="flex mb-1 mr-5 justify-center font-extralight">
                Email
              </label>
              <input
                type="email"
                placeholder="email"
                className="p-2 mx-auto border-2 rounded-3xl "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-center flex-col">
              <label className="flex mb-1 mr-5 justify-center font-extralight">
                Username
              </label>
              <input
                placeholder="Username"
                className="p-2 mx-auto border-2 rounded-3xl "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            <div className="flex justify-center flex-col">
              <label className="flex  mb-1 mr-5 justify-center font-extralight">
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={inputConfirmType}
                  placeholder="Confirm password "
                  className="mx-auto p-2 border-2 rounded-3xl"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />{" "}
                <span className="absolute right-24 md:right-72 lg:-right-4 cursor-pointer">
                  {isShowingConfirmPassword ? (
                    <FaEye onClick={showConfirmPassword} className="my-2" />
                  ) : (
                    <FaEyeSlash
                      onClick={showConfirmPassword}
                      className="my-2"
                    />
                  )}
                </span>
              </div>
            </div>
            <div className="text-center my-2">
              <button
                className="bg-red-500 p-2 px-5 text-white font-medium rounded-3xl "
                type="submit"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
