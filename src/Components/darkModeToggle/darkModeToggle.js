import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./darkModeToggle.css";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <label className="switch">
      <input
        className="cb"
        type="checkbox"
        checked={darkMode}
        onChange={handleToggle}
      />
      <span className="toggle">
        <span className="left">off</span>
        <span className="right">on</span>
      </span>
    </label>
  );
};

export default DarkModeToggle;
