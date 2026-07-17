"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Mic,
  Camera,
  FileText,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function ShareMemory() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    // Replace with API request later
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Share Your Story
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Every Memory Deserves to Live Forever
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Help preserve family history, cultural traditions, oral histories,
            photographs, and personal experiences for future generations.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              What Can You Share?
            </h3>

            <div className="mt-8 space-y-6">
              {[
                {
                  icon: BookOpen,
                  title: "Life Stories",
                  description:
                    "Personal journeys, childhood memories, and inspiring experiences.",
                },
                {
                  icon: Mic,
                  title: "Oral Histories",
                  description:
                    "Recorded conversations with parents, grandparents, and elders.",
                },
                {
                  icon: Camera,
                  title: "Historic Photographs",
                  description:
                    "Family albums, village life, festivals, and important moments.",
                },
                {
                  icon: FileText,
                  title: "Letters & Documents",
                  description:
                    "Old letters, diaries, certificates, journals, and handwritten memories.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="rounded-xl bg-amber-100 p-3 text-amber-600">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-slate-600 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <CheckCircle2
                  size={70}
                  className="text-green-600 dark:text-green-400"
                />

                <h3 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
                  Thank You!
                </h3>

                <p className="mt-4 max-w-md text-slate-600 dark:text-slate-400">
                  Your submission has been received. Together we are preserving
                  memories for future generations.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-2 block font-medium">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Location
                  </label>

                  <div className="relative">
                    <MapPin
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      placeholder="City, State, Country"
                      className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Type of Memory
                  </label>

                  <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950">
                    <option>Life Story</option>
                    <option>Oral History</option>
                    <option>Family Archive</option>
                    <option>Historic Photograph</option>
                    <option>Letter / Diary</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Your Story
                  </label>

                  <textarea
                    rows={6}
                    required
                    placeholder="Tell us about your memory..."
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-4 font-semibold text-white transition hover:bg-amber-600"
                >
                  <Send size={18} />
                  Submit Memory
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}