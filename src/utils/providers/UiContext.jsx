import React, { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {

  const loaders = { actionLoader: false, pageLoader: false };

  const [isLoading, setIsLoading] = useState(loaders);
  const [notification, setNotification] = useState("");

  return (
    <UIContext.Provider
      value={{ isLoading, setIsLoading, notification, setNotification }}
    >
      {children}
    </UIContext.Provider>
  );
};

// Hook para usar el contexto
export const useUI = () => {
  return useContext(UIContext);
};
