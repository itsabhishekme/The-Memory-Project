import Link from "next/link";
import {
  Building2,
  GraduationCap,
  Landmark,
  HeartHandshake,
  Globe2,
  ArrowRight,
} from "lucide-react";

const partners = [
  {
    icon: Building2,
    title: "Corporate Partners",
    description:
      "Collaborate with us through CSR initiatives, sponsorships, employee volunteering, and long-term social impact programs.",
    href: "/partners/corporate",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description:
      "Schools, colleges, and universities helping preserve oral histories, local heritage, and community memories.",
    href: "/partners/education",
  },
  {
    icon: Landmark,
    title: "Museums & Cultural Organizations",
    description:
      "Working together to safeguard historical archives, traditional knowledge, and cultural heritage.",
    href: "/partners/culture",
  },
  {
    icon: HeartHandshake,
    title: "NGOs & Communities",
    description:
      "Partnering with grassroots organizations to document stories that inspire compassion and lasting change.",
    href: "/partners/community",
  },
  {
    icon: Globe2,
    title: "Global Collaborators",
    description:
      "Connecting storytellers, researchers, historians, filmmakers, and volunteers from around the world.",
    href: "/partners/global",
  },
];

export default function Partners() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Partnership Network
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Building a Global Community of Memory Keepers
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            The Memory Project welcomes organizations, institutions,
            communities, and individuals who believe that preserving stories,
            history, and human experiences creates a stronger future for
            generations to come.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner) => {
            const Icon = partner.icon;

            return (
              <div
                key={partner.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition group-hover:bg-amber-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">
                  {partner.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {partner.description}
                </p>

                <Link
                  href={partner.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-600 transition hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-8 py-16 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold md:text-4xl">
            Become a Partner
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Whether you're a nonprofit, university, museum, archive, business,
            filmmaker, researcher, or community leader, your partnership can
            help preserve stories that might otherwise be lost forever.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
            >
              Become a Partner
            </Link>

            <Link
              href="/share-your-memory"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Share a Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}