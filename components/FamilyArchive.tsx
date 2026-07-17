"use client";

import Link from "next/link";
import { Users, BookOpen, Calendar, ArrowRight } from "lucide-react";

const archives = [
  {
    id: 1,
    family: "The Sharma Family",
    location: "Jaipur, Rajasthan",
    generation: "5 Generations",
    stories: 42,
    year: "1872",
    description:
      "A remarkable family archive preserving traditions, handwritten letters, rare photographs, recipes, and memories passed through five generations.",
    image: "/images/memory-project/family-archives/sharma-family.jpg",
  },
  {
    id: 2,
    family: "The Banerjee Family",
    location: "Kolkata, West Bengal",
    generation: "4 Generations",
    stories: 31,
    year: "1910",
    description:
      "An extensive collection of oral histories, cultural traditions, family journals, and historic photographs spanning more than a century.",
    image: "/images/memory-project/family-archives/banerjee-family.jpg",
  },
  {
    id: 3,
    family: "The Nair Family",
    location: "Kochi, Kerala",
    generation: "6 Generations",
    stories: 56,
    year: "1848",
    description:
      "Preserving local heritage through personal stories, ancestral documents, festivals, and memories shared across six generations.",
    image: "/images/memory-project/family-archives/nair-family.jpg",
  },
];

export default function FamilyArchive() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
            Family Archives
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Every Family Has a Story Worth Preserving
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Family archives preserve memories, traditions, photographs,
            handwritten letters, recipes, and stories that connect generations
            and keep heritage alive.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {archives.map((archive) => (
            <article
              key={archive.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-200">
                <img
                  src={archive.image}
                  alt={archive.family}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold">{archive.family}</h3>

                <p className="mt-2 text-slate-500 dark:text-slate-400">
                  {archive.location}
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-800">
                    <Users size={18} />
                    {archive.generation}
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-800">
                    <BookOpen size={18} />
                    {archive.stories} Stories
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-800">
                    <Calendar size={18} />
                    Since {archive.year}
                  </div>
                </div>

                <p className="mt-6 leading-7 text-slate-600 dark:text-slate-400">
                  {archive.description}
                </p>

                <Link
                  href="/family-archives"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-600 transition hover:gap-3"
                >
                  Explore Archive
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-10 text-center text-white">
          <h3 className="text-3xl font-bold">
            Preserve Your Family's Legacy
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-amber-100">
            Every photograph, handwritten letter, recipe, and memory is part of
            your family's identity. Start building your digital family archive
            today so future generations never lose their roots.
          </p>

          <Link
            href="/share-your-memory"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-amber-700 transition hover:scale-105"
          >
            Create Your Family Archive
          </Link>
        </div>
      </div>
    </section>
  );
}