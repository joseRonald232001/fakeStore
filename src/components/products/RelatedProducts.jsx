import React from "react";
import { useState } from "react";
import { getProductByCategory } from "../../utils/api/products";
import { useEffect } from "react";
import ProductCart from "./ProductCart";
import CartsLoader from "../loaders/CartsLoader";

function RelatedProducts({ handleAddItem, fetchProductById, productById }) {
  const [relatedProduct, setRelatedProducts] = useState([]);

  const fetchProductByCategory = async () => {
    try {
      const res = await getProductByCategory(productById.category);
      setRelatedProducts(res.data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    fetchProductByCategory();
  }, []);

  return (
    <>
      <br />
      <br />
      <h2>Related products</h2>
      <div className="products_content related_section">
        {relatedProduct.length == 0 ? (
          <CartsLoader />
        ) : (
          <>
            {relatedProduct.map((product) => (
              <ProductCart
                key={product.id}
                handleAddItem={handleAddItem}
                fetchProductById={fetchProductById}
                product={product}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default RelatedProducts;
