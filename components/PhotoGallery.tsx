"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera, CalendarDays, MapPin, ArrowRight } from "lucide-react";

interface Photo {
  id: number;
  title: string;
  image: string;
  year: string;
  location: string;
  description: string;
}

const photos: Photo[] = [
  {
    id: 1,
    title: "Grandmother's Kitchen",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    year: "1972",
    location: "Bihar, India",
    description:
      "A treasured family kitchen where recipes, traditions, and memories were passed down through generations.",
  },
  {
    id: 2,
    title: "Village Festival",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176",
    year: "1986",
    location: "Rajasthan, India",
    description:
      "A joyful celebration preserving local customs, music, dance, and cultural heritage.",
  },
  {
    id: 3,
    title: "School Memories",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    year: "1994",
    location: "Karnataka, India",
    description:
      "Students gathered outside their village school, creating lifelong friendships and dreams.",
  },
  {
    id: 4,
    title: "Family Portrait",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    year: "1965",
    location: "Punjab, India",
    description:
      "A timeless portrait celebrating family bonds and the stories that connect generations.",
  },
  {
    id: 5,
    title: "Traditional Crafts",
    image: "https://images.unsplash.com/photo-1515378791036-0648a814c963",
    year: "1981",
    location: "Gujarat, India",
    description:
      "Local artisans preserving centuries-old craftsmanship through dedication and skill.",
  },
  {
    id: 6,
    title: "Harvest Season",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    year: "1978",
    location: "Tamil Nadu, India",
    description:
      "Farmers working together during harvest, capturing the spirit of community and resilience.",
  },
];

export default function PhotoGallery() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            <Camera size={16} />
            Historic Photo Gallery
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Every Photograph Preserves a Story
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Photographs are more than images—they capture emotions, traditions,
            places, and moments that become priceless memories for future
            generations.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <article
              key={photo.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {photo.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    {photo.year}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {photo.location}
                  </div>
                </div>

                <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                  {photo.description}
                </p>

                <Link
                  href="/photographs"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-amber-600 transition hover:gap-3"
                >
                  View Story
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-8 py-16 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold md:text-4xl">
            Preserve Your Family Photographs
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Old photographs fade over time, but their stories can live forever.
            Help us build a digital archive that preserves your family's
            memories for future generations.
          </p>

          <Link
            href="/share-your-memory"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
          >
            Upload Your Photos
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}