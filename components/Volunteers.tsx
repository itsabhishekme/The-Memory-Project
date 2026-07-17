import Link from "next/link";
import {
  Users,
  Mic,
  Camera,
  BookOpen,
  HeartHandshake,
  Globe,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const volunteerRoles = [
  {
    icon: Mic,
    title: "Story Collector",
    description:
      "Interview individuals, record oral histories, and help preserve personal memories for future generations.",
  },
  {
    icon: Camera,
    title: "Photo Archivist",
    description:
      "Digitize and organize family photographs, historical images, and treasured visual memories.",
  },
  {
    icon: BookOpen,
    title: "Content Editor",
    description:
      "Review stories, edit transcripts, and ensure every memory is preserved with clarity and respect.",
  },
  {
    icon: Globe,
    title: "Community Ambassador",
    description:
      "Connect with schools, communities, museums, and local organizations to expand the project's reach.",
  },
  {
    icon: HeartHandshake,
    title: "Event Volunteer",
    description:
      "Support memory collection drives, exhibitions, storytelling events, and community outreach programs.",
  },
  {
    icon: Users,
    title: "Research Assistant",
    description:
      "Help document local history, verify historical information, and organize archival collections.",
  },
];

const benefits = [
  "Preserve real human stories and cultural heritage",
  "Gain experience in archives, storytelling, and research",
  "Work alongside historians, educators, and volunteers",
  "Receive certificates for active participation",
  "Build leadership and communication skills",
  "Make a meaningful impact in your community",
];

export default function Volunteers() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Join Our Team
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Become a Volunteer
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Every memory deserves to be preserved. Join passionate volunteers
            who are documenting stories, traditions, photographs, and voices
            that inspire future generations.
          </p>
        </div>

        {/* Volunteer Roles */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {volunteerRoles.map((role) => {
            const Icon = role.icon;

            return (
              <div
                key={role.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">
                  {role.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {role.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Why Volunteer With Us?
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Volunteering with The Memory Project means helping preserve
              history while developing valuable personal and professional
              skills. Every interview, photograph, and story contributes to a
              growing archive that celebrates humanity.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    size={22}
                    className="mt-1 text-amber-500"
                  />

                  <p className="text-slate-700 dark:text-slate-300">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-10 text-white shadow-2xl">
            <Users size={60} />

            <h3 className="mt-6 text-3xl font-bold">
              Ready to Make a Difference?
            </h3>

            <p className="mt-6 text-lg leading-8 text-white/90">
              Whether you're a student, teacher, historian, photographer,
              researcher, filmmaker, or simply passionate about preserving
              memories, your contribution matters.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/volunteers/apply"
                className="rounded-full bg-white px-8 py-4 text-center font-semibold text-slate-900 transition hover:scale-105"
              >
                Apply Now
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white px-8 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
            Help Preserve Memories That Matter
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Together we can build a living archive of stories, voices,
            traditions, and photographs that educate, inspire, and connect
            future generations.
          </p>

          <Link
            href="/share-your-memory"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:gap-3 dark:bg-white dark:text-slate-900"
          >
            Share Your Memory
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}