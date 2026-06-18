"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLink =
    "relative hover:text-blue-700 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-700 hover:after:w-full after:transition-all";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div>
            <h1 className="text-3xl font-bold text-blue-900">
              MediTrust
            </h1>

            <p className="text-xs text-slate-500">
              Multispeciality Hospital
            </p>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-slate-700 font-medium">

            <a href="#home" className={navLink}>
              Home
            </a>

            <a href="#about" className={navLink}>
              About
            </a>

            <a href="#departments" className={navLink}>
              Departments
            </a>

            <a href="#doctors" className={navLink}>
              Doctors
            </a>

            <a href="#testimonials" className={navLink}>
              Testimonials
            </a>

            <a href="#contact" className={navLink}>
              Contact
            </a>

          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">

            <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-4 py-2 rounded-full font-semibold">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </div>

            <button className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
              Book Appointment
            </button>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 py-6">

            <nav className="flex flex-col gap-5 text-slate-700 font-medium">

              <a href="#home" onClick={() => setIsOpen(false)}>
                Home
              </a>

              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>

              <a href="#departments" onClick={() => setIsOpen(false)}>
                Departments
              </a>

              <a href="#doctors" onClick={() => setIsOpen(false)}>
                Doctors
              </a>

              <a href="#testimonials" onClick={() => setIsOpen(false)}>
                Testimonials
              </a>

              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>

              <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-4 py-3 rounded-xl font-semibold">
                <Phone size={18} />
                +91 98765 43210
              </div>

              <button className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-3 rounded-xl">
                Book Appointment
              </button>

            </nav>

          </div>
        )}

      </div>
    </header>
  );
}