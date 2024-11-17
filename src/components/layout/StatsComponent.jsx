import React from "react";
import shoppingGirl from "../../assets/images/shoppingGirl.webp";
import Grid from "../../assets/vectores/Grid.svg"
function StatsComponent() {
  return (
    <>
      <section className="stats_section">
        <div className="stats_content">
          <div className="stats_paragraph">
            <h2>
              Why Choose <span>FakeStore ?</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>

            <ul>
              <li>
                100,000+ <span>Orders</span>
              </li>
              <li>
                15,000+ <span>Customers </span>
              </li>
              <li>
                2,000+ <span>Products</span>
              </li>
            </ul>
            <button>Shop Now</button>
          </div>
          <figure className="stats_figure">
            <img  className="shopingGirl" src={shoppingGirl} alt="shopping girl image" />
            <img  className="vector_Grid" src={Grid} alt="vector Grid" />
          </figure>
        </div>
      </section>
    </>
  );
}

export default StatsComponent;
