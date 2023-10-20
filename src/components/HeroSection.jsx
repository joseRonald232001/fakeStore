import React from 'react';
import heroimage from "../pictures/heroimage.png"
const HeroSection = () => {
    return (
        <>
        <section className='h-screen' >
        <div className='h-[70vh] lightBlue w-full rounded-b-[65px] shadow text-center items-center flex '>
        <img src={heroimage} className='w-[70%]  m-auto' alt="" />
        </div>
        <div className='p-2 text-justify '>
        <h2 className="suptitle " >Estilo que te define</h2>
        <p className='text-sm textD'>Lorem ipsum es un texto de marcador de posición comúnmente utilizado en publicaciones y diseño gráfico para demostrar la forma visual de un documento</p>
        </div>
        </section>
        </>
    );
};

export default HeroSection;