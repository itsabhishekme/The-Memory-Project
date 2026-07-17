
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is The Memory Project?",
    answer:
      "The Memory Project is a living digital archive dedicated to preserving family histories, oral traditions, photographs, legacy letters, and authentic human stories so they can inspire future generations.",
  },
  {
    question: "Who can share a memory or story?",
    answer:
      "Anyone can contribute. Individuals, families, students, historians, photographers, community organizations, and cultural institutions are all welcome to preserve their stories.",
  },
  {
    question: "What types of memories can I submit?",
    answer:
      "You can submit personal stories, family histories, oral interviews, historic photographs, handwritten letters, journals, cultural traditions, community memories, and life experiences.",
  },
  {
    question: "Can I upload photographs and documents?",
    answer:
      "Yes. You can share scanned photographs, letters, certificates, diaries, newspaper clippings, and other historical documents that help preserve your family's legacy.",
  },
  {
    question: "Do I retain ownership of my submissions?",
    answer:
      "Yes. Contributors retain ownership of their original materials while granting permission for preservation and educational display according to the project's terms.",
  },
  {
    question: "Can I record oral histories with family members?",
    answer:
      "Absolutely. Recording conversations with parents, grandparents, elders, and community members is one of the best ways to preserve knowledge before it is lost.",
  },
  {
    question: "Is there any cost to participate?",
    answer:
      "No. Sharing stories and preserving memories is free. Our mission is to make cultural preservation accessible to everyone.",
  },
  {
    question: "How are stories verified?",
    answer:
      "Whenever possible, submissions are reviewed with available supporting information and historical context. Personal memories are preserved respectfully while remaining true to the contributor's voice.",
  },
  {
    question: "Can organizations partner with The Memory Project?",
    answer:
      "Yes. Museums, schools, libraries, archives, NGOs, and community organizations can collaborate to preserve local history and cultural heritage.",
  },
  {
    question: "How can I volunteer?",
    answer:
      "Volunteers can help collect stories, digitize archives, conduct interviews, organize community events, translate oral histories, and support documentation projects.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Learn how The Memory Project preserves stories, family histories,
            photographs, oral traditions, and human experiences for future
            generations.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <h3 className="pr-6 text-lg font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`h-6 w-6 text-amber-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-200 px-7 py-6 dark:border-slate-800">
                      <p className="leading-8 text-slate-600 dark:text-slate-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-10 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-100">
            We'd love to hear from you. Whether you're preserving your family
            history, documenting oral traditions, or partnering with us, our
            team is here to help.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-amber-700 transition hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}