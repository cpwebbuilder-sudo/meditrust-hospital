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
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            Our Impact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-5">
            Trusted Healthcare Excellence
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
            Delivering exceptional healthcare through expert
            doctors, advanced facilities, and compassionate care.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                group
                bg-white
                rounded-[28px]
                p-8
                text-center
                border border-slate-200
                shadow-sm
                hover:shadow-xl
                hover:border-blue-200
                hover:-translate-y-2
                transition-all
                duration-300
                "
              >
                <div
                  className="
                  w-16 h-16
                  mx-auto mb-5
                  rounded-2xl
                  bg-blue-50
                  flex items-center justify-center
                  group-hover:bg-blue-600
                  transition-all duration-300
                  "
                >
                  <Icon
                    className="
                    w-8 h-8
                    text-blue-600
                    group-hover:text-white
                    transition-all duration-300
                    "
                  />
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
                  {item.value}
                </h3>

                <p className="text-slate-500 mt-3 font-medium">
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