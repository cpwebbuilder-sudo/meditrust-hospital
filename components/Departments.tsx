import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";

const departments = [
  {
    icon: HeartPulse,
    title: "Cardiology",
    desc: "Advanced diagnosis and treatment for heart conditions.",
  },
  {
    icon: Brain,
    title: "Neurology",
    desc: "Expert care for brain and nervous system disorders.",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    desc: "Bone, joint and spine care with modern techniques.",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    desc: "Comprehensive healthcare for children and infants.",
  },
  {
    icon: Stethoscope,
    title: "General Medicine",
    desc: "Routine checkups and preventive healthcare services.",
  },
  {
    icon: HeartHandshake,
    title: "Gynecology",
    desc: "Women's healthcare services at every stage of life.",
  },
];

export default function Departments() {
  return (
    <section id="departments" className="mb-10 md:mb-14 bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
  <span className="text-blue-700 font-semibold uppercase tracking-wider">
    Our Departments
  </span>

  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4">
    World-Class Care Across Specialties
  </h2>

  <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
    Our experienced specialists provide comprehensive
    healthcare solutions using modern medical practices
    and advanced technology.
  </p>
</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {departments.map((dept, index) => {
            const Icon = dept.icon;

            return (
              <div
                key={index}
                className="
group
bg-white
border border-slate-200
rounded-3xl
p-6 md:p-8
hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
hover:border-blue-200
hover:-translate-y-2
transition-all
duration-300
"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-800" />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold">
                  {dept.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {dept.desc}
                </p>

                <button className="mt-6 text-blue-800 font-semibold">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}