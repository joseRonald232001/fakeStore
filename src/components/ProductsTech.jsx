import React, { useEffect } from "react";
import useFetching from "../hooks/useFetching";
import CartClothes from "./CartClothes";

const ProductsTech = () => {
  const { data, getAllData } = useFetching();
  useEffect(() => {
    getAllData("https://fakestoreapi.com/products/category/electronics");
  }, []);
  return (
    <>
    <section className="py-3">

      <div className="flex flex-nowrap overflow-scroll h-[370px] no-scrollbar ">
        {data.map((clothing) => (
            <CartClothes
            key={clothing.id}
            name={clothing.title}
            img={clothing.image}
            price={clothing.price}
            description={clothing.description}
            />
            ))}
      </div>
            </section>
    </>
  );
};

export default ProductsTech;
