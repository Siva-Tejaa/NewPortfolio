import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import MobileNav from "./Header/MobileNav";

import { Context } from "./utils/Context";

const App = () => {
  const dialogModal = useRef(null);

  const [activeItem, setActiveItem] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [chronoRender, setChronoRender] = useState(0);

  //Scroll to Specific Section in Page
  const scrollToTarget = (targetID) => {
    document.getElementById(targetID).scrollIntoView({ block: "start" });
    setActiveItem(targetID);
  };

  //Get Theme of Light & Dark Mode from Local Storage
  const getLightDarkTheme = () => {
    let theme = localStorage.getItem("darkMode");
    setDarkMode(JSON.parse(theme));
  };

  //Light & Dark Mode Functionality
  const setLightDarkTheme = () => {
    setDarkMode(!darkMode);
    setChronoRender(chronoRender + 1);
    localStorage.setItem("darkMode", !darkMode);

    //For Notification
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification("Theme Changed");
      }
    });
  };

  //Contact Page Dialog Functions
  const closeDialog = (e) => {
    e.preventDefault();
    if (dialogModal.current) {
      dialogModal.current.close();
    }
  };

  const openDialog = (e) => {
    e.preventDefault();
    if (dialogModal.current) {
      dialogModal.current.showModal();
    }
  };

  //Console Content
  const consoleStyles = `
    font-family: Dancing Script, cursive;
    padding-bottom: 6px;
    padding-top:1px;
    background-color:#474BFF;
    color:#FFFF;
    border-radius:4px;
    font-size:26px;
  `;

  useEffect(() => {
    getLightDarkTheme();

    //Console Content
    console.clear();
    console.log("%c <𝕾𝖎𝖛𝖆 𝕿𝖊𝖏𝖆/> ", consoleStyles);
    console.log("Welcome to my Portfolio Website. Happy Debugging! :)");
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Context.Provider
        value={{
          activeItem,
          setActiveItem,
          darkMode,
          scrollToTarget,
          setLightDarkTheme,
          chronoRender,
          dialogModal,
          openDialog,
          closeDialog,
        }}
      >
        <Header />
        <MobileNav />
        <main className="bg-background3 dark:bg-[#252424]">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </Context.Provider>
    </div>
  );
};

export default App;
