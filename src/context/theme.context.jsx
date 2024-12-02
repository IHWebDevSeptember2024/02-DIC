import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext(); // ya está creado el contexto, LOL, que fácil

function ThemeProviderWrapper(props) {
  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState([]);
  const [language, setLanguage] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
    if (navigator.language) {
      console.log(navigator.language);

      setLanguage(navigator.language);
    }
  }, []);

  function toggleTheme() {
    /* if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    } */

    theme === "light" ? setTheme("dark") : setTheme("light"); // esto va para examen
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme, language }}>
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
