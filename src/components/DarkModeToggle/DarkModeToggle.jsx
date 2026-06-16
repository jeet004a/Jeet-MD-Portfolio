"use client"

import React, { useContext } from "react";
import styles from "./darkmodeToggle.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
const DarkModeToggle = () => {
  const handleClick = () => {
    const audio = new Audio("/MouseClick.mp3");

    audio.play().catch((err) => {
      console.error("Audio play failed:", err);
    });

    toggle();
  };
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <button
      type="button"
      onClick={handleClick}
      className={styles.button}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {mode === "light" ? (
        <Sun className={styles.sun} />
      ) : (
        <Moon className={styles.moon} />
      )}
    </button>
  );
};

export default DarkModeToggle;