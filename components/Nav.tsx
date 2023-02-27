"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface NavProps {
  links: {
    href: string;
    label: string;
  }[];
}

const Nav: React.FC<NavProps> = ({ links }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const navVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
    closed: {
      y: -50,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  return (
    <nav
      className={`flex justify-between items-center py-4 px-6 bg-white shadow-sm`}
    >
      <div className={`flex items-center`}>
        <a href="/" className={`text-lg font-semibold text-gray-800`}>
          Casey Murtaugh
        </a>
      </div>
      <div className={`hidden md:flex`}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`mx-4 text-gray-600 hover:text-gray-800`}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className={`md:hidden flex items-center`}>
        <button
          type="button"
          className={`text-gray-500 hover:text-gray-600 focus:outline-none`}
          onClick={toggleMobileNav}
        >
          {isMobileNavOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {isMobileNavOpen && (
        <motion.div
          className={`md:hidden absolute top-16 left-0 right-0 bg-white z-10`}
          initial="closed"
          animate="open"
          variants={navVariants}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100`}
              onClick={toggleMobileNav}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
