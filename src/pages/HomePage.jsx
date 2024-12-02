// src/pages/HomePage.jsx

const profileImg = "https://i.imgur.com/i1gsj0v.png";

import languages from "../languages.json";

import { ThemeContext } from "../context/theme.context";
import { useContext } from "react";

function HomePage() {
  const { theme, language } = useContext(ThemeContext);

  // console.log(languages[language].heading);

  return (
    <div className={`HomePage ${theme}`}>
      <h1>Helloooo</h1>
      <img src={profileImg} className="profile" alt="profile" />
    </div>
  );
}

export default HomePage;
