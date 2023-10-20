import React, { useEffect } from 'react';
import useFetching from '../hooks/useFetching';
import CartClothes from './CartClothes';
import descs from '../pictures/descs.png'
import ProductsTech from './ProductsTech';
import { AiOutlineArrowRight } from 'react-icons/ai';


const ProductsJewelery = () => {

    const{data,getAllData}=useFetching()
    useEffect(()=>{
        getAllData('https://fakestoreapi.com/products/category/jewelery')
    },[])
    return (
        <>
        <section className='h-auto pt-[110px] '>
            <div className='flex p-2 '>
            <h3 className='suptitle'>
                Productos de joyeria
            </h3>
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
        <img className='px-2' src={descs} alt="" />
        <div className='flex p-2 '>
            <h3 className='suptitle'>
                Productos electronicos
            </h3>
            <span className="text-xs ml-auto text-gray-500 bg-slate-200 rounded-md p-1 px-3">ver mas <AiOutlineArrowRight style={{display:"inline-block"}}/>  </span>
            </div>

        <ProductsTech/>
      
         </section>
        </>
    );
};

export default ProductsJewelery;