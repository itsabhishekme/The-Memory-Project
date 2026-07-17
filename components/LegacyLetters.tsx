"use client";

import Link from "next/link";
import { ArrowRight, Mail, Calendar, User } from "lucide-react";

const letters = [
  {
    id: 1,
    title: "A Letter to My Future Generations",
    author: "Savitri Devi",
    year: "1984",
    excerpt:
      "Never forget your roots. The greatest wealth you inherit is not money, but the values and memories passed down through your family.",
  },
  {
    id: 2,
    title: "From a Soldier to His Family",
    author: "Captain Arjun Singh",
    year: "1971",
    excerpt:
      "If this letter reaches you before I do, know that every sacrifice was made with love—for our family and our country.",
  },
  {
    id: 3,
    title: "Grandmother's Recipe Book",
    author: "Kamla Bai",
    year: "1992",
    excerpt:
      "These recipes are more than food—they carry the laughter, celebrations, and stories of our family across generations.",
  },
  {
    id: 4,
    title: "A Father's Advice",
    author: "Ramesh Kumar",
    year: "2001",
    excerpt:
      "Success is measured not by what you own, but by the kindness you leave behind and the lives you touch.",
  },
  {
    id: 5,
    title: "Letters from Home",
    author: "Meera Joshi",
    year: "1968",
    excerpt:
      "Distance may separate us, but every letter reminds me that home is carried in our hearts wherever we go.",
  },
  {
    id: 6,
    title: "To My Grandchildren",
    author: "Hariram Patel",
    year: "1999",
    excerpt:
      "Listen to the stories of your elders. They are libraries filled with lessons that no classroom can teach.",
  },
];

export default function LegacyLetters() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
            Legacy Letters
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Words That Live Beyond Generations
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Letters preserve emotions, wisdom, family traditions, and personal
            experiences that continue to inspire long after they are written.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {letters.map((letter) => (
            <article
              key={letter.id}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                <Mail className="h-7 w-7" />
              </div>

              <h3 className="text-2xl font-bold">{letter.title}</h3>

              <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {letter.author}
                </div>

                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {letter.year}
                </div>
              </div>

              <p className="mt-6 leading-7 text-slate-600 dark:text-slate-400">
                {letter.excerpt}
              </p>

              <Link
                href={`/letters/${letter.id}`}
                className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-600 transition group-hover:gap-3"
              >
                Read Letter
                <ArrowRight size={18} />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-8 py-14 text-center text-white">
          <h3 className="text-3xl font-bold">
            Preserve a Letter for the Future
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-amber-100">
            Whether it's a letter to your children, your future self, or someone
            you love, every written memory becomes part of our collective human
            legacy.
          </p>

          <Link
            href="/share-your-memory"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
          >
            Submit Your Letter
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}