"use client";

import Link from "next/link";
import {
  Users,
  Mic,
  Archive,
  Images,
  Mail,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "Human Stories",
    description:
      "Real-life experiences, inspiring journeys, and untold stories from individuals across generations.",
    icon: Users,
    href: "/stories",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Oral Histories",
    description:
      "Preserving spoken memories, interviews, traditions, and voices before they are lost forever.",
    icon: Mic,
    href: "/oral-histories",
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Family Archives",
    description:
      "A digital home for family photographs, documents, memories, and treasured keepsakes.",
    icon: Archive,
    href: "/family-archives",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Historic Photographs",
    description:
      "Discover timeless photographs that preserve moments, places, and people from the past.",
    icon: Images,
    href: "/photographs",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Legacy Letters",
    description:
      "Letters carrying love, wisdom, hope, and memories passed from one generation to another.",
    icon: Mail,
    href: "/letters",
    color: "from-rose-500 to-red-500",
  },
  {
    title: "Story Collections",
    description:
      "Curated collections connecting stories through history, culture, family, and community.",
    icon: BookOpen,
    href: "/collections",
    color: "from-indigo-500 to-violet-500",
  },
];

export default function MemoryCategories() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
            Explore Categories
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Every Memory Has a Place
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            The Memory Project brings together stories, voices, photographs,
            family archives, and letters into one living archive that preserves
            our shared human legacy.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-r ${category.color} p-4 text-white`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {category.description}
                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-amber-600 transition-all group-hover:gap-4">
                  Explore
                  <ArrowRight className="h-5 w-5" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-14 text-center text-white">
          <h3 className="text-3xl font-bold">
            Help Preserve Our Shared Heritage
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-amber-100">
            Every family has stories worth remembering. Every community holds
            traditions worth protecting. Every memory contributes to the living
            history of humanity.
          </p>

          <Link
            href="/share-your-memory"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-amber-700 transition hover:scale-105"
          >
            Share Your Memory
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}