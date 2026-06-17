import { Star } from "lucide-react";

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
      className="py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

      <div className="text-center mb-10 md:mb-14">
  <span className="text-blue-200 uppercase tracking-wider font-semibold">
    Patient Stories
  </span>

  <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
    Trusted By Thousands
  </h2>

  <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
    Our patients trust us for compassionate care,
    expert treatment, and exceptional healthcare services.
  </p>
</div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-3xl
              p-8
              border
              border-slate-200
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4 mt-8">

                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}