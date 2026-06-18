export default function CTA() {
  return (
   <section className="py-24 bg-slate-50">
  <div className="max-w-6xl mx-auto px-6">

    <div className="rounded-[36px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100 p-12 md:p-16 shadow-xl">

      <div className="text-center">

        <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
          Need Immediate Assistance?
        </span>

        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
          Your Health Is Our
          <span className="block text-blue-600">
            Highest Priority
          </span>
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
          Schedule your appointment with our expert doctors and
          receive world-class healthcare services tailored to your
          needs.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

          <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Book Appointment
          </button>

          <button className="px-8 py-4 rounded-xl border border-blue-200 text-blue-600 font-semibold hover:bg-blue-50 transition">
            Emergency Hotline
          </button>

        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-10">

          <span className="px-4 py-2 rounded-full bg-white border border-blue-100 text-slate-700 text-sm">
            ✓ NABH Accredited
          </span>

          <span className="px-4 py-2 rounded-full bg-white border border-blue-100 text-slate-700 text-sm">
            ✓ 24/7 Emergency
          </span>

          <span className="px-4 py-2 rounded-full bg-white border border-blue-100 text-slate-700 text-sm">
            ✓ Expert Specialists
          </span>

          <span className="px-4 py-2 rounded-full bg-white border border-blue-100 text-slate-700 text-sm">
            ✓ Modern Facilities
          </span>

        </div>

      </div>

    </div>

  </div>
</section>
  );
}