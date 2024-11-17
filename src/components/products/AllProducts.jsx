import React, { useEffect, useState } from "react";
import { getAllProducts, getProductById } from "../../utils/api/products";
import ProductCart from "./ProductCart";
import ProductById from "./ProductById";
import { useUI } from "../../utils/providers/UiContext";
import { useCart } from "../../utils/providers/CartProvicer";
import { getUserIdFromStorage } from "../../utils/api/user";
import { useNavigate } from "react-router-dom";
import blob from "../../assets/vectores/blob.svg";
import blobcircle from "../../assets/vectores/blobcircle.svg";
import FilterProducts from "./FilterProducts";
import CartsLoader from "../loaders/CartsLoader";

function AllProducts() {
  const { setIsLoading, setNotification } = useUI();
  const { addNewItemCart } = useCart();

  const [allProducts, setAllProducts] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const fetchAllProducts = async () => {
    try {
      const response = await getAllProducts();
      setAllProducts(response.data);
      setVisibleProducts(response.data);
    } catch (error) {
      console.error("Error fetching all products:", error);
    }
  };

  const handleAddItemToCart = (product) => {
    const userId = getUserIdFromStorage();
    if (userId) {
      addNewItemCart(product);
      setNotification("Product added successfully");
    } else {
      setNotification("You need to log in");
      navigate("/login");
    }
  };

  const fetchProductDetails = async (productId) => {
    setIsLoading((prevState) => ({
      ...prevState,
      actionLoader: true,
    }));
    try {
      const response = await getProductById(productId);
      setSelectedProduct(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading((prevState) => ({
        ...prevState,
        actionLoader: false,
      }));
    }
  };

  useEffect(() => {
    fetchAllProducts();

    // Ajustar el scroll cuando se muestra un producto individual
    document.body.style.overflow = selectedProduct ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProduct]);

  return (
    <>
      {selectedProduct && (
        <section className="productById_section">
          <ProductById
            handleAddItem={handleAddItemToCart}
            fetchProductById={fetchProductDetails}
            setProductId={setSelectedProduct}
            productById={selectedProduct}
          />
        </section>
      )}

      <section className="products_section">
        <img src={blob} alt="blob" className="blob" />
        <img src={blobcircle} className="blob_circle" alt="blob circle" />
        <FilterProducts
          setIsFiltered={setIsFiltered}
          setVisibleProducts={setVisibleProducts}
        />

        <div className="products_content">
          {visibleProducts.length === 0 ? (
            <CartsLoader />
          ) : (
            <>
              {visibleProducts.map((product) => (
                <ProductCart
                  key={product.id}
                  handleAddItem={handleAddItemToCart}
                  fetchProductById={fetchProductDetails}
                  product={product}
                />
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default AllProducts;
