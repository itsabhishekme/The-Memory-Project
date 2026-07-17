// D:\The Memory Project\the-memory-project\app\collections\page.tsx

import type { Metadata } from "next";
import Collections from "@/components/Collections";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore curated collections of family histories, oral traditions, photographs, legacy letters, cultural memories, and untold human stories preserved by The Memory Project.",
};

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
            The Memory Project
          </span>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
            Memory Collections
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Every collection is a doorway into history. Discover carefully
            curated archives of memories, traditions, photographs, family
            stories, and cultural heritage that deserve to be remembered for
            generations.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <Collections />

      {/* About Collections */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border p-8 dark:border-slate-800">
            <div className="mb-4 text-4xl">👨‍👩‍👧</div>

            <h2 className="mb-3 text-2xl font-bold">
              Family Memories
            </h2>

            <p className="text-slate-600 dark:text-slate-400">
              Personal stories, family albums, heirlooms, traditions, and
              memories passed from one generation to another.
            </p>
          </div>

          <div className="rounded-2xl border p-8 dark:border-slate-800">
            <div className="mb-4 text-4xl">📷</div>

            <h2 className="mb-3 text-2xl font-bold">
              Historic Photographs
            </h2>

            <p className="text-slate-600 dark:text-slate-400">
              Digitally preserving rare photographs that document communities,
              celebrations, culture, architecture, and everyday life.
            </p>
          </div>

          <div className="rounded-2xl border p-8 dark:border-slate-800">
            <div className="mb-4 text-4xl">🎙️</div>

            <h2 className="mb-3 text-2xl font-bold">
              Oral Histories
            </h2>

            <p className="text-slate-600 dark:text-slate-400">
              Recorded voices and conversations capturing wisdom, experiences,
              and untold stories directly from the people who lived them.
            </p>
          </div>

          <div className="rounded-2xl border p-8 dark:border-slate-800">
            <div className="mb-4 text-4xl">💌</div>

            <h2 className="mb-3 text-2xl font-bold">
              Legacy Letters
            </h2>

            <p className="text-slate-600 dark:text-slate-400">
              Letters written across generations that preserve emotions,
              relationships, and remarkable moments in history.
            </p>
          </div>

          <div className="rounded-2xl border p-8 dark:border-slate-800">
            <div className="mb-4 text-4xl">🏡</div>

            <h2 className="mb-3 text-2xl font-bold">
              Community Heritage
            </h2>

            <p className="text-slate-600 dark:text-slate-400">
              Celebrating local traditions, festivals, architecture, crafts,
              languages, and shared cultural identity.
            </p>
          </div>

          <div className="rounded-2xl border p-8 dark:border-slate-800">
            <div className="mb-4 text-4xl">🌍</div>

            <h2 className="mb-3 text-2xl font-bold">
              Global Stories
            </h2>

            <p className="text-slate-600 dark:text-slate-400">
              Memories from diverse cultures across the world, preserving human
              experiences that connect us beyond borders.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-slate-100 py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 text-center md:grid-cols-4">
            <div>
              <h3 className="text-5xl font-black text-amber-600">
                1,200+
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Memory Collections
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-amber-600">
                18K+
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Historic Photographs
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-amber-600">
                4,500+
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Human Stories
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-amber-600">
                100+
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Communities Preserved
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <CTA />
    </main>
  );
}