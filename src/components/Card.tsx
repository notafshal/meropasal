import Image from "next/image";

interface Products {
  image: string;
  title: string;
  price: number;
}

const Card = (product: Products) => {
  const imageUrl = product?.image.startsWith("http")
    ? product.image
    : `https://fakestoreapi.com${product.image}`;
  return (
    <>
      <div className="bg-slate-200 p-10 my-5 h-fit md:h-full hover:bg-red-300 cursor-pointer transition-all rounded-lg">
        <Image
          src={product.image}
          width={150}
          height={150}
          className="rounded-lg mx-auto mb-4 h-2/3"
          alt={product.title}
        />
        <p className="h-11 overflow-hidden font-semibold">{product.title}</p>
        <br />
        <p className="my-1">
          {" "}
          <span className="text-green-700">Price</span> : Rs.
          {product.price}
        </p>
      </div>
    </>
  );
};
export default Card;
