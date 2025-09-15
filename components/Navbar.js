'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Home, Info, BookOpen, Mail, icons } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const NAV_LINKS = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: Info },
     { href: "#projects", label: "Academic Portfolio", icon: BookOpen },
    { href: "#corporate-connect", label: "Corporate Connect & Internships", icon: BookOpen },
    { href: "#testimonials", label: "Testimonials", icon: BookOpen },
   
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    const handleActive = () => {
      const sections = NAV_LINKS.map(link => document.querySelector(link.href));
      const scrollPos = window.scrollY + 120;
      sections.forEach((sec, i) => {
        if (sec && sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
          setActiveSection(NAV_LINKS[i].href);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("scroll", handleActive);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", handleActive);
    };
  }, []);

  return (
    <>
      {/* Floating Pill Navbar */}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 
  ${scrolled ? "bg-white/90 backdrop-blur-lg shadow-xl" : "bg-white/70 backdrop-blur-md"} 
  rounded-4xl w-[90%] px-9 py-3 border border-amber-100`}
      >


        <div className="flex items-center justify-between gap-x-5">
          {/* Logo */}
          <Link
            href="#home"
            className="text-lg md:text-xl font-bold text-amber-800 hover:text-amber-600 transition-colors whitespace-nowrap mr-2"
          >
            Dr. Anup Ingle
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 ml-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1 text-gray-700 hover:text-amber-600 transition-colors font-medium ${activeSection === link.href ? "text-amber-600 font-semibold" : ""
                  }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-amber-600 transition-all duration-300 
            ${activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            ))}
          </div>


          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              initial={false}
              animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Top Slide Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed top-16 left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl z-50 flex flex-col space-y-4 md:hidden rounded-b-3xl p-4"
          >
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-4 px-4 py-3 rounded-xl hover:bg-amber-50 transition-colors font-medium text-gray-700 ${activeSection === link.href ? "bg-amber-100 text-amber-800" : ""
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={22} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
