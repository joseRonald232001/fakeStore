import React from "react";
import cartPlus from "../../assets/icons/cartPlus.svg";

function ProductCart({ product, fetchProductById, handleAddItem }) {
  return (
    <article className="product_cart">
      <figure
        className="product_figure"
        onClick={() => fetchProductById(product.id)}
      >
        <img src={product.image} alt={product.title} />
      </figure>
      <p>{product.category}</p>
      <h2>{product.title}</h2>
      <div className="product_footer">
        <p>{product.price}$</p>
        <button
          onClick={() => {
            handleAddItem(product);
          }}
        >
          <img src={cartPlus} alt="icon cartPlus" />
        </button>
      </div>
    </article>
  );
}

export default ProductCart;
