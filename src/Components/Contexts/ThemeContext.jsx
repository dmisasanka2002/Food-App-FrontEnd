import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext("light");

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const prevTheme = localStorage.getItem("theme");
    if (prevTheme) {
      setTheme(prevTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const values = { theme, setTheme };
  return (
    <ThemeContext.Provider value={values}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
