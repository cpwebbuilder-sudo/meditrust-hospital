"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              Trusted Multispeciality Hospital
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-slate-900">
              Trusted
              <span className="text-blue-900 block">
                Healthcare
              </span>
              For Every Family
            </h1>

            <p className="mt-6 text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
              Advanced medical care with experienced doctors,
              modern facilities, and compassionate treatment
              designed to improve the health and wellbeing of
              every patient.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="w-full sm:w-auto bg-blue-900 text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-800 transition">
                Book Appointment
              </button>

              <button className="w-full sm:w-auto border border-slate-300 bg-white px-6 py-4 rounded-xl font-semibold hover:bg-slate-100 transition">
                Emergency Care
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-blue-900">
                  10+
                </h3>
                <p className="text-slate-600 text-sm">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-900">
                  50K+
                </h3>
                <p className="text-slate-600 text-sm">
                  Patients
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-900">
                  20+
                </h3>
                <p className="text-slate-600 text-sm">
                  Specialists
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-900">
                  24/7
                </h3>
                <p className="text-slate-600 text-sm">
                  Support
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-10 lg:mt-0">

            <div className="relative rounded-[32px] overflow-hidden shadow-2xl h-[350px] md:h-[500px] lg:h-[580px]">
              <Image
                src="/images/hero-doctors.jpg"
                alt="Doctors"
                fill
                priority
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}