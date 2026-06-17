import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mb-10 md:mb-14 bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Contact Us
          </p>

         <h2 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
  Let's Discuss Your
  <span className="block text-blue-600">
    Healthcare Needs
  </span>
</h2>

          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Reach out to our healthcare team for appointments,
            consultations, and assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* Contact Information */}
          <div className="space-y-6">

            <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition duration-300">
              <Phone size={24} className="text-blue-600 mt-1 shrink-0" />

              <div>
                <h4 className="font-semibold text-slate-900 text-lg">
                  Phone
                </h4>

                <p className="text-slate-700 font-medium mt-1 whitespace-nowrap">
  +91 98765 43210
</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition duration-300">
              <Mail size={24} className="text-blue-600 mt-1 shrink-0" />

              <div>
                <h4 className="font-semibold text-slate-900 text-lg">
                  Email
                </h4>

                <p className="text-slate-700 font-medium mt-1">
                  contact@meditrusthospital.com
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition duration-300">
              <MapPin size={24} className="text-blue-600 mt-1 shrink-0" />

              <div>
                <h4 className="font-semibold text-slate-900 text-lg">
                  Address
                </h4>

                <p className="text-slate-700 font-medium mt-1">
                  123 Healthcare Street,
                  <br />
                  Chennai, Tamil Nadu
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition duration-300">
              <Clock size={24} className="text-blue-600 mt-1 shrink-0" />

              <div>
                <h4 className="font-semibold text-slate-900 text-lg">
                  Working Hours
                </h4>

                <p className="text-slate-700 font-medium mt-1">
                  Mon - Sat : 8 AM - 9 PM
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-lg transition duration-300">
  <h3 className="text-2xl font-bold text-slate-900 mb-2">
    Send Us a Message
  </h3>

  <p className="text-slate-600 mb-6">
    Our team will get back to you within 24 hours.
  </p>
            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition duration-300"
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