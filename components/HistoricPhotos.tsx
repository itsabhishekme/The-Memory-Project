"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera, CalendarDays, MapPin, ArrowRight } from "lucide-react";

const photographs = [
  {
    id: 1,
    title: "The Village Well",
    year: "1952",
    location: "Rajasthan, India",
    image: "/images/memory-project/photographs/village-well.jpg",
    description:
      "A gathering place where generations met every morning, sharing stories, traditions, and community life.",
  },
  {
    id: 2,
    title: "Grandmother's Kitchen",
    year: "1968",
    location: "Bihar, India",
    image: "/images/memory-project/photographs/grandmother-kitchen.jpg",
    description:
      "An authentic kitchen preserving recipes, handmade utensils, and memories passed from one generation to another.",
  },
  {
    id: 3,
    title: "The Old Classroom",
    year: "1975",
    location: "West Bengal, India",
    image: "/images/memory-project/photographs/old-classroom.jpg",
    description:
      "A classroom where thousands of dreams began, preserving the spirit of education and community.",
  },
  {
    id: 4,
    title: "Harvest Festival",
    year: "1981",
    location: "Punjab, India",
    image: "/images/memory-project/photographs/harvest-festival.jpg",
    description:
      "Celebrating togetherness through harvest traditions, music, dance, and shared memories.",
  },
  {
    id: 5,
    title: "Family Portrait",
    year: "1948",
    location: "Uttar Pradesh, India",
    image: "/images/memory-project/photographs/family-portrait.jpg",
    description:
      "A timeless family photograph capturing love, resilience, and the beginning of a new generation.",
  },
  {
    id: 6,
    title: "Railway Memories",
    year: "1962",
    location: "Mumbai, India",
    image: "/images/memory-project/photographs/railway.jpg",
    description:
      "Historic railway journeys that connected families, cities, and countless unforgettable stories.",
  },
];

export default function HistoricPhotos() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
            <Camera className="mr-2 h-4 w-4" />
            Historic Photographs
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Every Photograph Preserves
            <span className="block text-amber-600">
              A Moment in History
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Photographs preserve more than faces—they capture traditions,
            emotions, places, and memories that shape our collective heritage.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {photographs.map((photo) => (
            <article
              key={photo.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {photo.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-amber-600" />
                    {photo.year}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-600" />
                    {photo.location}
                  </div>
                </div>

                <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                  {photo.description}
                </p>

                <Link
                  href="/photographs"
                  className="mt-6 inline-flex items-center font-semibold text-amber-600 transition hover:gap-3"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-600 p-12 text-center text-white">
          <h3 className="text-3xl font-bold">
            Do You Have Historic Photographs?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Help preserve your family's visual history by sharing photographs
            that tell meaningful stories for future generations.
          </p>

          <Link
            href="/share-your-memory"
            className="mt-8 inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-amber-700 transition hover:scale-105"
          >
            Share Your Photographs
          </Link>
        </div>
      </div>
    </section>
  );
}