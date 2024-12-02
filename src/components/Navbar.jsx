// src/components/Navbar.jsx

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";
import { LanguageContext } from "../context/language.context";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { setLanguage } = useContext(LanguageContext);

  return (
    <nav className={`Navbar ${theme}`}>
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
      </div>
      <button onClick={toggleTheme}>
        change theme {theme === "dark" ? "🌞" : "🌛"}
      </button>
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="en-US">Language</option>
        <option value="en-US">English</option>
        <option value="es-ES">Español</option>
        <option value="fr-FR">Français</option>
        <option value="de-DE">Deutsch</option>
        <option value="it-IT">Italiano</option>
        <option value="pt-PT">Português</option>
        <option value="zh-CN">中文</option>
        <option value="ja-JP">日本語</option>
        <option value="ko-KR">한국어</option>
        <option value="ru-RU">Русский</option>
        <option value="el-GR">Ελληνικά</option>
      </select>
    </nav>
  );
}

export default Navbar;
