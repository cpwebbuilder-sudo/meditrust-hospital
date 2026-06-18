import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Cardiology Patient",
    review:
      "The doctors were extremely professional and supportive throughout my treatment. The care provided was exceptional.",
  },
  {
    name: "Priya Devi",
    role: "Neurology Patient",
    review:
      "Excellent facilities and caring staff. The appointment process was smooth and the treatment was outstanding.",
  },
  {
    name: "Arun Prasad",
    role: "Orthopedic Patient",
    review:
      "Highly recommended. The doctors explained everything clearly and helped me recover quickly.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            Patient Stories
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Trusted By Thousands
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            Our patients trust us for compassionate care,
            expert treatment, and exceptional healthcare.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                relative
                bg-white
                rounded-3xl
                p-8
                border
                border-slate-200
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <div className="absolute top-6 right-6">
                <Quote
                  size={40}
                  className="text-blue-100"
                />
              </div>

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed min-h-[120px]">
                "{item.review}"
              </p>

              <div className="border-t border-slate-100 mt-6 pt-6">

                <h4 className="font-bold text-slate-900 text-lg">
                  {item.name}
                </h4>

                <p className="text-blue-600 text-sm font-medium">
                  {item.role}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}