import { IoIosArrowRoundBack } from "react-icons/io";

const GoBack = () => {
  const previousPage = () => {
    window.history.back();
  };
  return (
    <>
      <IoIosArrowRoundBack
        className="text-white bg-red-500 rounded-full w-5 h-5 mx-2 my-2 cursor-pointer lg:hidden "
        onClick={previousPage}
      />
    </>
  );
};
export default GoBack;
