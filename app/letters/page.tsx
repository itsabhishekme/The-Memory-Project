import type { Metadata } from "next";
import {
  Mail,
  Heart,
  CalendarDays,
  PenTool,
  BookOpen,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legacy Letters | The Memory Project",
  description:
    "Discover heartfelt letters, handwritten memories, family correspondence, and personal messages preserved for future generations.",
};

const letters = [
  {
    id: 1,
    title: "A Letter to My Future Grandchildren",
    author: "Ramesh Kumar",
    year: "1984",
    category: "Family Legacy",
    excerpt:
      "I hope one day you will read these words and remember that kindness is the greatest wealth a person can leave behind.",
  },
  {
    id: 2,
    title: "Mother's Last Recipe Letter",
    author: "Savitri Devi",
    year: "1998",
    category: "Traditions",
    excerpt:
      "Recipes are more than food—they carry memories, love, and generations of wisdom inside every meal.",
  },
  {
    id: 3,
    title: "Letters From the Village",
    author: "Mohan Singh",
    year: "1975",
    category: "History",
    excerpt:
      "Life was simple, but every festival, every harvest, and every smile carried a story worth remembering.",
  },
  {
    id: 4,
    title: "A Soldier's Promise",
    author: "Unknown",
    year: "1965",
    category: "Courage",
    excerpt:
      "If I return, we shall celebrate together. If I do not, remember me through hope—not sorrow.",
  },
];

const categories = [
  {
    title: "Family Letters",
    icon: Users,
    description: "Letters passed through generations.",
  },
  {
    title: "Love Letters",
    icon: Heart,
    description: "Stories of affection and lifelong memories.",
  },
  {
    title: "Historical Letters",
    icon: BookOpen,
    description: "Documents preserving important moments.",
  },
  {
    title: "Personal Journals",
    icon: PenTool,
    description: "Everyday reflections and life experiences.",
  },
];

export default function LettersPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-amber-50 to-white dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30">
            <Mail size={42} />
          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight">
            Legacy Letters
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Letters preserve emotions that photographs cannot capture. Every
            handwritten word tells a story of love, sacrifice, hope, and
            history. Together, they become timeless gifts for future
            generations.
          </p>

          <Link
            href="/share-your-memory"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-600 px-7 py-3 font-semibold text-white transition hover:bg-amber-700"
          >
            Share a Letter
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Letter Collections
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Explore different types of preserved memories.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/30">
                <item.icon size={28} />
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Letters */}
      <section className="bg-slate-50 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold">
            Featured Legacy Letters
          </h2>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {letters.map((letter) => (
              <article
                key={letter.id}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
              >
                <span className="rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                  {letter.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {letter.title}
                </h3>

                <div className="mt-4 flex items-center gap-5 text-sm text-slate-500">
                  <span>{letter.author}</span>

                  <span className="flex items-center gap-1">
                    <CalendarDays size={16} />
                    {letter.year}
                  </span>
                </div>

                <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
                  "{letter.excerpt}"
                </p>

                <button className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-600 transition hover:gap-3">
                  Read Full Letter
                  <ArrowRight size={18} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <Heart className="mx-auto h-14 w-14 text-amber-500" />

        <h2 className="mt-8 text-4xl font-bold">
          Preserve a Letter Forever
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          Every handwritten letter carries emotions that deserve to live beyond
          a lifetime. Help us preserve your family's history by contributing a
          letter to The Memory Project.
        </p>

        <Link
          href="/share-your-memory"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700"
        >
          Submit Your Letter
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}