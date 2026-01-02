import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";

import {
  Menu,
  X,
  ArrowUpRight,
  Linkedin,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

import mainLogo from "../img/fst-logo.png";
import mainLogoF from "../img/fst-logoF.png";
const navLinks = [
  { name: "Home", page: "Home" },
  { name: "About", page: "About" },
  { name: "Services", page: "Services" },
  { name: "Contact", page: "Contact" }
];

const socialLinks = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" }
];

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  /* ----------------------------------------
   * Scroll detection
   * --------------------------------------*/
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ----------------------------------------
   * Route-based body class
   * --------------------------------------*/
  useEffect(() => {
    const routeClass = location.pathname
      .replace(/\//g, '-')   // "/about-us" → "-about-us"
      .replace(/^-/, '');    // remove leading dash

    document.body.className = '';
    document.body.classList.add(
      'route',
      routeClass ? `route-${routeClass}` : 'route-home'
    );

    return () => {
      document.body.className = '';
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-2">
              <div className="w-40 pt-2">
                <img src={mainLogo} alt="First Source Cloud Printing" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={createPageUrl(link.page)}
                  className={`text-sm font-medium text-blue-600 hover:text-dark-600 ${
                    isScrolled
                      ? 'text-slate-600'
                      : 'hover:text-dark-blue'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white rounded-full px-6">
                  Get Started
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100"
            >
              <div className="px-6 py-4 space-y-3">
                {navLinks.map(link => (
                  <Link
                    key={link.name}
                    to={createPageUrl(link.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-slate-600 hover:text-violet-600 font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to={createPageUrl("Contact")}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-full mt-4">
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main */}
      <main>{children}</main>

      {/* Footer */}
    <footer className="bg-slate-900 text-white py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">
    
    {/* Brand Block */}
    <div className="flex flex-col items-center mb-16">
      <div className="flex items-center gap-2 mb-6">
         <div className="w-40 pt-2">
                <img src={mainLogoF} alt="First Source Cloud Printing" />
              </div>
      </div>

      <p className="text-slate-400 max-w-md mb-6">
        Award-winning First Source Cloud Printing driving measurable growth.
      </p>

      <div className="flex gap-3 justify-center">
        {socialLinks.map((social, i) => (
          <a
            key={i}
            href={social.href}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-violet-600 transition-colors"
          >
            <social.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="pt-8 border-t border-slate-800">
      <p className="text-slate-500 text-sm">
        © 2024 First Source Cloud Printing. All rights reserved.
      </p>
    </div>

  </div>
</footer>

    </div>
  );
}
