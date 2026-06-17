export default function CTA() {
  return (
    <section
      id="cta"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 px-8 py-20 md:px-16 text-center shadow-2xl">

          {/* Background Blur */}
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"></div>

          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm text-blue-100 mb-6 backdrop-blur-md">
            Need Immediate Assistance?
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Your Health Is Our
            <span className="block text-blue-200">
              Highest Priority
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto mt-6 text-blue-100 text-lg leading-relaxed">
            Schedule your appointment with our expert doctors
            and receive world-class healthcare services tailored
            to your needs.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <button className="px-8 py-4 bg-white text-blue-800 rounded-xl font-semibold hover:scale-105 transition duration-300">
              Book Appointment
            </button>

            <button className="px-8 py-4 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition duration-300">
              Emergency Hotline
            </button>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-white/20">

            <div>
              <h3 className="text-3xl font-bold text-white">
                50K+
              </h3>
              <p className="text-blue-200 text-sm">
                Patients Served
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                100+
              </h3>
              <p className="text-blue-200 text-sm">
                Specialists
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                24/7
              </h3>
              <p className="text-blue-200 text-sm">
                Emergency Care
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                98%
              </h3>
              <p className="text-blue-200 text-sm">
                Patient Satisfaction
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}