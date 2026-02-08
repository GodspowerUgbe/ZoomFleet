'use client'
import { useState, useEffect } from "react";
import { FaCarAlt, FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll to toggle glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Rent", href: "#" },
    { name: "Buy", href: "#" },
    { name: "Sell", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 py-0" 
        : "bg-transparent py-2"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-1.5 rounded transition-transform group-hover:scale-105">
              <FaCarAlt className={`h-5 w-5 ${isScrolled ? 'text-charcoal' : 'text-white'}`} />
            </div>
            <span className={`text-xl font-black tracking-tighter uppercase transition-colors ${
              isScrolled ? "text-charcoal dark:text-white" : "text-white"
            }`}>
              ZoomFleet
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  isScrolled ? "text-charcoal/70 dark:text-gray-300" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth & Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <button className={`text-sm font-bold px-4 py-2 hover:opacity-70 transition-opacity ${
                isScrolled ? "text-charcoal dark:text-white" : "text-white"
              }`}>
                Sign In
              </button>
              <button className="bg-primary hover:bg-primary/90 text-charcoal px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md active:scale-95">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? "text-charcoal dark:text-white" : "text-white"
              }`}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 transition-all duration-300 overflow-hidden ${
        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-4 text-base font-medium text-charcoal dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-900 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <button className="w-full text-center py-3 font-bold text-charcoal dark:text-white">Sign In</button>
            <button className="w-full bg-primary text-charcoal py-3 rounded-xl font-bold">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
}
