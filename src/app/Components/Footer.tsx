'use client';
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlFooter = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowFooter(false);
      } else {
        setShowFooter(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlFooter);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", controlFooter);
      }
    };
  }, [lastScrollY]);

  return (
    <footer
      className={`bg-blue-900 text-white text-sm py-6 px-5 fixed bottom-0 left-0 w-full z-50
        transition-transform duration-500
        ${showFooter ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Section */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Impact Plus Group — Transformative Consulting. Real Results.
        </p>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center">
          <span>🌍 Australia: +61 41 977 5400</span>
          <span>🇿🇦 South Africa: +27 719092687</span>
          <span>🇿🇼 Zimbabwe: +263 772 264 3055</span>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <a href="mailto:info@impactplusgroup.com" className="hover:underline">
            info@impactplusgroup.com
          </a>
          <p>
            <a href="https://impactplusgroup.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              www.impactplusgroup.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
