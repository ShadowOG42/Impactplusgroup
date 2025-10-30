'use client';

import React, { useEffect, useState, useCallback } from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlFooter = useCallback(() => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) setShowFooter(false);
    else setShowFooter(true);
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlFooter);
    return () => window.removeEventListener("scroll", controlFooter);
  }, [controlFooter]);

  return (
    <footer
      className={`bg-[#293c83] text-white text-sm py-5 px-6 fixed bottom-0 left-0 w-full z-50 transition-transform duration-500 ${
        showFooter ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-3">
        
        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 text-base font-medium">
          <span className="flex items-center gap-2">
            <ReactCountryFlag countryCode="AU" svg style={{ width: "1.4em", height: "1.4em" }} />
            <Phone size={16} /> +61 419 775 400
          </span>
          <span className="flex items-center gap-2">
            <ReactCountryFlag countryCode="ZA" svg style={{ width: "1.4em", height: "1.4em" }} />
            <Phone size={16} /> +27 71 909 2687
          </span>
          <span className="flex items-center gap-2">
            <ReactCountryFlag countryCode="ZW" svg style={{ width: "1.4em", height: "1.4em" }} />
            <Phone size={16} /> +263 772 643 055
          </span>
          <span className="flex items-center gap-2">
            <Mail size={16} />
            <a href="mailto:info@impactplusgroup.com" className="hover:underline">
              info@impactplusgroup.com
            </a>
          </span>
          <span className="flex items-center gap-2">
            <Globe size={16} />
            <a
              href="https://impactplusgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              impactplusgroup.com
            </a>
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-200 text-sm">
          <MapPin size={15} />
          <span>Global Headquarters | Australia • South Africa • Zimbabwe</span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-300 mt-2 font-light tracking-wide">
          © {new Date().getFullYear()} <span className="font-semibold" style={{ fontFamily: "Voltaire Frangela, sans-serif" }}>Impact Plus Group</span> — Empowering Sustainable Growth.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
