import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/stylesheets/index.css";
import App from "./App.jsx";
import { UIProvider } from "./utils/providers/UiContext.jsx";
import { CartProvider } from "./utils/providers/CartProvicer.jsx";

createRoot(document.getElementById("root")).render(
  <UIProvider>
    <CartProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </CartProvider>
  </UIProvider>
);
