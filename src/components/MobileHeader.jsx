import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const MobileHeader = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const navItems = [
        { path: "/", icon: "bi-house-door-fill", label: "Home" },
        { path: "/about", icon: "bi-person-fill", label: "About" },
        { path: "/portfolio", icon: "bi-briefcase-fill", label: "Portfolio" },
        { path: "/news", icon: "bi-file-text-fill", label: "News" },
        { path: "/contact", icon: "bi-envelope-open-fill", label: "Contact" },
    ];

    // Close menu when route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuOpen]);

    return (
        <header className="bg-white w-full lg:hidden sticky top-0 z-50 shadow-md" ref={menuRef}>
            <nav className="px-4 py-3 flex justify-between items-center max-w-full">
                <div>
                    <Link to="/">
                        <h1
                            className="text-gray-900 md:block hidden text-2xl font-bold"
                            style={{ fontFamily: "'Roboto Slab', serif" }}
                        >
                            Abutalha Raheem
                        </h1>
                        <h1
                            className="text-gray-900 md:hidden md:text-2xl text-xl font-bold"
                            style={{ fontFamily: "'Roboto Slab', serif" }}
                        >
                            Abutalha
                        </h1>
                    </Link>
                </div>

                {/* Icon nav for sm+ screens */}
                <div className="hidden sm:flex items-center space-x-3">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`text-xl md:text-2xl transition-all duration-300 ${location.pathname === item.path
                                ? "text-blue-600 scale-110"
                                : "text-gray-700 hover:text-blue-600 hover:scale-110"
                                }`}
                            title={item.label}
                        >
                            <i className={`bi ${item.icon}`}></i>
                        </Link>
                    ))}
                    <div className="w-px h-6 bg-gray-300 mx-1"></div>
                    <ThemeToggle />
                </div>

                {/* Hamburger button for xs screens */}
                <div className="flex sm:hidden items-center gap-3">
                    <ThemeToggle />
                    <button
                        className="text-gray-900 text-2xl w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        id="mobile-menu-toggle"
                    >
                        <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} transition-transform duration-300`}></i>
                    </button>
                </div>
            </nav>

            {/* Dropdown menu for xs screens — slides from top */}
            <div
                className={`sm:hidden overflow-hidden transition-all duration-400 ease-in-out ${
                    menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{
                    transitionDuration: "400ms",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
            >
                <div className="bg-white border-t border-gray-200 shadow-inner pb-2">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className={`flex items-center gap-3 px-5 py-3 transition-all duration-200 ${
                                location.pathname === item.path
                                    ? "bg-blue-50 text-blue-600 font-semibold border-l-4 border-blue-500"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600 border-l-4 border-transparent"
                            }`}
                            style={{
                                transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
                                transform: menuOpen ? "translateX(0)" : "translateX(-10px)",
                                opacity: menuOpen ? 1 : 0,
                                transition: "all 0.3s ease",
                            }}
                        >
                            <i className={`bi ${item.icon} text-lg`}></i>
                            <span className="text-base">{item.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default MobileHeader;
