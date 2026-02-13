import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaEnvelope,
  FaBlog,
} from "react-icons/fa";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { BackgroundContext } from "./BackgroundContext";


const FloatingNavbar = () => {
  const { isDark, toggleBackground } = useContext(BackgroundContext);
  const location = useLocation();

  const menuItems = [
    { icon: <FaHome />, text: "Home", link: "/home" },
    { icon: <FaInfoCircle />, text: "About", link: "/about" },
    { icon: <FaProjectDiagram />, text: "Projects", link: "/projects" },
    { icon: <FaEnvelope />, text: "Contact", link: "/contact" },
    { icon: <FaBlog />, text: "Blog", link: "/blog" },
  ];

  return (
    <nav
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex justify-around items-center px-2 md:px-6 py-3 w-[90%] max-w-3xl rounded-xl backdrop-blur-md shadow-xl ${
        isDark ? "bg-black/50 text-white" : "bg-white/60 text-black"
      }`}
    >
      {menuItems.map(({ icon, text, link }) => {
        const isActive = location.pathname === link;
        return (
          <Link
            key={text}
            to={link}
            className={`flex flex-col items-center text-[11px] sm:text-xs ${
              isActive ? "text-[#cf9a1e]" : "hover:text-[#cf9a1e]"
            }`}
          >
            <span className="text-xl">{icon}</span>
            <span className="mt-1">{text}</span>
          </Link>
        );
      })}
      <button
        onClick={toggleBackground}
        className="flex flex-col items-center text-[11px] sm:text-xs hover:text-[#cf9a1e]"
      >
        <span className="text-xl">
          {isDark ? <MdLightMode /> : <MdDarkMode />}
        </span>
        <span className="mt-1">Theme</span>
      </button>
    </nav>
  );
};

export default FloatingNavbar;


