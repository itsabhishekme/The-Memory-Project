"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Camera,
  Mic,
  Archive,
} from "lucide-react";

const stats = [
  {
    value: "10,000+",
    label: "Stories to Preserve",
  },
  {
    value: "500+",
    label: "Family Archives",
  },
  {
    value: "250+",
    label: "Oral Histories",
  },
  {
    value: "100+",
    label: "Communities",
  },
];

const highlights = [
  {
    icon: BookOpen,
    title: "Human Stories",
  },
  {
    icon: Mic,
    title: "Oral Histories",
  },
  {
    icon: Camera,
    title: "Historic Photographs",
  },
  {
    icon: Archive,
    title: "Living Archive",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-slate-900 to-stone-950 text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-300">
              📖 Preserving Humanity, One Story at a Time
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
              Every Memory
              <br />

              <span className="text-amber-400">
                Deserves
              </span>

              <br />

              To Live Forever.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              The Memory Project is a living archive preserving family
              histories, oral traditions, historic photographs, handwritten
              letters, and untold human stories before they disappear with
              time.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/stories"
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-4 font-semibold text-black transition hover:bg-amber-400"
              >
                Explore Stories

                <ArrowRight size={18} />
              </Link>

              <Link
                href="/share-your-memory"
                className="rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:border-amber-400 hover:text-amber-400"
              >
                Share Your Memory
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h2 className="text-2xl font-bold">
                What We Preserve
              </h2>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-amber-400/40"
                    >
                      <Icon className="mb-4 h-10 w-10 text-amber-400" />

                      <h3 className="font-semibold">
                        {item.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <div className="mt-24 grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="text-center"
            >
              <h3 className="text-4xl font-black text-amber-400">
                {item.value}
              </h3>

              <p className="mt-2 text-slate-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}