import {
  Phone,
  Mail,
  MapPin,
  Clock,
  HeartPulse,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mt-6 leading-tight">
            Let's Discuss Your
            <span className="block text-blue-600">
              Healthcare Needs
            </span>
          </h2>

          <p className="text-lg text-slate-600 mt-5 max-w-2xl mx-auto">
            Reach out to our healthcare team for appointments,
            consultations, emergency support and assistance.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div>

            <div className="bg-white border border-blue-100 rounded-3xl p-8 mb-8 shadow-sm">

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <HeartPulse size={28} />
                </div>

                <div>
                  <h3 className="text-slate-900 text-2xl font-bold">
  Emergency Support
</h3>

                  <p className="text-slate-600 mt-2">
                    Available 24 Hours
                  </p>
                </div>
              </div>

              <div className="mt-6 text-3xl font-bold text-blue-600 text-left">
  +91 98765 43210
</div>

            </div>

            <div className="grid sm:grid-cols-2 gap-5">

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
                  <Phone className="text-blue-600" />
                </div>

                <h4 className="font-bold text-slate-900">
                  Phone
                </h4>

                <p className="text-slate-600 mt-2">
                  +91 98765 43210
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
                  <Mail className="text-blue-600" />
                </div>

                <h4 className="font-bold text-slate-900">
                  Email
                </h4>

                <p className="text-slate-600 mt-2 break-all">
                  contact@meditrusthospital.com
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
                  <MapPin className="text-blue-600" />
                </div>

                <h4 className="font-bold text-slate-900">
                  Address
                </h4>

                <p className="text-slate-600 mt-2">
                  Chennai,
                  <br />
                  Tamil Nadu
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
                  <Clock className="text-blue-600" />
                </div>

                <h4 className="font-bold text-slate-900">
                  Working Hours
                </h4>

                <p className="text-slate-600 mt-2">
                  Mon - Sat
                  <br />
                  8 AM - 9 PM
                </p>
              </div>

            </div>

          </div>

          {/* Right Form */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 border border-slate-200 shadow-xl">

            <h3 className="text-3xl font-bold text-slate-900">
              Send Us A Message
            </h3>

            <p className="text-slate-600 mt-3 mb-8">
              Fill out the form and our healthcare team will
              contact you shortly.
            </p>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows={5}
                placeholder="Tell us how we can help..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}