import React, { useEffect } from "react";
import useFetching from "../hooks/useFetching";
import CartClothes from "./CartClothes";
import { BiStore, BiUserCheck } from "react-icons/bi";
import { AiFillCar, AiOutlineArrowRight, AiOutlineShoppingCart } from "react-icons/ai";
import CartBenefit from "./CartBenefit";

const ProductsMen = () => {
  const { data, getAllData } = useFetching();
  useEffect(() => {
    getAllData(`https://fakestoreapi.com/products/category/men's clothing`);
  }, []);

  const benefits = [
    {
      icon: <BiStore />,
      title: "RETIRA EN TIENDA",
      description: "puedes retirar tu pedido en nuestras sucursales",
    },
    {
      icon: <AiFillCar />,
      title: "ENTREGAS A TU HOGAR",
      description: "recibe tus productos desde tu hogar",
    },
    {
      icon: <AiOutlineShoppingCart />,
      title: "GRANDES DESCUENTOS",
      description: "ver combos y pormociones",
    },
    {
      icon: <BiUserCheck />,
      title: "ATENCION AL CLIENTE",
      description: "la mejor atencion para nuestros clientes",
    },
  ];

  return (
    <section className=" pt-3 ">
      <div className="flex px-2">
      <h3 className="suptitle">Ropa para hombre</h3>
      <span className="text-xs ml-auto text-gray-500 bg-slate-200 rounded-md p-1 px-3">ver mas <AiOutlineArrowRight style={{display:"inline-block"}}/>  </span>
      </div>

      <div className="flex flex-nowrap overflow-scroll h-[370px] my-3 no-scrollbar">
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
      <section className="bg-[#EEEEEE] h-[310px] items-center  w-full flex flex-nowrap overflow-scroll md:overflow-auto no-scrollbar ">
        {benefits.map((benefit) => (
          <div key={benefit.title} >
            <CartBenefit
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              />
              </div>
        ))}
      </section>
    </section>
  );
};

export default ProductsMen;
