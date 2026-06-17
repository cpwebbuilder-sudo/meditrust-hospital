import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Advanced Medical Technology",
  "Experienced Specialists",
  "24/7 Emergency Care",
  "Patient-Centered Treatment",
  "Modern Infrastructure",
  "Trusted Healthcare Services",
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <div className="relative">
            <div className="overflow-hidden rounded-[32px] shadow-2xl">
          <Image
  src="/images/hospital-building.jfif"
  alt="Hospital Building"
  width={800}
  height={800}
  className="w-full h-[350px] md:h-[500px] lg:h-[600px] object-cover"
/>
            </div>

            {/* Floating Stats */}
            <div className="absolute bottom-4 right-4 md:-bottom-6 md:-right-6 bg-white rounded-3xl shadow-xl p-4 md:p-6">
              <h3 className="text-4xl font-bold text-blue-900">
                50K+
              </h3>
              <p className="text-slate-600">
                Happy Patients
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <span className="text-blue-700 font-semibold uppercase tracking-wider">
              About MediTrust
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Providing Trusted Healthcare For Every Generation
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              MediTrust Multispeciality Hospital is committed to
              delivering world-class healthcare services with
              compassion, innovation, and excellence.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Our team of experienced doctors, advanced medical
              facilities, and patient-first approach ensure the
              highest standards of healthcare for individuals and
              families.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-green-600"
                  />

                  <span className="text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-10">
              <div>
                <h3 className="text-3xl font-bold text-blue-900">
                  15+
                </h3>
                <p className="text-slate-600 text-sm">
                  Years Experience
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
                  98%
                </h3>
                <p className="text-slate-600 text-sm">
                  Satisfaction
                </p>
              </div>
            </div>

            <button className="mt-10 bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}