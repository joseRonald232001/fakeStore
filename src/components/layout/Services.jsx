import React from "react";
import clothesProduct from "../../assets/icons/clothesProduct.svg";
import destokProduct from "../../assets/icons/destokProduct.svg";
import partyPopper from "../../assets/icons/partyPopper.svg";
import arrowRigthGren from "../../assets/icons/arrowRigthGren.svg";

function Sevices() {
  return (
    <>
      <section className="services_section">
        <h2 style={{ textAlign: "center" }}>
          Amazing <span>Products </span>
        </h2>
        <div className="services_content">
          <article>
            <img src={clothesProduct} alt="clothes figure" />

            <h3>230+ Products</h3>
            <p>Lorem ipsum donor amet siti ceali placeholder text</p>
            <button>
              Learn More
              <img src={arrowRigthGren} alt="arrow_rigth icon" />
            </button>
          </article>

          <article>
            <img src={destokProduct} alt="destok figure" />
            <h3>Professional Electronics</h3>
            <p>Lorem ipsum donor amet siti ceali placeholder text</p>
            <button>
              Learn More
              <img src={arrowRigthGren} alt="arrow_rigth icon" />
            </button>
          </article>

          <article>
            <img src={partyPopper} alt="party figure" />
            <h3>Branded Clothing</h3>
            <p>Lorem ipsum donor amet siti ceali placeholder text</p>
            <button>
              Learn More
              <img src={arrowRigthGren} alt="arrow_rigth icon" />
            </button>
          </article>
        </div>
      </section>
    </>
  );
}

export default Sevices;
