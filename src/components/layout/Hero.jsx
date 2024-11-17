import React from "react";
import womanHero from "../../assets/images/womanHero.webp";

function Hero() {
  return (
    <>
      <section  id="home" className="hero_section">
        <div className="hero_content">
          <article className="hero_paragraph">
            <span>---STYLE FOR ALL</span>
            <h1>
              Discover the Fashion That
              <br />
              <span>Defines You</span>
            </h1>
            <button className="hero_button">DISCOVER MORE</button>
          </article>
          <figure className="hero_figure">
            <img src={womanHero} alt="woman" />
          </figure>
        </div>
      </section>
    </>
  );
}

export default Hero;
