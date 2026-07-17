"use client";

import Link from "next/link";
import { FolderOpen, ArrowRight, Images, Users, BookOpen } from "lucide-react";

const collections = [
  {
    id: 1,
    title: "Family Memories",
    description:
      "A collection of cherished family stories, traditions, photographs, and moments passed from one generation to the next.",
    icon: Users,
    href: "/family-archives",
    count: "250+ Stories",
  },
  {
    id: 2,
    title: "Oral Histories",
    description:
      "Recorded conversations and life experiences preserving voices, wisdom, and cultural heritage before they are forgotten.",
    icon: BookOpen,
    href: "/oral-histories",
    count: "180+ Interviews",
  },
  {
    id: 3,
    title: "Historic Photographs",
    description:
      "Rare photographs documenting everyday life, communities, traditions, and moments that shaped history.",
    icon: Images,
    href: "/photographs",
    count: "600+ Photos",
  },
];

export default function Collections() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
            <FolderOpen className="h-4 w-4" />
            Memory Collections
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Explore Our Living Archive
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Discover carefully curated collections preserving human stories,
            family heritage, oral traditions, and historical memories for future
            generations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {collections.map((collection) => {
            const Icon = collection.icon;

            return (
              <article
                key={collection.id}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition group-hover:bg-amber-600 group-hover:text-white dark:bg-amber-500/10 dark:text-amber-400">
                  <Icon className="h-8 w-8" />
                </div>

                <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {collection.count}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
                  {collection.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {collection.description}
                </p>

                <Link
                  href={collection.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-600 transition hover:gap-3"
                >
                  Explore Collection
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-16 text-center text-white">
          <h3 className="text-3xl font-bold">
            Every Memory Deserves to Be Preserved
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-amber-100">
            Help us build a living archive by sharing your family's history,
            treasured photographs, personal stories, and cultural traditions.
          </p>

          <Link
            href="/share-your-memory"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-amber-700 transition hover:bg-slate-100"
          >
            Share Your Memory
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}