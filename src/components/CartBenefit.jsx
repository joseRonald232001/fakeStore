import React from 'react';

const CartBenefit = ({title,icon,description}) => {
    return (
        <article className='w-[230px] h-[200px] bg-white shadow-md mx-3 text-center p-2 snap-mandatory '>
           <div className='w-min m-auto'>
            {icon}
            </div > 
            <h4 className=' font-bold text-sm'>{title}</h4>
            <p className='text-custom-gray font-medium text-xs'>{description}</p>
        </article>
    );
};  
export default CartBenefit;