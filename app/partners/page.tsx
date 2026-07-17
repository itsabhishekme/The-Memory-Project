import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  GraduationCap,
  Landmark,
  HeartHandshake,
  Globe2,
  ArrowRight,
  CheckCircle2,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partners | The Memory Project",
  description:
    "Partner with The Memory Project to preserve human stories, oral histories, family archives, photographs, and cultural heritage.",
};

const partners = [
  {
    title: "Corporate Partners",
    description:
      "Support cultural preservation through CSR initiatives, sponsorships, and employee volunteering.",
    icon: Building2,
  },
  {
    title: "Educational Institutions",
    description:
      "Schools and universities documenting local history, oral traditions, and community heritage.",
    icon: GraduationCap,
  },
  {
    title: "Museums & Archives",
    description:
      "Collaborating to preserve historical collections, heritage records, and cultural knowledge.",
    icon: Landmark,
  },
  {
    title: "NGOs & Communities",
    description:
      "Working together to document inspiring human stories and preserve community memories.",
    icon: HeartHandshake,
  },
  {
    title: "Researchers & Historians",
    description:
      "Helping document authentic history through interviews, archives, and research projects.",
    icon: Globe2,
  },
  {
    title: "Global Collaborators",
    description:
      "Connecting storytellers, filmmakers, photographers, volunteers, and organizations worldwide.",
    icon: Handshake,
  },
];

const benefits = [
  "Preserve history for future generations",
  "Create meaningful community impact",
  "Support documentary storytelling",
  "Promote cultural heritage",
  "Build long-term collaborations",
  "Contribute to a global memory archive",
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-100 via-white to-orange-100 py-24 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="rounded-full bg-amber-200 px-5 py-2 text-sm font-semibold text-amber-700">
            Partnership Network
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
            Let's Preserve
            <span className="block text-amber-600">
              Human Stories Together
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            The Memory Project welcomes organizations, educational institutions,
            museums, nonprofits, researchers, and volunteers who believe every
            story deserves to be remembered.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            Who Can Partner With Us?
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Everyone passionate about preserving history and humanity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner) => {
            const Icon = partner.icon;

            return (
              <div
                key={partner.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {partner.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {partner.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-bold">
                Why Partner With Us?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                Together we can preserve memories, celebrate culture, and create
                a permanent archive of authentic human experiences.
              </p>

              <div className="mt-10 space-y-5">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-green-600" size={22} />

                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl dark:bg-slate-950">
              <h3 className="text-3xl font-bold">
                Partnership Opportunities
              </h3>

              <ul className="mt-8 space-y-5 text-slate-600 dark:text-slate-400">
                <li>• Community storytelling projects</li>
                <li>• Documentary collaborations</li>
                <li>• Oral history recording programs</li>
                <li>• Heritage preservation initiatives</li>
                <li>• Cultural exhibitions</li>
                <li>• Research partnerships</li>
                <li>• Volunteer programs</li>
                <li>• CSR collaborations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-8 py-20 text-center text-white">
          <h2 className="text-4xl font-bold">
            Become a Partner
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Help preserve family histories, oral traditions, photographs,
            letters, and untold human stories that deserve to live forever.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
            >
              Contact Us
            </Link>

            <Link
              href="/share-your-memory"
              className="flex items-center justify-center gap-2 rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
            >
              Share a Story
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}