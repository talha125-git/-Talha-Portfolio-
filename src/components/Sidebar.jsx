import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/portfolio", label: "Portfolio" },
        { path: "/news", label: "News" },
        { path: "/contact", label: "Contact" },
    ];

    const handleNavClick = (path) => {
        navigate(path, { replace: true });
    };

    return (
        <div className="fixed top-0 left-0 h-screen w-[320px] lg:flex lg:flex-col justify-between  hidden lg:block bg-black text-white p-5 z-50">
            <div className="absolute top-6 left-6">
                <ThemeToggle />
            </div>
            <div className="flex justify-center">
                <h1
                    className="uppercase mt-20 text-4xl font-medium leading-[50px]"
                    style={{ fontFamily: "'Roboto Slab', serif" }}>
                    Abutalha Raheem
                </h1>
            </div>
            <nav className="mt-10">
                <ul className="space-y-2 ml-11">
                    {navItems.map((item) => (
                        <li
                            key={item.path}
                            className={`text-lg cursor-pointer transition-all duration-300 ${location.pathname === item.path
                                ? "text-white tracking-widest font-semibold"
                                : "text-slate-300 hover:text-white hover:tracking-widest"
                                }`}
                            onClick={() => handleNavClick(item.path)}
                        >
                            <span>{item.label}</span>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="mt-10">
                <p className="text-slate-300 italic text-lg">© 2026 Pakistan
                    Created by <br />
                    <span className="hover:text-white hover:tracking-widest cursor-pointer ml-2 transition-all duration-300"> Talha</span>
                </p>
            </div>
        </div>
    );
};

export default Sidebar;
