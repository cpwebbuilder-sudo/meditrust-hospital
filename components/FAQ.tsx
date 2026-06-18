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
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about appointments,
            insurance, consultations and hospital services.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`
                rounded-3xl
                border
                overflow-hidden
                transition-all
                duration-300
                ${
                  open === index
                    ? "border-blue-200 bg-blue-50 shadow-lg"
                    : "border-slate-200 bg-white hover:shadow-md"
                }
              `}
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >

                <div className="flex items-center gap-5">

                  <div
                    className={`
                      w-12 h-12 rounded-2xl
                      flex items-center justify-center
                      font-bold
                      ${
                        open === index
                          ? "bg-blue-600 text-white"
                          : "bg-blue-100 text-blue-700"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                </div>

                <ChevronDown
                  size={24}
                  className={`
                    transition-transform duration-300
                    text-blue-600
                    ${open === index ? "rotate-180" : ""}
                  `}
                />

              </button>

              {open === index && (
                <div className="px-6 pb-6 pl-[92px]">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}