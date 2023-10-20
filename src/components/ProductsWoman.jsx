import React, { useEffect } from "react";
import useFetching from "../hooks/useFetching";
import CartClothes from "./CartClothes";
import image13 from "../pictures/image13.jpg";
import paga from '../pictures/paga.png'
import { AiOutlineArrowRight } from "react-icons/ai";
const ProductsWoman = () => {
  const { getAllData, data } = useFetching();
  useEffect(() => {
    getAllData(`https://fakestoreapi.com/products/category/women's clothing`);
  }, []);
  return (
    <>
      <section className=" pt-[110px]  ">
        <div className="w-full  my-1  h-[130px] px-2" >
        <img className="rounded-3xl w-full h-full object-cover  " src={image13} alt="" />
        </div>
        <div className=" py-2 w-full flex items-center px-2 ">
        <h2 className="suptitle">Ropa para mujer</h2>
         <span className="text-xs ml-auto text-gray-500 bg-slate-200 rounded-md p-1 px-3">ver mas <AiOutlineArrowRight style={{display:"inline-block"}}/>  </span>
        </div>
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
        <article className=" text-justify px-2">
          <h3 className="suptitle">Comodidad y Elegancia</h3>
          <p className="text-xs textD py-2">Lorem ipsum es un texto de marcador de posición comúnmente utilizado en publicaciones y diseño gráfico para demostrar la forma visual de un documento</p>
        </article>

        <img src={paga} alt="" />
      </section>
    </>
  );
};

export default ProductsWoman;
