import {
  Users,
  Stethoscope,
  Building2,
  Award,
} from "lucide-react";

const stats = [
  {
    value: "50K+",
    label: "Patients Treated",
    icon: Users,
  },
  {
    value: "100+",
    label: "Expert Doctors",
    icon: Stethoscope,
  },
  {
    value: "25+",
    label: "Departments",
    icon: Building2,
  },
  {
    value: "98%",
    label: "Success Rate",
    icon: Award,
  },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-700 to-blue-900">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="bg-white rounded-3xl p-6 md:p-8 text-center shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-blue-700" />
                </div>

                <h3 className="text-3xl md:text-5xl font-bold text-slate-900">
                  {item.value}
                </h3>

                <p className="text-slate-600 mt-3 font-medium">
                  {item.label}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}