import type { Metadata } from "next";
import Link from "next/link";
import {
  Mic,
  Users,
  Heart,
  BookOpen,
  Globe,
  Clock,
  ArrowRight,
  PlayCircle,
  Quote,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Oral Histories | The Memory Project",
  description:
    "Explore oral histories that preserve voices, memories, traditions, and lived experiences for future generations.",
};

const featuredStories = [
  {
    title: "Voices of Freedom",
    location: "Delhi, India",
    duration: "18 min",
    description:
      "Personal memories from individuals who witnessed India's early years after independence.",
  },
  {
    title: "Grandmother's Kitchen",
    location: "Rajasthan, India",
    duration: "12 min",
    description:
      "Traditional recipes, family rituals, and stories passed down through generations.",
  },
  {
    title: "Life Along the River",
    location: "Assam, India",
    duration: "22 min",
    description:
      "A community reflects on nature, resilience, and changing times through lived experiences.",
  },
];

const reasons = [
  {
    icon: Heart,
    title: "Preserve Family Legacy",
    description:
      "Capture the wisdom and memories of parents and grandparents before they are lost.",
  },
  {
    icon: BookOpen,
    title: "Protect Cultural Heritage",
    description:
      "Safeguard traditions, customs, dialects, and folklore for future generations.",
  },
  {
    icon: Globe,
    title: "Strengthen Communities",
    description:
      "Every shared story builds understanding, empathy, and cultural connection.",
  },
  {
    icon: Clock,
    title: "Create Living History",
    description:
      "Real voices provide authentic perspectives that written records often miss.",
  },
];

const process = [
  {
    step: "01",
    title: "Record",
    description:
      "Interview individuals and preserve their authentic voice through audio or video.",
  },
  {
    step: "02",
    title: "Document",
    description:
      "Transcribe, organize, and enrich each story with photographs and historical context.",
  },
  {
    step: "03",
    title: "Preserve",
    description:
      "Store every memory securely in a digital archive for generations to discover.",
  },
  {
    step: "04",
    title: "Share",
    description:
      "Publish inspiring stories that educate, connect communities, and celebrate humanity.",
  },
];

export default function OralHistoriesPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-100 py-28 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg">
            <Mic size={40} />
          </div>

          <h1 className="mt-8 text-5xl font-bold md:text-7xl">
            Oral Histories
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600 dark:text-slate-300">
            Every voice carries a lifetime of experiences. Through oral
            histories, we preserve memories, traditions, wisdom, and humanity
            before they fade with time.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/share-your-memory"
              className="rounded-full bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700"
            >
              Share Your Story
            </Link>

            <Link
              href="/stories"
              className="rounded-full border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              Explore Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              Why Oral Histories Matter
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              Every Voice Deserves to Be Remembered
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Oral histories preserve more than facts—they capture emotions,
              values, traditions, and lived experiences that connect one
              generation to the next.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              From family memories and local folklore to historical events and
              personal journeys, each recording becomes part of a living archive
              that celebrates humanity.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-10 text-white">
            <Users className="h-16 w-16" />

            <h3 className="mt-8 text-3xl font-bold">
              Preserve Memories Before They Disappear
            </h3>

            <p className="mt-6 leading-8 text-white/90">
              Every family has stories waiting to be told. Recording them today
              ensures future generations inherit wisdom instead of silence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold">
            Featured Oral Histories
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredStories.map((story) => (
              <article
                key={story.title}
                className="rounded-3xl bg-white p-8 shadow transition hover:-translate-y-2 dark:bg-slate-950"
              >
                <PlayCircle className="h-12 w-12 text-amber-600" />

                <h3 className="mt-6 text-2xl font-semibold">
                  {story.title}
                </h3>

                <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {story.location}
                  </span>

                  <span>{story.duration}</span>
                </div>

                <p className="mt-6 leading-7 text-slate-600 dark:text-slate-400">
                  {story.description}
                </p>

                <Link
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-600"
                >
                  Listen Story
                  <ArrowRight size={18} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Importance */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center text-4xl font-bold">
          Why We Preserve Oral Histories
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 p-8 transition hover:shadow-xl dark:border-slate-800"
              >
                <Icon className="h-12 w-12 text-amber-600" />

                <h3 className="mt-6 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold">
            How We Preserve Stories
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl bg-white p-8 shadow dark:bg-slate-950"
              >
                <span className="text-5xl font-bold text-amber-500">
                  {item.step}
                </span>

                <h3 className="mt-6 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <Quote className="mx-auto h-16 w-16 text-amber-500" />

        <blockquote className="mt-8 text-3xl font-semibold leading-relaxed md:text-5xl">
          "When an elder dies, a library burns. Recording their voice keeps that
          library alive."
        </blockquote>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Help Preserve a Lifetime of Memories
          </h2>

          <p className="mt-8 text-xl leading-8 text-white/90">
            Record the stories of your parents, grandparents, neighbors, and
            community before they are lost forever.
          </p>

          <Link
            href="/share-your-memory"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
          >
            Start Recording
            <ArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}