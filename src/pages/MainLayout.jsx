import React from "react";
import Header from "../components/layout/Header";
import AllProducts from "../components/products/AllProducts";
import ShopCart from "../components/shopCart/ShopCart";
import Hero from "../components/layout/Hero";
import Services from "../components/layout/Services";
import { useCart } from "../utils/providers/CartProvicer";
import StatsComponent from "../components/layout/StatsComponent";
import Customers from "../components/layout/Customers";
import Footer from "../components/layout/Footer";

function MainLayout() {
 
  const { shopCartisOpen } = useCart();

  return (
    <>
      <Header />
      <main>
        <Hero />
        {shopCartisOpen ? <ShopCart /> : ""}
        <AllProducts />
        <Services />
        <StatsComponent />
        <Customers />
      </main>
      <Footer/>
 
    </>
  );
}

export default MainLayout;
