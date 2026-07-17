"use client";

import Link from "next/link";
import { ArrowRight, Heart, BookOpen, Mic2 } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-orange-600 to-rose-700 py-24 text-white">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
            Preserving Humanity • One Story at a Time
          </span>

          <h2 className="mt-8 text-4xl font-extrabold leading-tight md:text-6xl">
            Every Memory Deserves
            <br />
            <span className="text-yellow-300">A Forever Home.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-orange-100 md:text-xl">
            Your family's history, treasured photographs, handwritten letters,
            oral traditions, and life experiences are priceless. Help us build
            a living archive that will inspire future generations.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <Link
              href="/share-your-memory"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-orange-700 transition hover:scale-105 hover:bg-orange-50"
            >
              Share Your Memory
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/stories"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-lg font-semibold transition hover:bg-white hover:text-orange-700"
            >
              Explore Stories
            </Link>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-md"
          >
            <BookOpen className="mb-6 h-12 w-12 text-yellow-300" />

            <h3 className="mb-4 text-2xl font-bold">
              Preserve History
            </h3>

            <p className="leading-7 text-orange-100">
              Document family stories, traditions, and important life moments
              before they disappear with time.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-md"
          >
            <Mic2 className="mb-6 h-12 w-12 text-yellow-300" />

            <h3 className="mb-4 text-2xl font-bold">
              Record Voices
            </h3>

            <p className="leading-7 text-orange-100">
              Capture oral histories, wisdom, and unforgettable conversations
              from parents, grandparents, and community elders.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-md"
          >
            <Heart className="mb-6 h-12 w-12 text-yellow-300" />

            <h3 className="mb-4 text-2xl font-bold">
              Inspire Generations
            </h3>

            <p className="leading-7 text-orange-100">
              Create a legacy that connects families, strengthens communities,
              and ensures every story continues to inspire tomorrow.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 border-t border-white/20 pt-10 text-center">
          <p className="text-lg text-orange-100">
            "History isn't only written in books.
            <br />
            It's carried in the memories of ordinary people."
          </p>
        </div>
      </div>
    </section>
  );
}