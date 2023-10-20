import axios from "axios";
import React, { useEffect } from "react";
import useFetching from "../hooks/useFetching";

const Products = () => {
  const { getAllData, data } = useFetching();

  useEffect(() => {
    getAllData("https://fakestoreapi.com/products");
  }, []);

  console.log(data);
  return <></>;
};

export default Products;
