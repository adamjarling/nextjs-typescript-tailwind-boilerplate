"use client";

import { FiMenu, FiX } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

interface NavProps {
  links: {
    href: string;
    label: string;
  }[];
}

const Nav: React.FC<NavProps> = ({ links }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      setOpacity(Math.ceil(v));
    });
  }, [scrollYProgress]);

  const navVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
    },
  };

  return (
    <nav
      className={`flex justify-between items-center py-4 px-6  shadow-sm fixed top-0 w-full z-20`}
    >
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: opacity }}
        transition={{
          duration: 0.5,
        }}
      ></motion.div>

      <div className={`flex items-center opacity-100 z-30`}>
        <a href="/" className={`text-lg font-semibold text-white uppercase`}>
          My Website
        </a>
      </div>
      <div className={`hidden md:flex uppercase opacity-100 z-30`}>
        {links.map((link) => (
          <a key={link.label} href={link.href} className={`mx-4 text-white `}>
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile menu button */}
      <div className={`md:hidden flex items-center z-20`}>
        <button
          type="button"
          className={`text-white hover:text-gray-200 focus:outline-none`}
          onClick={toggleMobileNav}
        >
          {isMobileNavOpen ? (
            <FiX size={28} color="white" />
          ) : (
            <FiMenu size={28} />
          )}
        </button>
      </div>
      {isMobileNavOpen && (
        <motion.div
          className={`md:hidden fixed inset-0 bg-black z-10 h-screen`}
          initial="closed"
          animate="open"
          variants={navVariants}
        >
          <div className="mt-20">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block text-3xl py-2 px-4 text-white hover:text-gray-200`}
                onClick={toggleMobileNav}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
