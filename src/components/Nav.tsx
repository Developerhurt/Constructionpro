"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#ongoing", label: "Ongoing" },
  { href: "#upcoming", label: "Upcoming" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'glass border-b border-white/10 shadow-lg' 
          : 'backdrop-blur supports-[backdrop-filter]:bg-black/20'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <div className="text-2xl font-black tracking-tight">
            BUILDING<span className="gradient-text">X</span>
          </div>
          <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse group-hover:animate-bounce"></div>
        </Link>
        
        <button 
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group" 
          onClick={() => setOpen(!open)} 
          aria-label="Toggle menu"
        >
          <motion.span 
            animate={{ rotate: open ? 45 : 0, y: open ? 0 : -6 }}
            className="w-6 h-0.5 bg-white rounded-full transition-colors group-hover:bg-brand-400"
          />
          <motion.span 
            animate={{ opacity: open ? 0 : 1 }}
            className="w-6 h-0.5 bg-white rounded-full transition-colors group-hover:bg-brand-400"
          />
          <motion.span 
            animate={{ rotate: open ? -45 : 0, y: open ? 0 : 6 }}
            className="w-6 h-0.5 bg-white rounded-full transition-colors group-hover:bg-brand-400"
          />
        </button>
        
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <motion.a 
              key={l.href} 
              href={l.href} 
              className="relative group text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-500 to-accent-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
          <motion.a 
            href="#contact" 
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full text-sm font-semibold text-white shadow-glow hover:shadow-glow-purple transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            Get Quote
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </nav>
      </div>
      
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l, i) => (
                <motion.a 
                  key={l.href} 
                  onClick={() => setOpen(false)} 
                  href={l.href} 
                  className="group flex items-center gap-3 py-3 text-white/80 hover:text-white transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-1 h-1 bg-brand-500 rounded-full group-hover:bg-accent-500 transition-colors duration-300"></div>
                  {l.label}
                </motion.a>
              ))}
              <motion.a 
                href="#contact" 
                onClick={() => setOpen(false)}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full text-sm font-semibold text-white shadow-glow hover:shadow-glow-purple transition-all duration-300 hover:scale-105 w-max mt-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                Get Quote
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
