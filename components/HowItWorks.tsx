"use client";

import {
  Mic,
  Upload,
  ShieldCheck,
  Archive,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: "01",
    icon: Mic,
    title: "Record Your Story",
    description:
      "Share your memories through audio, video, photographs, letters, or written stories. Every experience matters.",
  },
  {
    id: "02",
    icon: Upload,
    title: "Submit Your Memory",
    description:
      "Upload your story securely along with photographs, documents, family records, or historical materials.",
  },
  {
    id: "03",
    icon: ShieldCheck,
    title: "Review & Preserve",
    description:
      "Our team carefully reviews every submission, verifies available details, and prepares it for long-term preservation.",
  },
  {
    id: "04",
    icon: Archive,
    title: "Build the Legacy",
    description:
      "Approved memories become part of The Memory Project, helping preserve culture, family heritage, and human history for future generations.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Simple Process
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            How The Memory Project Works
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Every memory has the power to inspire future generations. Our
            process makes it easy to preserve stories that deserve to live
            forever.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
              >
                <span className="absolute right-6 top-6 text-5xl font-black text-slate-100 dark:text-slate-800">
                  {step.id}
                </span>

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 transition group-hover:scale-110 dark:bg-amber-500/20">
                  <Icon className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="mt-24 rounded-3xl bg-gradient-to-r from-amber-50 via-white to-amber-50 p-10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                Every Story Becomes a Living Legacy
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                The Memory Project is more than a digital archive. It is a
                growing collection of voices, memories, traditions, and family
                histories preserved with care so they remain accessible for
                generations to come.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Preserve family history",
                  "Document oral traditions",
                  "Protect cultural heritage",
                  "Inspire future generations",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />

                    <span className="text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                Ready to Share Your Story?
              </h4>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                Whether it's a family memory, an oral history, an old
                photograph, or a handwritten letter, your contribution becomes
                part of a living archive that keeps history alive.
              </p>

              <Link
                href="/share-your-memory"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-600 px-7 py-3 font-semibold text-white transition hover:bg-amber-700"
              >
                Share Your Memory

                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}