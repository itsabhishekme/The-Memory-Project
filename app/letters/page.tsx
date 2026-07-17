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
    title: "More Than Recipes. A Living Legacy.",
    author: "The Living Legacy",
    year: "2026",
    category: "Our Mission",
    excerpt:
      "Every recipe carries generations of memories. Every documentary preserves voices that deserve to be heard. Every act of kindness creates hope.",
  },
  {
    id: 2,
    title: "Celebrating India's Culinary Heritage",
    author: "The Living Legacy",
    year: "2026",
    category: "Culinary Heritage",
    excerpt:
      "Traditional recipes are more than ingredients—they are stories of families, festivals, cultures, and love passed from one generation to the next.",
  },
  {
    id: 3,
    title: "Authentic Storytelling That Preserves Voices",
    author: "The Living Legacy",
    year: "2026",
    category: "Documentary",
    excerpt:
      "Every documentary captures real people, forgotten histories, and untold journeys so their voices continue to inspire future generations.",
  },
  {
    id: 4,
    title: "Every Act of Kindness Creates Hope",
    author: "The Living Legacy",
    year: "2026",
    category: "Social Impact",
    excerpt:
      "Compassion transforms lives. Through community service, shared meals, and meaningful action, kindness becomes a legacy that lives on.",
  },
  {
    id: 5,
    title: "Connecting Tradition, Humanity & the Future",
    author: "The Living Legacy",
    year: "2026",
    category: "Living Legacy",
    excerpt:
      "The Living Legacy connects India's timeless traditions with modern generations through culture, storytelling, preservation, and community-driven experiences.",
  },
  {
    id: 6,
    title: "Preserving What Matters Most",
    author: "The Living Legacy",
    year: "2026",
    category: "Legacy",
    excerpt:
      "From cherished family recipes and oral histories to documentaries and humanitarian initiatives, every memory we preserve strengthens the bridge between the past, present, and future.",
  },
];

const categories = [
  {
    title: "Culinary Heritage",
    icon: BookOpen,
    description:
      "Preserving authentic recipes, regional cuisines, and the traditions that bring generations together.",
  },
  {
    title: "Documentary Stories",
    icon: Users,
    description:
      "Capturing real voices, untold journeys, and inspiring human stories through meaningful documentaries.",
  },
  {
    title: "Social Impact",
    icon: Heart,
    description:
      "Celebrating compassion, community service, and initiatives that create hope and lasting positive change.",
  },
  {
    title: "Living Legacy",
    icon: PenTool,
    description:
      "Connecting India's culture, heritage, storytelling, and humanity to inspire present and future generations.",
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