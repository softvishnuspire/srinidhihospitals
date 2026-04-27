"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../app/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#why-choose-us" },
  { label: "Specialties", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-primary text-white text-xs py-2 px-8 hidden md:flex justify-between items-center z-[60] relative">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Phone size={12} />
            7207110444
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={12} />
            Opp. More Super Market, College Road, Amalapuram
          </span>
        </div>
        <span className="text-accent font-semibold tracking-wide">24/7 Emergency Services Available</span>
      </div>

      {/* Main navbar */}
      <header
        className={cn(
          "sticky top-0 w-full z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,106,146,0.08)] border-b border-secondary/10"
            : "bg-white border-b border-gray-100"
        )}
      >
        <div className="container mx-auto px-6 md:px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <Image 
              src={logo} 
              alt="Srinidhi Hospitals Logo" 
              className="h-10 w-auto object-contain" 
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200 font-body rounded-lg hover:bg-primary/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="tel:7207110444"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-container transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <Phone size={14} className="text-accent" />
              </div>
              <span className="hidden xl:inline">Call Us</span>
            </Link>
            <button className="bg-gradient-to-r from-tertiary to-accent text-white px-5 py-2.5 rounded-xl font-headline font-bold shadow-md hover:shadow-lg hover:shadow-accent/20 transition-all active:scale-95 text-sm cursor-pointer">
              Emergency 24/7
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-primary/5 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} className="text-primary" /> : <Menu size={22} className="text-primary" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100",
            mobileOpen ? "max-h-96 py-4" : "max-h-0"
          )}
        >
          <nav className="container mx-auto px-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-on-surface-variant hover:text-primary hover:bg-primary/5 rounded-xl transition-all cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};
