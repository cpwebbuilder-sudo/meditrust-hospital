"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment online through our website or call our reception desk directly.",
  },
  {
    question: "Do you provide emergency services?",
    answer:
      "Yes, our emergency department operates 24/7 with experienced medical professionals.",
  },
  {
    question: "Are specialist doctors available daily?",
    answer:
      "Our specialists are available throughout the week. Availability may vary by department.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we work with major insurance providers. Please contact us for specific coverage details.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes, virtual consultations are available for selected departments and specialists.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-blue-600 font-semibold text-center uppercase tracking-wide">
  FAQ
</p>

<h2 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mt-4">
  Frequently Asked Questions
</h2>

<p className="text-slate-600 text-center mt-4 mb-12">
  Find answers to common questions about our hospital services.
</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-lg text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}