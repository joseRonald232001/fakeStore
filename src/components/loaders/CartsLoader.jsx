import React from "react";
import "./loaders.css";

function CartsLoader() {
  return (
    <div className="carts-loader">
      <div className="cart-item">
        <div className="cart-item-image skeleton"></div>
        <div className="cart-item-details">
          <div className="skeleton skeleton-text skeleton-title"></div>
          <div className="skeleton skeleton-text skeleton-price"></div>
        </div>
      </div>

      <div className="cart-item">
        <div className="cart-item-image skeleton"></div>
        <div className="cart-item-details">
          <div className="skeleton skeleton-text skeleton-title"></div>
          <div className="skeleton skeleton-text skeleton-price"></div>
        </div>
      </div>

      <div className="cart-item">
        <div className="cart-item-image skeleton"></div>
        <div className="cart-item-details">
          <div className="skeleton skeleton-text skeleton-title"></div>
          <div className="skeleton skeleton-text skeleton-price"></div>
        </div>
      </div>
      <div className="cart-item">
        <div className="cart-item-image skeleton"></div>
        <div className="cart-item-details">
          <div className="skeleton skeleton-text skeleton-title"></div>
          <div className="skeleton skeleton-text skeleton-price"></div>
        </div>
      </div>

    </div>
  );
}

export default CartsLoader;
