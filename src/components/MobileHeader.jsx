import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileHeader = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { path: "/", icon: "bi-house-door-fill", label: "Home" },
        { path: "/about", icon: "bi-person-fill", label: "About" },
        { path: "/portfolio", icon: "bi-briefcase-fill", label: "Portfolio" },
        { path: "/news", icon: "bi-file-text-fill", label: "News" },
        { path: "/contact", icon: "bi-envelope-open-fill", label: "Contact" },
    ];

    return (
        <header className="bg-white w-full  lg:hidden sticky top-0 z-50 shadow-md">
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

                {/* Hamburger for very small screens */}
                {/* <button
                    className="sm:hidden text-gray-900 text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
                </button> */}

                {/* Icon nav for sm+ screens */}
                <div className="flex items-center space-x-3">
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
                </div>
            </nav>

            {/* Dropdown menu for xs screens
            {menuOpen && (
                <div className="sm:hidden bg-white border-t border-gray-200 shadow-lg">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className={`flex items-center gap-3 px-5 py-3 transition-all duration-200 ${location.pathname === item.path
                                ? "bg-blue-50 text-blue-600 font-semibold"
                                : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                }`}
                        >
                            <i className={`bi ${item.icon} text-lg`}></i>
                            <span className="text-base">{item.label}</span>
                        </Link>
                    ))}
                </div>
            )} */}
        </header>
    );
};

export default MobileHeader;
