import type { Metadata } from "next";
import {
  Archive,
  Users,
  BookOpen,
  ImageIcon,
  MapPin,
  Calendar,
  ArrowRight,
  Heart,
  Camera,
  ScrollText,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Family Archives | The Memory Project",
  description:
    "Preserving family histories, photographs, letters, heirlooms, traditions, and memories to create a living archive for future generations.",
};

const archives = [
  {
    title: "Family History",
    description:
      "Document your family's journey across generations, preserving names, places, traditions, and remarkable life stories.",
    icon: Users,
  },
  {
    title: "Historic Photographs",
    description:
      "Digitally preserve treasured family photographs before they fade with time.",
    icon: Camera,
  },
  {
    title: "Letters & Diaries",
    description:
      "Archive handwritten letters, journals, postcards, and personal diaries that tell authentic stories.",
    icon: ScrollText,
  },
  {
    title: "Family Documents",
    description:
      "Preserve birth certificates, old records, newspaper clippings, and important family documents.",
    icon: BookOpen,
  },
];

const timeline = [
  "Family Origins",
  "Migration Journey",
  "Marriage & Celebrations",
  "Traditional Occupations",
  "Community Contributions",
  "Present Generation",
];

export default function FamilyArchivesPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
              <Archive className="mr-2 h-4 w-4" />
              Family Archives
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight">
              Every Family Has
              <span className="block text-amber-600">
                A Story Worth Preserving
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-300">
              The Memory Project helps families preserve photographs, stories,
              letters, traditions, heirlooms, and memories so future
              generations never lose their roots.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/share-your-memory"
                className="rounded-full bg-amber-600 px-7 py-3 font-semibold text-white transition hover:bg-amber-700"
              >
                Start Your Archive
              </Link>

              <Link
                href="/collections"
                className="rounded-full border border-slate-300 px-7 py-3 font-semibold hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900"
              >
                Explore Archives
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Preserve Your Family Legacy
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Every photograph, every handwritten letter, every family tradition,
            and every memory carries a legacy. Together they create the story of
            who we are.
          </p>
        </div>
      </section>

      {/* Archive Types */}
      <section className="bg-slate-50 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-14 text-center text-4xl font-bold">
            What Can You Archive?
          </h2>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {archives.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:bg-slate-950"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-900/20">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold">
              Build Your Family Timeline
            </h2>

            <p className="mt-5 text-slate-600 dark:text-slate-400">
              Capture important milestones across generations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {timeline.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-xl font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold">
                  {step}
                </h3>

                <p className="mt-3 text-slate-600 dark:text-slate-400">
                  Preserve stories, memories, photographs, and important
                  moments related to this stage of your family's history.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-amber-600 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-4">
          <div className="text-center">
            <Users className="mx-auto mb-4 h-10 w-10" />
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="mt-2">Families Preserved</p>
          </div>

          <div className="text-center">
            <ImageIcon className="mx-auto mb-4 h-10 w-10" />
            <h3 className="text-4xl font-bold">12K+</h3>
            <p className="mt-2">Historic Photos</p>
          </div>

          <div className="text-center">
            <Calendar className="mx-auto mb-4 h-10 w-10" />
            <h3 className="text-4xl font-bold">150+</h3>
            <p className="mt-2">Years of Memories</p>
          </div>

          <div className="text-center">
            <Heart className="mx-auto mb-4 h-10 w-10" />
            <h3 className="text-4xl font-bold">∞</h3>
            <p className="mt-2">Stories Saved Forever</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 px-10 py-20 text-center text-white">
          <h2 className="text-4xl font-bold">
            Preserve Your Family's Legacy Today
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Every family has stories that deserve to be remembered. Start your
            family's digital archive and pass your legacy to future generations.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/share-your-memory"
              className="inline-flex items-center rounded-full bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700"
            >
              Create Your Archive
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/stories"
              className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
            >
              Browse Stories
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-slate-400">
            <MapPin className="h-5 w-5" />
            Building a living archive across India and beyond.
          </div>
        </div>
      </section>
    </main>
  );
}