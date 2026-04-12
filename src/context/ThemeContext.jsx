import React, { createContext, useContext, useState, useEffect, useRef } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem("theme");
        return saved ? saved === "dark" : true;
    });
    const isFirstRender = useRef(true);

    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;

        // Add transitioning class ONLY after first render (not on page load)
        if (!isFirstRender.current) {
            html.classList.add("theme-transitioning");
        }

        if (isDark) {
            body.classList.remove("light-mode");
            body.classList.add("bg-gray-900", "text-white");
            body.classList.remove("bg-white", "text-gray-900");
        } else {
            body.classList.add("light-mode");
            body.classList.remove("bg-gray-900", "text-white");
            body.classList.add("bg-white", "text-gray-900");
        }

        localStorage.setItem("theme", isDark ? "dark" : "light");

        // Remove transitioning class after animation completes
        if (!isFirstRender.current) {
            const timer = setTimeout(() => {
                html.classList.remove("theme-transitioning");
            }, 700);
            return () => clearTimeout(timer);
        }

        isFirstRender.current = false;
    }, [isDark]);

    const toggleTheme = () => setIsDark((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
