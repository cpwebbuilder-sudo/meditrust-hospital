export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <h3 className="text-2xl font-bold mb-4">
              MediTrust
            </h3>

            <p className="text-slate-300">
              Providing world-class healthcare services with
              compassion and excellence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-slate-300">
              <li className="hover:text-white cursor-pointer transition">
                <a href="#home">Home</a>
</li>
              <li className="hover:text-white cursor-pointer transition"><a href="#about">About</a></li>
              <li className="hover:text-white cursor-pointer transition"><a href="#dept">Departments</a></li>
              <li className="hover:text-white cursor-pointer transition"><a href="#doctors">Doctors</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Services
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition"><a href="#cardiology">Cardiology</a></li>
              <li className="hover:text-white cursor-pointer transition"><a href="#neurology">Neurology</a></li>
              <li className="hover:text-white cursor-pointer transition"><a href="#orthopedics">Orthopedics</a></li>
              <li className="hover:text-white cursor-pointer transition"><a href="#pediatrics">Pediatrics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition">+91 98765 43210</li>
              <li className="hover:text-white cursor-pointer transition">contact@meditrusthospital.com</li>
              <li className="hover:text-white cursor-pointer transition">Chennai, Tamil Nadu</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-400">
          © 2026 MediTrust Hospital. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}