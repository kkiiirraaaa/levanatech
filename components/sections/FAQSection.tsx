'use client';

import { useState } from 'react';
import type { FAQ } from '@/types';

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (faqs.length === 0) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20  bg-black">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-badge bg-black rounded-lg border border-primary text-center text-gray-200 mx-auto">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-gray-300 max-w-5xl mx-auto">
            Kami memahami bahwa setiap langkah besar dimulai dengan pertanyaan.
            Temukan jawaban atas hal-hal yang paling sering ditanyakan oleh
            klien kami di sini.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className=" gap-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-black border border-dark-lighter rounded-xl mb-4 overflow-hidden hover:bg-dark-lighter transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-start gap-3 text-left"
                >
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="flex-1">
                    <h3 className="font-semibold ">{faq.question}</h3>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-300 flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 text-sm pl-8">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
