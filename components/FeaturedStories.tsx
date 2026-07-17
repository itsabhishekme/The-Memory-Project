"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "The Last Potter of the Village",
    excerpt:
      "A craftsman whose hands have shaped clay for more than sixty years shares his journey, traditions, and hope for the next generation.",
    image: "/images/memory-project/stories/potter.jpg",
    location: "Rajasthan, India",
    readingTime: "6 min read",
    category: "Oral History",
    href: "/stories/the-last-potter-of-the-village",
  },
  {
    id: 2,
    title: "Letters That Crossed Generations",
    excerpt:
      "A collection of handwritten letters revealing love, sacrifice, resilience, and family values preserved across decades.",
    image: "/images/memory-project/stories/letters.jpg",
    location: "Uttar Pradesh, India",
    readingTime: "5 min read",
    category: "Legacy Letters",
    href: "/stories/letters-that-crossed-generations",
  },
  {
    id: 3,
    title: "Grandmother's Forgotten Kitchen",
    excerpt:
      "More than recipes, these memories preserve family traditions, regional flavors, and stories shared around every meal.",
    image: "/images/memory-project/stories/kitchen.jpg",
    location: "Bihar, India",
    readingTime: "7 min read",
    category: "Family Heritage",
    href: "/stories/grandmothers-forgotten-kitchen",
  },
];

export default function FeaturedStories() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Featured Stories
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Stories That Deserve to Live Forever
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Every photograph, every letter, every memory, and every voice tells
            a story that shapes who we are. Together, these stories become our
            shared legacy.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-7">
                <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                  {story.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
                  {story.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {story.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{story.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{story.readingTime}</span>
                  </div>
                </div>

                <Link
                  href={story.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-600 transition hover:gap-3 hover:text-amber-700"
                >
                  Read Story
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/stories"
            className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-amber-600 dark:bg-white dark:text-slate-900"
          >
            Explore All Stories
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}