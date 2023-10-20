import React from "react";

const CartClothes = ({ name,img,price,description }) => {
  return (
    <article className="w-[230px] h-[336px] relative bg-white  flex flex-col cartClothing  shadow-xl  ">
      <div className="w-full bg-gray-300 p-1  h-[100px]">
        <h1 className="texto text-center font-medium">{name}</h1>
      <img className="w-[100px] m-auto" src={img} alt="" />
      </div>
      <div className="mt-auto text-center p-2 pb-10 ">
        <p className="mb-2">${price}</p>
        <p className="texto2 text-xs">
          {description}
        </p>
      </div>
      <button className="p-2 w-[84px] bg-dark-green text-white absolute -bottom-4 right-4   ">
          agregar
        </button>
    </article>
  );
};
export default CartClothes;
