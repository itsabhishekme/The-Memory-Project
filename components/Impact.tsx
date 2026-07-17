"use client";

import { motion } from "framer-motion";
import {
  Archive,
  BookOpen,
  Camera,
  HeartHandshake,
  Landmark,
  Mic,
} from "lucide-react";

const impactStats = [
  {
    icon: Mic,
    value: "500+",
    label: "Oral Histories",
    description:
      "Personal voices, interviews, and life experiences preserved for future generations.",
  },
  {
    icon: Archive,
    value: "1,200+",
    label: "Family Archives",
    description:
      "Memories, family records, and heritage collections carefully documented.",
  },
  {
    icon: Camera,
    value: "8,000+",
    label: "Historic Photographs",
    description:
      "Rare photographs digitized and protected from being lost forever.",
  },
  {
    icon: BookOpen,
    value: "350+",
    label: "Legacy Letters",
    description:
      "Letters, journals, and handwritten memories preserved as historical treasures.",
  },
  {
    icon: Landmark,
    value: "75+",
    label: "Communities",
    description:
      "Cities, villages, and cultural communities contributing their unique stories.",
  },
  {
    icon: HeartHandshake,
    value: "300+",
    label: "Volunteers",
    description:
      "Researchers, storytellers, students, and volunteers helping preserve humanity.",
  },
];

export default function Impact() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
            Our Impact
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Preserving Humanity,
            <span className="text-amber-600"> One Story at a Time</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Every recorded voice, preserved photograph, family archive, and
            handwritten letter becomes part of a living archive that connects
            generations and protects our shared cultural heritage.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {impactStats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 dark:bg-amber-500/10">
                  <Icon className="h-8 w-8 text-amber-600" />
                </div>

                <h3 className="mt-8 text-5xl font-bold text-slate-900 dark:text-white">
                  {item.value}
                </h3>

                <h4 className="mt-3 text-xl font-semibold">
                  {item.label}
                </h4>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold">
            Every Memory Matters
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-amber-50">
            The stories we preserve today become the history future generations
            will learn from tomorrow. Together, we are creating a living archive
            of humanity that will never be forgotten.
          </p>
        </div>
      </div>
    </section>
  );
}