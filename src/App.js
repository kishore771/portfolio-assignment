// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [section, setSection] = useState("home");

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleSectionChange = (sectionName) => {
    setSection(sectionName);
  };

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Navbar toggleTheme={toggleTheme} onSectionChange={handleSectionChange} darkMode={darkMode} />
        {section === "home" && <Hero darkMode={darkMode} />}
        {section === "about" && <About darkMode={darkMode} />}
      </div>
    </Router>
  );
};

export default App;
