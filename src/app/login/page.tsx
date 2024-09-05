import Link from "next/link";

const Login = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col gap-4 bg-gray-300 h-screen lg:w-72 lg:h-fit lg:rounded-md lg:mx-auto lg:my-28 lg:p-10 ">
        <h1 className="text-center  font-semibold text-xl">Login</h1>
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

          <input
            placeholder="password "
            className="mx-auto p-2 border-2 rounded-3xl"
          />
        </div>
        <div className="text-center my-2">
          <button className="bg-red-500 p-2 px-5 text-white font-medium rounded-3xl ">
            Login
          </button>
        </div>
        <div className="mx-auto flex justify-center flex-col">
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
