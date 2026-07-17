"use client";

import Link from "next/link";
import { Mic, MapPin, Calendar, ArrowRight } from "lucide-react";

const oralHistories = [
  {
    id: 1,
    title: "Grandmother's Kitchen Stories",
    location: "Varanasi, Uttar Pradesh",
    year: "1958",
    speaker: "Savitri Devi",
    description:
      "A heartfelt recollection of traditional cooking, family gatherings, and the recipes that connected generations.",
  },
  {
    id: 2,
    title: "The Village Teacher",
    location: "Mysuru, Karnataka",
    year: "1972",
    speaker: "Raman Gowda",
    description:
      "An inspiring journey of educating children in a small village and preserving values through storytelling.",
  },
  {
    id: 3,
    title: "Life Beside the River",
    location: "Majuli, Assam",
    year: "1966",
    speaker: "Anita Das",
    description:
      "Memories of growing up beside the Brahmaputra, local traditions, festivals, and community life.",
  },
  {
    id: 4,
    title: "Letters From Home",
    location: "Jaipur, Rajasthan",
    year: "1981",
    speaker: "Mahendra Singh",
    description:
      "A family's memories preserved through handwritten letters during years spent away from home.",
  },
  {
    id: 5,
    title: "Voices of the Hills",
    location: "Shimla, Himachal Pradesh",
    year: "1969",
    speaker: "Kamla Sharma",
    description:
      "Stories of mountain life, changing seasons, folk songs, and traditions passed through generations.",
  },
  {
    id: 6,
    title: "A Life of Service",
    location: "Kochi, Kerala",
    year: "1978",
    speaker: "Joseph Mathew",
    description:
      "Experiences of serving local communities and preserving humanity through compassion and kindness.",
  },
];

export default function OralHistory() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            <Mic className="h-4 w-4" />
            Oral Histories
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Voices That Deserve to Be Remembered
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Every conversation holds a piece of history. Through oral
            storytelling, we preserve personal experiences, cultural heritage,
            and the wisdom of generations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {oralHistories.map((story) => (
            <article
              key={story.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-amber-200 via-orange-200 to-red-200">
                <Mic className="h-16 w-16 text-white" />
              </div>

              <div className="p-7">
                <div className="mb-3 flex flex-wrap gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {story.location}
                  </span>

                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {story.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {story.title}
                </h3>

                <p className="mt-2 font-medium text-amber-600">
                  {story.speaker}
                </p>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {story.description}
                </p>

                <Link
                  href={`/stories/${story.id}`}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-600 transition group-hover:gap-3"
                >
                  Read Story

                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-10 text-center text-white">
          <h3 className="text-3xl font-bold">
            Every Voice Matters
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-amber-100">
            Oral histories preserve emotions, traditions, and lived experiences
            that often never appear in books. Together, we can build a living
            archive where every story continues to inspire future generations.
          </p>

          <Link
            href="/share-your-memory"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-lg font-semibold text-amber-600 transition hover:scale-105"
          >
            Share Your Story
          </Link>
        </div>
      </div>
    </section>
  );
}