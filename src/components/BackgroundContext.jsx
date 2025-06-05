import React, { createContext, useState, useEffect } from "react";

const BackgroundContext = createContext();

const BackgroundProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Load initial state from localStorage, or default to true
    const storedMode = localStorage.getItem("isDark");
    return storedMode === null ? true : storedMode === "true";
  });

  const toggleBackground = () => {
    setIsDark((prev) => {
      const newValue = !prev;
      localStorage.setItem("isDark", newValue);
      return newValue;
    });
  };

  //  Sync localStorage if someone else modifies it
  useEffect(() => {
    const handleStorageChange = () => {
      const storedMode = localStorage.getItem("isDark");
      if (storedMode !== null) {
        setIsDark(storedMode === "true");
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <BackgroundContext.Provider value={{ isDark, toggleBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export { BackgroundContext, BackgroundProvider };
