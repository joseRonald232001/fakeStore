import React from "react";
import Stars from "../../assets/vectores/Stars.svg";
import pic from "../../assets/images/pic.png";
import pic1 from "../../assets/images/pic1.png";
import pic2 from "../../assets/images/pic2.png";
import pic3 from "../../assets/images/pic3.png";

function Customers() {
  return (
    <>
      <section className="customers_section">
        <h2>
          See what our customers say about <span>FakeStore</span>
        </h2>
        <div className="customers_content">
          <article className="cart_customer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut
            </p>

            <div>
              <h3>Satara Notur</h3>
              <br />
              <p>Rio de Janeiro, Brasil</p>
              <img className="vector_starts" src={Stars} alt="vector stars" />
            </div>

            <img className="customer_profile" src={pic} alt="user profile" />
          </article>
          <article className="cart_customer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut
            </p>

            <div>
              <h3>Moses Beier</h3>
              <br />
              <p>Cochabamba, Bolivia</p>
              <img className="vector_starts" src={Stars} alt="vector stars" />
            </div>

            <img className="customer_profile" src={pic1} alt="user profile" />
          </article>
          <article className="cart_customer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut
            </p>

            <div>
              <h3>Heidi Stamm</h3>
              <br />
              <p>Punta Arenas, Chile</p>
              <img className="vector_starts" src={Stars} alt="vector stars" />
            </div>

            <img className="customer_profile" src={pic3} alt="user profile" />
          </article>
          <article className="cart_customer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut
            </p>

            <div>
              <h3>Garry Rohan</h3>
              <br />
              <p>Medellín, Colombia</p>
              <img className="vector_starts" src={Stars} alt="vector stars" />
            </div>

            <img className="customer_profile" src={pic2} alt="user profile" />
          </article>
        </div>
      </section>
    </>
  );
}

export default Customers;
