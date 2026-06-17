"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-blue-900">
              MediTrust
            </h1>
            <p className="text-xs text-slate-500">
              Multispeciality Hospital
            </p>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-slate-700 font-medium">
            <a href="#home" className="hover:text-blue-700">
              Home
            </a>
            <a href="#about" className="hover:text-blue-700">
              About
            </a>
            <a href="#departments" className="hover:text-blue-700">
              Departments
            </a>
            <a href="#doctors" className="hover:text-blue-700">
              Doctors
            </a>
            <a href="#testimonials" className="hover:text-blue-700">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-blue-700">
              Contact
            </a>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-blue-900 font-semibold">
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </div>

            <button className="bg-blue-900 text-white px-5 py-3 rounded-xl hover:bg-blue-800 transition">
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-900"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-slate-200">
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

              <div className="flex items-center gap-2 text-blue-900 font-semibold pt-2">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>

              <button className="w-full bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-800 transition">
                Book Appointment
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}