import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext(); // ya está creado el contexto, LOL, que fácil

function ThemeProviderWrapper(props) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    /* if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    } */

    theme === "light" ? setTheme("dark") : setTheme("light"); // esto va para examen
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {/* ESTO TIENE QUE SER VALUE 
        value será algo así:
        {
            theme: "dark",
            toggleTheme: function()
        }
        POR ESO PUEDO DESESTRUCTURARLO cuando uso el context
    */}
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProviderWrapper };
