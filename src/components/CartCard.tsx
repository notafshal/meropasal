import Image from "next/image";

interface Items {
  image: string;
  title: string;
  price: number;
}
const CartCard = (items: Items) => {
  return (
    <>
      <div className=" bg-gray-300 my-3 p-2 rounded-lg">
        <div className="flex flex-row gap-2 justify-evenly">
          <Image src={items.image} alt="item image" width={50} height={50} />
          {items.title}
          <br />
          <p>
            Rs.
            <span className="text-white bg-green-400 h-fit rounded-lg p-1">
              {items.price}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
export default CartCard;
