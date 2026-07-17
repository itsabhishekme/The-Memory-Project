"use client";

import { Heart, Landmark, BookOpen, Users } from "lucide-react";
import { motion } from "framer-motion";

const missions = [
  {
    icon: Heart,
    title: "Preserve Human Stories",
    description:
      "Every person has a story worth remembering. We document personal journeys, memories, and experiences so they continue to inspire future generations.",
  },
  {
    icon: Landmark,
    title: "Protect Cultural Heritage",
    description:
      "From oral traditions and local customs to family histories, we safeguard the cultural identity that connects communities across generations.",
  },
  {
    icon: BookOpen,
    title: "Build a Living Archive",
    description:
      "Through photographs, legacy letters, interviews, and historical records, we create an accessible digital archive that grows with every contribution.",
  },
  {
    icon: Users,
    title: "Connect Communities",
    description:
      "By encouraging people to share their memories, we strengthen relationships between generations and create a shared sense of belonging.",
  },
];

export default function Mission() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
            Our Mission
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Preserving Memories That Shape Humanity
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            The Memory Project exists to preserve stories, traditions,
            photographs, oral histories, and personal experiences before they
            disappear. Every memory shared becomes part of a living archive that
            connects the past with the future.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {missions.map((mission, index) => {
            const Icon = mission.icon;

            return (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition group-hover:bg-amber-600 group-hover:text-white dark:bg-amber-500/20 dark:text-amber-300">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">
                  {mission.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {mission.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mt-24 max-w-4xl rounded-3xl bg-gradient-to-r from-amber-500 to-orange-600 px-10 py-14 text-center text-white"
        >
          <h3 className="text-3xl font-bold">
            Every Memory Matters.
          </h3>

          <p className="mt-6 text-lg leading-8 text-amber-50">
            Stories fade when they are not shared. By preserving memories today,
            we give future generations the opportunity to learn, connect, and
            understand the lives that came before them. Together, we are
            creating a legacy that will never be forgotten.
          </p>
        </motion.div>
      </div>
    </section>
  );
}