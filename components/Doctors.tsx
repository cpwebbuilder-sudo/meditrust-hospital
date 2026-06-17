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
    <section id="doctors" className="mb-10 md:mb-14 bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-10 md:mb-14">
  <span className="text-blue-700 font-semibold uppercase tracking-wider">
    Our Specialists
  </span>

  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4">
    Meet Our Expert Doctors
  </h2>

  <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
    Our experienced medical professionals are committed
    to providing exceptional healthcare services with
    compassion and expertise.
  </p>
</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-72 md:h-80 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5 md:p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {doctor.name}
                </h3>

                <p className="text-blue-700 font-medium mt-2">
                  {doctor.specialty}
                </p>

                <p className="text-slate-500 text-sm mt-2">
                  {doctor.experience}
                </p>

                <button className="mt-5 w-full py-3 rounded-xl border border-blue-200 text-blue-800 font-semibold hover:bg-blue-900 hover:text-white transition">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}