// src/pages/HomePage.jsx

const profileImg = "https://i.imgur.com/i1gsj0v.png";

import languagesJson from "../languages.json";

import { ThemeContext } from "../context/theme.context";
import { LanguageContext } from "../context/language.context";
import { useContext } from "react";

function HomePage() {
  const { theme } = useContext(ThemeContext);

  const { language } = useContext(LanguageContext);

  // console.log(languages[language].heading);

  return (
    <div className={`HomePage ${theme}`}>
      <h1>{languagesJson.headings[language]}</h1>
      <img src={profileImg} className="profile" alt="profile" />
    </div>
  );
}

export default HomePage;
