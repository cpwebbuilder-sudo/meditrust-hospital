"use client";

import Image from "next/image";
import {
  Building2,
  Users,
  Stethoscope,
  Clock3,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">

          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              Trusted Multispeciality Hospital
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-slate-900">
              Trusted
              <span className="block text-blue-700">
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-blue-700 text-white px-7 py-4 rounded-2xl font-semibold hover:bg-blue-800 transition-all duration-300 shadow-lg shadow-blue-200">
                Book Appointment
              </button>

              <button className="border border-slate-300 bg-white px-7 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition-all duration-300">
                Emergency Care
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-blue-700" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    10+
                  </h3>
                  <p className="text-sm text-slate-500">
                    Experience
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-700" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    50K+
                  </h3>
                  <p className="text-sm text-slate-500">
                    Patients
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-blue-700" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    20+
                  </h3>
                  <p className="text-sm text-slate-500">
                    Specialists
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Clock3 className="w-5 h-5 text-blue-700" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    24/7
                  </h3>
                  <p className="text-sm text-slate-500">
                    Support
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative">

            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>

            <div className="relative rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(37,99,235,0.12)] h-[350px] md:h-[450px] lg:h-[520px]">
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