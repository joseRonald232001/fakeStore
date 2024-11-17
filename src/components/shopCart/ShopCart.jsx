import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useCart } from "../../utils/providers/CartProvicer";
import arrowRigth from "../../assets/icons/arrow-rigth.svg";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";
import { Link } from "react-router-dom";

function ShopCart() {
  const {
    shopCart,
    removeOrDecreaseItemCart,
    addNewItemCart,
    shopCartIsOpen,
    setShopCartIsOpen,
  } = useCart();

  const [products, setProducts] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setProducts(shopCart);

    if (shopCart) {
      const total = shopCart.reduce(
        (acc, element) => acc + element.price * element.quantity,
        0
      );
      const formattedTotal =
        total % 1 === 0 ? total.toFixed(0) : total.toFixed(4);
      setTotalPrice(parseFloat(formattedTotal));
    }

    document.body.style.overflow = !shopCartIsOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [shopCart]);

  return (
    <>
      <section className="shopCart_section">
        <div className="shopCart_content">
          <div className="shopCart_header">
            <p>SHOPPING BAG ({products ? products.length : "0"})</p>

            <button onClick={() => setShopCartIsOpen(false)}>
              <img src={arrowRigth} alt="arrow-rigth icon" />
            </button>
          </div>

          <div className="shopCart_products">
            {products
              ? products.map((product) => (
                  <article className="shopCart_product" key={product.id}>
                    <div className="productInfo">
                      <img src={product.image} alt="product image" />
                      <div>
                        <p>{product.title}</p>
                        <div className="shopCart_buttons">
                          <button
                            onClick={() => removeOrDecreaseItemCart(product)}
                          >
                            <img src={minus} alt="" />
                          </button>
                          <p>{product.quantity}</p>
                          <button onClick={() => addNewItemCart(product)}>
                            <img src={plus} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <p>{product.price} $</p>
                  </article>
                ))
              : ""}
          </div>

          <div className="shopCart_totalPrice">
            <p>TOTAL: $ {totalPrice}</p>
            <br />
            <Link to={"/pay"}>
              <button className="checkout">Checkout</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopCart;
