import Link from "next/link";

interface Card {
  icon: any;
  name: string;
}

const CategoryCard = (props: Card) => {
  return (
    <>
      <Link href={`/category/${props.name}`}>
        <div className="bg-gray-300 mx-4 my-2 rounded-md h-18 w-36 flex flex-col gap-2 justify-center  p-6  hover:border-b-2- hover:cursor-pointer">
          <div className="text-lg mx-auto"> {props.icon}</div>
          <div className="text-center"> {props.name}</div>
        </div>
      </Link>
    </>
  );
};
export default CategoryCard;
