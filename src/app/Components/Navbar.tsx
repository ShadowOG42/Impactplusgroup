'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { List, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 50) setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(window.scrollY);
    }
  };

  const handleMouseMove = () => setShowNavbar(true);

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
  }, [lastScrollY]);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsModalVisible(true), 10);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setTimeout(() => setIsModalOpen(false), 500);
  };

  const NavLinks = ({ modal }: { modal: boolean }) => (
    <>
      {[
        { name: "Home", href: "/Home" },
        { name: "About", href: "/about" },
        { name: "Mission", href: "/mission" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Contacts", href: "/contacts" },
      ].map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            onClick={() => modal && closeModal()}
            className={`${
              modal ? "text-white" : "text-gray-800"
            } ${pathname === link.href ? "font-semibold text-blue-600" : "hover:text-blue-600"} transform hover:scale-105 transition-transform duration-300`}
          >
            {link.name}
          </Link>
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
      <nav className="w-full max-w-full mx-auto flex justify-between items-center h-16 px-4 md:px-6 bg-gradient-to-b from-white to-blue-50 shadow-md">
        {/* Logo */}
        <Link href="/Home" className="flex items-center">
          <Image
            src="/Certificates/Logo.jpg"
            width={130}
            height={35}
            alt="Impact Plus Logo"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <NavLinks modal={false} />
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={openModal} aria-label="Open mobile menu">
            <List size={26} className="text-blue-600" />
          </button>
        </div>
      </nav>

      {/* Mobile Modal */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center transition-opacity duration-500 ${
            isModalVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white"
          >
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
