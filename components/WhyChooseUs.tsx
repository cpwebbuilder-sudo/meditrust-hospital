import Image from "next/image";
import {
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Building2,
  Clock3,
  Users,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Expert Doctors",
  },
  {
    icon: HeartPulse,
    title: "Advanced Equipment",
  },
  {
    icon: Clock3,
    title: "24/7 Emergency Care",
  },
  {
    icon: Stethoscope,
    title: "Patient First Approach",
  },
  {
    icon: Building2,
    title: "Modern Infrastructure",
  },
  {
    icon: Users,
    title: "Affordable Treatment",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <Image
              src="/images/why-choose-us.jpg"
              alt="Hospital"
              width={700}
              height={700}
              className="rounded-3xl object-cover w-full h-[550px]"
            />
          </div>

          <div>
            <p className="text-blue-700 font-semibold uppercase tracking-wider">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Exceptional Healthcare With Compassion
            </h2>

            <p className="text-slate-600 mt-6 leading-relaxed">
              We combine advanced medical technology with
              experienced healthcare professionals to deliver
              world-class treatment for every patient.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-10">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm"
                  >
                    <Icon className="text-blue-700" />

                    <span className="font-medium">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}