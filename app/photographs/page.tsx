
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Camera, Images, MapPin, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Historic Photographs | The Memory Project",
  description:
    "Explore historic photographs that preserve family memories, communities, traditions, and moments that shaped history.",
};

const photographs = [
  {
    title: "Village Morning",
    year: "1968",
    location: "Bihar, India",
    image: "/images/memory-project/photographs/photo-1.jpg",
    description:
      "A peaceful morning capturing everyday life in a traditional Indian village.",
  },
  {
    title: "Family Celebration",
    year: "1979",
    location: "Rajasthan, India",
    image: "/images/memory-project/photographs/photo-2.jpg",
    description:
      "A multi-generational family gathering celebrating culture and togetherness.",
  },
  {
    title: "Traditional Marketplace",
    year: "1985",
    location: "Karnataka, India",
    image: "/images/memory-project/photographs/photo-3.jpg",
    description:
      "A bustling market preserving local traditions, crafts, and livelihoods.",
  },
  {
    title: "Harvest Season",
    year: "1972",
    location: "Punjab, India",
    image: "/images/memory-project/photographs/photo-4.jpg",
    description:
      "Farmers working together during the harvest, reflecting community spirit.",
  },
  {
    title: "School Memories",
    year: "1991",
    location: "Uttar Pradesh, India",
    image: "/images/memory-project/photographs/photo-5.jpg",
    description:
      "Children standing proudly outside their village school.",
  },
  {
    title: "Festival of Lights",
    year: "1988",
    location: "Varanasi, India",
    image: "/images/memory-project/photographs/photo-6.jpg",
    description:
      "Families celebrating together, preserving traditions through generations.",
  },
];

export default function PhotographsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-100 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <Camera size={40} />
          </div>

          <h1 className="mt-8 text-5xl font-bold md:text-6xl">
            Historic Photographs
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Every photograph tells a story. Together, these images preserve
            memories of families, communities, traditions, and the everyday
            moments that define our shared history.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold">
          Preserving Moments That Matter
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
          Photographs are more than images—they are visual memories that connect
          generations. They capture celebrations, struggles, traditions,
          journeys, and everyday life, allowing future generations to understand
          where they came from.
        </p>
      </section>

      {/* Gallery */}
      <section className="bg-slate-50 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex items-center gap-3">
            <Images className="text-amber-600" size={32} />
            <h2 className="text-4xl font-bold">Featured Collection</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {photographs.map((photo) => (
              <article
                key={photo.title}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-950"
              >
                <div className="relative h-72">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-semibold">{photo.title}</h3>

                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                    <Calendar size={16} />
                    {photo.year}
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={16} />
                    {photo.location}
                  </div>

                  <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                    {photo.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Preserve */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border p-8">
            <h3 className="text-2xl font-semibold">
              Family Memories
            </h3>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Preserve photographs that tell your family's story across
              generations.
            </p>
          </div>

          <div className="rounded-3xl border p-8">
            <h3 className="text-2xl font-semibold">
              Cultural Heritage
            </h3>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Protect traditions, festivals, architecture, and everyday life
              through visual history.
            </p>
          </div>

          <div className="rounded-3xl border p-8">
            <h3 className="text-2xl font-semibold">
              Living Archive
            </h3>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Build a digital archive that can educate and inspire future
              generations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-600 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Share Your Historic Photographs
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/90">
            Help preserve memories, heritage, and history by contributing your
            family's photographs to The Memory Project.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/share-your-memory"
              className="rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
            >
              Submit Photographs
            </Link>

            <Link
              href="/collections"
              className="inline-flex items-center gap-2 rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
            >
              Browse Collections
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}