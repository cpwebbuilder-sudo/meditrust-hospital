import Image from "next/image";

const doctors = [
  {
    image: "/images/doctor1.png",
    name: "Dr. Rajesh Kumar",
    specialty: "Cardiologist",
    experience: "15+ Years Experience",
  },
  {
    image: "/images/doctor2.png",
    name: "Dr. Priya Sharma",
    specialty: "Neurologist",
    experience: "12+ Years Experience",
  },
  {
    image: "/images/doctor3.jpg",
    name: "Dr. Arvind Mehta",
    specialty: "Orthopedic Surgeon",
    experience: "18+ Years Experience",
  },
  {
    image: "/images/doctor4.jpg",
    name: "Dr. Ananya Rao",
    specialty: "Pediatric Specialist",
    experience: "10+ Years Experience",
  },
];

export default function Doctors() {
  return (
    <section
      id="doctors"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">

          <div className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            Our Specialists
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-slate-900">
            Meet Our Expert Doctors
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto text-lg">
            Our experienced medical professionals are committed
            to providing exceptional healthcare services with
            compassion, expertise, and patient-focused care.
          </p>

          {/* Small Stats */}
          <div className="flex justify-center gap-10 mt-10 flex-wrap">

            <div>
              <h4 className="text-3xl font-bold text-blue-600">
                100+
              </h4>
              <p className="text-sm text-slate-500">
                Doctors
              </p>
            </div>

            <div>
              <h4 className="text-3xl font-bold text-blue-600">
                25+
              </h4>
              <p className="text-sm text-slate-500">
                Departments
              </p>
            </div>

            <div>
              <h4 className="text-3xl font-bold text-blue-600">
                24/7
              </h4>
              <p className="text-sm text-slate-500">
                Support
              </p>
            </div>

          </div>

        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-[32px]
                overflow-hidden
                border
                border-slate-200
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">

                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-700
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              </div>

              {/* Content */}
              <div className="p-6">

                <span className="inline-flex px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4">
                  {doctor.experience}
                </span>

                <h3 className="text-xl font-bold text-slate-900">
                  {doctor.name}
                </h3>

                <p className="text-blue-600 font-medium mt-2">
                  {doctor.specialty}
                </p>

                <button
                  className="
                    mt-6
                    w-full
                    py-3.5
                    rounded-2xl
                    bg-slate-100
                    text-slate-900
                    font-semibold
                    hover:bg-blue-600
                    hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  Book Consultation
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}