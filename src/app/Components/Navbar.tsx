"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { List, X } from "lucide-react";
import { usePathname } from "next/navigation";

type NavItem = {
  title: string;
  href: string;
  sub?: { title: string; href: string }[];
};

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Industries", href: "/industries" },
  { title: "Insights", href: "/insights" },
  { title: "Login", href: "/login" },
  { title: "Contact Us", href: "/contacts" },
];

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 50) setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  const handleMouseMove = useCallback(() => setShowNavbar(true), []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", controlNavbar);
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [controlNavbar, handleMouseMove]);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsModalVisible(true), 10);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setTimeout(() => setIsModalOpen(false), 500);
  };

  const handleMenuClick = (title: string) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  const NavLinks = ({ modal }: { modal: boolean }) => (
    <>
      {navItems.map((link) => (
        <li key={link.title} className="relative">
          {link.sub ? (
            <button
              onClick={() => handleMenuClick(link.title)}
              className={`${
                modal ? "text-white" : "text-gray-800"
              } ${pathname === link.href ? "font-semibold text-blue-600" : "hover:text-blue-600"} transform hover:scale-105 transition-transform duration-300`}
            >
              {link.title}
            </button>
          ) : (
            <Link
              href={link.href}
              onClick={modal ? closeModal : undefined}
              className={`${
                modal ? "text-white" : "text-gray-800"
              } ${pathname === link.href ? "font-semibold text-blue-600" : "hover:text-blue-600"} transform hover:scale-105 transition-transform duration-300`}
            >
              {link.title}
            </Link>
          )}

          {!modal && link.sub && openMenu === link.title && (
            <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg py-3 w-72 flex flex-col items-center z-50">
              {link.sub.map((sublink) => (
                <li key={sublink.title} className="w-full text-center">
                  <Link
                    href={sublink.href}
                    onClick={() => setOpenMenu(null)}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    {sublink.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-transform duration-500 bg-white shadow-md ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-full flex justify-between items-center px-4 md:px-6 bg-white bg-opacity-80 backdrop-blur-md">
        <Link href="/" className="flex items-center">
          <Image src="/Certificates/Logo.jpg" width={130} height={35} alt="Impact Plus Logo" />
        </Link>

        <ul className="hidden md:flex space-x-6">
          <NavLinks modal={false} />
        </ul>

        <div className="md:hidden">
          <button onClick={openModal} aria-label="Open mobile menu">
            <List size={26} className="text-blue-600" />
          </button>
        </div>
      </nav>

      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center transition-opacity duration-500 ${
            isModalVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <button onClick={closeModal} className="absolute top-5 right-5 text-white">
            <X size={28} />
          </button>
          <ul className="space-y-6 text-center text-2xl text-white">
            <NavLinks modal={true} />
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
