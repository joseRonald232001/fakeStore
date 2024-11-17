import React, { useState } from "react";
import getProductsByCategory from "../../utils/api/productsfilter";
import categories, { getAllProducts } from "../../utils/api/products";
import { useUI } from "../../utils/providers/UiContext";

function FilterProducts({ setVisibleProducts, setIsFiltered }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const { setIsLoading } = useUI();

  const fetchProductsByCategory = async (category) => {
    setActiveCategory(category);
    setIsLoading((prevState) => ({
      ...prevState,
      actionLoader: true,
    }));
    try {
      const res = await getProductsByCategory(category);
      if (category === "all") {
        const products = await getAllProducts();
        setVisibleProducts(products.data);
        return;
      }
      setVisibleProducts(res.data);
      setIsFiltered(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading((prevState) => ({
        ...prevState,
        actionLoader: false,
      }));
    }
  };

  return (
    <>
      <div className="products_filter">
        <div className="products_filter_content">
          <h2>
            Explore our <span>products</span>
          </h2>
          <div className="products_category">
            {categories.map((category) => (
              <div
                key={category.name}
                onClick={() => fetchProductsByCategory(category.name)}
                className={
                  activeCategory === category.name
                    ? "products_category-active"
                    : ""
                }
              >
                {category.alias}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterProducts;
