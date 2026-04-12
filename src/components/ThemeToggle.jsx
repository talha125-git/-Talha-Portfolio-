import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = ({ className = "" }) => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`theme-toggle-btn ${isDark ? "dark" : "light"} ${className}`}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            id="theme-toggle"
        >
            <div className="toggle-track">
                <div className="toggle-thumb">
                    {/* Sun */}
                    <div className="sun-icon">
                        <div className="sun-core"></div>
                        <div className="sun-ray ray-1"></div>
                        <div className="sun-ray ray-2"></div>
                        <div className="sun-ray ray-3"></div>
                        <div className="sun-ray ray-4"></div>
                        <div className="sun-ray ray-5"></div>
                        <div className="sun-ray ray-6"></div>
                        <div className="sun-ray ray-7"></div>
                        <div className="sun-ray ray-8"></div>
                    </div>
                    {/* Moon */}
                    <div className="moon-icon">
                        <div className="moon-crescent"></div>
                        <div className="moon-star star-1"></div>
                        <div className="moon-star star-2"></div>
                        <div className="moon-star star-3"></div>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default ThemeToggle;
