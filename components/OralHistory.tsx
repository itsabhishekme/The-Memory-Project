"use client";

import Link from "next/link";
import {
  Mic,
  PlayCircle,
  Clock3,
  MapPin,
  ArrowRight,
} from "lucide-react";

const oralHistories = [
  {
    id: 1,
    title: "The Last Village Storyteller",
    location: "Rajasthan, India",
    duration: "18 min",
    description:
      "A village elder shares forgotten folk tales, traditions, and wisdom that have been passed down through generations.",
  },
  {
    id: 2,
    title: "Grandmother's Kitchen Memories",
    location: "West Bengal, India",
    duration: "22 min",
    description:
      "A heartfelt conversation about homemade recipes, festivals, and family traditions that shaped an entire generation.",
  },
  {
    id: 3,
    title: "Letters From Partition",
    location: "Punjab, India",
    duration: "35 min",
    description:
      "A survivor reflects on migration, resilience, hope, and rebuilding life after one of history's greatest upheavals.",
  },
  {
    id: 4,
    title: "The Teacher Who Changed a Village",
    location: "Bihar, India",
    duration: "15 min",
    description:
      "A retired teacher recounts decades of educating children and transforming an entire rural community.",
  },
  {
    id: 5,
    title: "Life Along the Ganges",
    location: "Varanasi, India",
    duration: "27 min",
    description:
      "Boatmen, priests, and local families share stories about life, faith, and traditions along the sacred river.",
  },
  {
    id: 6,
    title: "Crafting Memories",
    location: "Kutch, Gujarat",
    duration: "20 min",
    description:
      "Master artisans discuss preserving traditional craftsmanship and passing skills to the next generation.",
  },
];

export default function OralHistory() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
            <Mic className="h-4 w-4" />
            Oral Histories
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Every Voice Deserves to Be Remembered
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Listen to authentic life experiences, family traditions, forgotten
            memories, and stories that connect generations through the power of
            human conversation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {oralHistories.map((story) => (
            <article
              key={story.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Placeholder Image */}
              <div className="relative flex h-56 items-center justify-center bg-gradient-to-br from-amber-500 via-orange-500 to-red-500">
                <PlayCircle className="h-20 w-20 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="mb-3 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {story.location}
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock3 className="h-4 w-4" />
                    {story.duration}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                  {story.title}
                </h3>

                <p className="mb-6 leading-7 text-slate-600 dark:text-slate-400">
                  {story.description}
                </p>

                <Link
                  href={`/stories/${story.id}`}
                  className="inline-flex items-center gap-2 font-semibold text-amber-600 transition hover:gap-3"
                >
                  Listen Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-slate-900 px-8 py-16 text-center text-white dark:bg-slate-950">
          <h3 className="text-3xl font-bold">
            Help Preserve a Voice Forever
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Every family has stories that deserve to be heard. Record an
            interview with your parents, grandparents, elders, or community
            members and become part of our living archive.
          </p>

          <Link
            href="/share-your-memory"
            className="mt-10 inline-flex items-center rounded-full bg-amber-500 px-8 py-4 font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            Share Your Oral History
          </Link>
        </div>
      </div>
    </section>
  );
}