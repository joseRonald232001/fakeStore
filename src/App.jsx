import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductsWoman from "./components/ProductsWoman";
import ProductsMen from "./components/ProductsMen";
import ProductsJewelery from "./components/ProductsJewelery";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="snap-y snap-mandatory relative h-screen overflow-auto ">
        <Navbar />
        <section className="snap-center">
          <HeroSection />
        </section>
        <section className="snap-start">
          <ProductsWoman />
          <ProductsMen />
        </section>
        <section className="snap-start">
          <ProductsJewelery />
    
        <Footer/>
        </section>
      </main>
    </>
  );
}

export default App;
