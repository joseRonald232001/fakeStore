import React from "react";
import { Link } from "react-router-dom";
import "./PageError.css"; // Asegúrate de tener este archivo de estilos

function PageError() {
  return (
    <div className="error-container">
      <div className="error-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e74c3c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      </div>
      <p className="error-message">Wow something went wrong</p>
      <button className="error-button">
        <Link to="/" className="link">
          Ir a inicio
        </Link>
      </button>
    </div>
  );
}

export default PageError;
