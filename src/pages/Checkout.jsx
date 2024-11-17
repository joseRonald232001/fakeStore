import React from "react";
import tarjet from "../assets/images/tarjet.webp";
import { useCart } from "../utils/providers/CartProvicer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { shopCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (shopCart) {
      const total = shopCart.reduce(
        (acc, element) => acc + element.price * element.quantity,
        0
      );
      const formattedTotal =
        total % 1 === 0 ? total.toFixed(0) : total.toFixed(4);
      setTotalPrice(parseFloat(formattedTotal));
    }

    if (totalPrice == 0) {
      setMessage(true);
    } else {
      setMessage(false);
    }
  }, [shopCart, message]);

  return (
    <>
      <section className="checkout_section">
        {message ? (
          <p>There are no products in your cart</p>
        ) : (
          <div className="checkout_content">
            <figure className="checkout_figure">
              <img src={tarjet} alt="tarjet image" />
            </figure>
            <form className="checout_form">
              <h2>Payment Details</h2>
              <input type="text" placeholder="CARD NUMBER" />
              <input type="text" placeholder="CARDHOLDER NAME" />
              <fieldset>
                <input type="text" placeholder="12" />
                <input type="text" placeholder="2020" />
                <input type="text" placeholder="CVV" />
              </fieldset>

              <div className="checkout_butons">
                <button>
                  CONFIRM AND PAY <span>{totalPrice} $</span>
                </button>
                <button type="button" onClick={() => navigate(-1)}>
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
    </>
  );
}

export default Checkout;
