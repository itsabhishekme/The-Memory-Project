"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 dark:border-slate-800 dark:bg-slate-900">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
        aria-expanded={isOpen}
      >
        <h3 className="pr-6 text-lg font-semibold text-slate-900 dark:text-white">
          {question}
        </h3>

        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-amber-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-100 px-6 py-5 dark:border-slate-800">
            <p className="leading-7 text-slate-600 dark:text-slate-300">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}