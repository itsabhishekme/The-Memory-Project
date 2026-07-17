import type { Metadata } from "next";
import Link from "next/link";
import {
  HeartHandshake,
  Users,
  BookOpen,
  Camera,
  Mic,
  Globe,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Volunteers | The Memory Project",
  description:
    "Join The Memory Project as a volunteer and help preserve oral histories, family archives, photographs, letters, and cultural heritage.",
};

const opportunities = [
  {
    icon: Mic,
    title: "Interview Volunteers",
    description:
      "Record oral histories and meaningful conversations with individuals and families.",
  },
  {
    icon: Camera,
    title: "Photo Archivists",
    description:
      "Digitize, organize, and preserve historic photographs for future generations.",
  },
  {
    icon: BookOpen,
    title: "Story Editors",
    description:
      "Help edit, proofread, and publish inspiring life stories and memories.",
  },
  {
    icon: Globe,
    title: "Community Outreach",
    description:
      "Connect with communities and encourage people to preserve their stories.",
  },
];

const benefits = [
  "Receive a Volunteer Certificate",
  "Contribute to preserving history",
  "Work with historians and storytellers",
  "Develop communication and research skills",
  "Join a global community of volunteers",
  "Make a lasting social impact",
];

const steps = [
  "Submit your volunteer application.",
  "Attend a short online orientation.",
  "Choose your preferred volunteer role.",
  "Begin preserving stories and memories.",
];

export default function VolunteersPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <HeartHandshake className="mx-auto mb-6 h-16 w-16" />

          <h1 className="text-5xl font-bold md:text-6xl">
            Become a Volunteer
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Every memory deserves to be preserved. Join our volunteer community
            and help document stories, traditions, photographs, letters, and
            oral histories for future generations.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
            >
              Apply Now
            </Link>

            <Link
              href="/share-your-memory"
              className="rounded-full border border-white px-8 py-4 font-semibold hover:bg-white hover:text-slate-900"
            >
              Share a Memory
            </Link>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold">
              Why Volunteer With Us?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Volunteers are the heart of The Memory Project. Together we ensure
              that valuable memories, traditions, and life experiences are never
              forgotten.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {opportunities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
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

      {/* Benefits */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-bold">
                Volunteer Benefits
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                Your contribution helps preserve history while allowing you to
                grow personally and professionally.
              </p>

              <div className="mt-10 space-y-5">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-4">
                    <CheckCircle className="mt-1 h-6 w-6 text-green-600" />

                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl dark:bg-slate-950">
              <Users className="mb-6 h-16 w-16 text-amber-600" />

              <h3 className="text-3xl font-bold">
                Our Volunteer Community
              </h3>

              <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
                Join people from different backgrounds who believe every story,
                memory, and tradition deserves to be preserved for future
                generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-4xl font-bold">
            How to Join
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-slate-200 p-8 dark:border-slate-800"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-xl font-bold text-white">
                  {index + 1}
                </div>

                <p className="text-lg leading-8">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-amber-500 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 text-center md:grid-cols-4">
            <div>
              <Users className="mx-auto mb-4 h-10 w-10" />
              <h3 className="text-5xl font-bold">500+</h3>
              <p className="mt-2">Volunteers</p>
            </div>

            <div>
              <BookOpen className="mx-auto mb-4 h-10 w-10" />
              <h3 className="text-5xl font-bold">2,000+</h3>
              <p className="mt-2">Stories Preserved</p>
            </div>

            <div>
              <Clock className="mx-auto mb-4 h-10 w-10" />
              <h3 className="text-5xl font-bold">10,000+</h3>
              <p className="mt-2">Volunteer Hours</p>
            </div>

            <div>
              <Award className="mx-auto mb-4 h-10 w-10" />
              <h3 className="text-5xl font-bold">100%</h3>
              <p className="mt-2">Community Driven</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900 px-8 py-20 text-center text-white">
          <h2 className="text-4xl font-bold">
            Help Preserve Human Memories
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Become part of a movement dedicated to preserving stories,
            traditions, and memories that might otherwise disappear forever.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-semibold transition hover:bg-amber-600"
          >
            Join as a Volunteer
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}