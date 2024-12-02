import { createContext, useEffect, useState } from "react";

const LanguageContext = createContext(); // ya está creado el contexto, LOL, que fácil

function LanguageProviderWrapper(props) {
  const [language, setLanguage] = useState(navigator.language || "en-EN"); // en caso de que no haya navigator.language, se pone "en-EN"
  console.log(language);
  

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProviderWrapper };
