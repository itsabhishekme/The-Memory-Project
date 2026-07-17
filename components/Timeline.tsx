import {
  CalendarDays,
  BookOpen,
  Mic,
  Camera,
  Archive,
  Globe2,
} from "lucide-react";

const timeline = [
  {
    year: "2026",
    icon: BookOpen,
    title: "The Memory Project Begins",
    description:
      "A vision to preserve family histories, personal memories, and untold human stories for future generations.",
  },
  {
    year: "2027",
    icon: Mic,
    title: "Oral Histories Collection",
    description:
      "Recording voices, interviews, and life experiences from elders, communities, and cultural storytellers.",
  },
  {
    year: "2028",
    icon: Camera,
    title: "Historic Photo Archive",
    description:
      "Digitizing treasured family photographs and documenting their stories before they disappear.",
  },
  {
    year: "2029",
    icon: Archive,
    title: "Letters & Family Archives",
    description:
      "Preserving handwritten letters, journals, certificates, and historical documents in a digital archive.",
  },
  {
    year: "2030",
    icon: Globe2,
    title: "Global Memory Network",
    description:
      "Connecting families, historians, volunteers, museums, and researchers across the world to protect humanity's shared heritage.",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            <CalendarDays className="mr-2 h-4 w-4" />
            Our Journey
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Timeline of The Memory Project
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Every milestone represents another step toward preserving the
            memories, traditions, and stories that define humanity.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-amber-200 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const left = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col items-start md:flex-row ${
                    left ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="w-full md:w-1/2 md:px-10">
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                      <span className="inline-flex rounded-full bg-amber-500 px-4 py-1 text-sm font-semibold text-white">
                        {item.year}
                      </span>

                      <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                        <Icon size={30} />
                      </div>

                      <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="absolute left-6 top-10 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-amber-500 dark:border-slate-950 md:left-1/2">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-10 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold md:text-4xl">
            Every Story Deserves a Place in History
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
            Help us preserve memories that inspire future generations. Share
            your family's history, photographs, letters, or oral stories and
            become part of a living archive.
          </p>

          <a
            href="/share-your-memory"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
          >
            Share Your Memory
          </a>
        </div>
      </div>
    </section>
  );
}