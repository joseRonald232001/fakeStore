import React from "react";
import RelatedProducts from "./RelatedProducts";
import close from "../../assets/icons/close.svg";

function ProductById({
  handleAddItem,
  fetchProductById,
  setProductId,
  productById,
}) {
  return (
    <>
      <div className="productById_content ">
        
        <button
          className="productById_button"
          onClick={() => setProductId(null)}
          type="button"
        >
          <img src={close} alt="close icon" />
        </button>

        <div className="productById">
          <figure className="productById_figure">
            <img src={productById.image} alt={productById.title} />
          </figure>
          <div className="productById_paragraph">
            <h2>{productById.title}</h2>
            <p>{productById.price}$</p>
            <p>{productById.description}</p>
            <button onClick={() => handleAddItem(productById)}>add to cart</button>
          </div>
        </div>
        <br />

        <RelatedProducts
        handleAddItem={handleAddItem}
          fetchProductById={fetchProductById}
          productById={productById}
        />
      </div>
    </>
  );
}

export default ProductById;
