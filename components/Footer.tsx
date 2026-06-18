import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#081028] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              MediTrust
            </h3>

            <p className="text-slate-300 leading-relaxed">
              Providing world-class healthcare services with
              compassion, innovation and excellence for every
              patient and family.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-300">

              <li>
                <a
                  href="#home"
                  className="hover:text-white transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-white transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#departments"
                  className="hover:text-white transition"
                >
                  Departments
                </a>
              </li>

              <li>
                <a
                  href="#doctors"
                  className="hover:text-white transition"
                >
                  Doctors
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-5">
              Services
            </h4>

            <ul className="space-y-3 text-slate-300">

              <li className="hover:text-white transition cursor-pointer">
                Cardiology
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Neurology
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Orthopedics
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Pediatrics
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-5">
              Contact
            </h4>

            <ul className="space-y-4 text-slate-300">

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span>+91 98765 43210</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <span>
                  contact@meditrusthospital.com
                </span>
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-400" />
                <span>Chennai, Tamil Nadu</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-400">
          © 2026 MediTrust Hospital. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}