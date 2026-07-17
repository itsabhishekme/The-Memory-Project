
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline | The Memory Project",
  description:
    "Explore the journey of The Memory Project through milestones, stories, preservation efforts, and community impact.",
};

const timeline = [
  {
    year: "2026",
    title: "The Memory Project Begins",
    description:
      "A vision to preserve family histories, oral traditions, photographs, and untold human stories for future generations.",
  },
  {
    year: "2026",
    title: "Community Story Collection",
    description:
      "Started documenting memories from families, elders, artists, teachers, and local communities across India.",
  },
  {
    year: "2027",
    title: "Oral History Initiative",
    description:
      "Launched interviews and audio recordings to preserve authentic voices before they disappear.",
  },
  {
    year: "2027",
    title: "Family Archives",
    description:
      "Collected photographs, handwritten letters, journals, certificates, and treasured family heirlooms.",
  },
  {
    year: "2028",
    title: "Historic Photograph Archive",
    description:
      "Digitized historic photographs to preserve visual memories and protect them from deterioration.",
  },
  {
    year: "2028",
    title: "Legacy Letters",
    description:
      "Created a permanent archive for handwritten letters that capture love, sacrifice, wisdom, and history.",
  },
  {
    year: "2029",
    title: "National Volunteer Network",
    description:
      "Built a network of volunteers helping document stories in villages, towns, and cities.",
  },
  {
    year: "2030",
    title: "Global Partnership Program",
    description:
      "Partnered with museums, universities, NGOs, historians, and researchers to preserve human heritage.",
  },
  {
    year: "Future",
    title: "Living Archive",
    description:
      "Continuing to build one of the world's largest digital archives of human memories for generations to come.",
  },
];

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Our Journey
          </span>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
            The Memory Project Timeline
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-orange-100">
            Every story preserved today becomes tomorrow's history. Explore the
            milestones that define our mission to preserve humanity's memories.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="relative border-l-4 border-amber-500 pl-10">
          {timeline.map((item, index) => (
            <div key={index} className="relative mb-16">
              <div className="absolute -left-[54px] flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-amber-500 shadow-lg"></div>

              <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-bold text-amber-700">
                {item.year}
              </span>

              <div className="mt-4 rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                <h2 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-4">
          <div className="rounded-3xl bg-slate-100 p-8 text-center">
            <h3 className="text-5xl font-bold text-amber-600">500+</h3>
            <p className="mt-3 text-slate-600">Stories Preserved</p>
          </div>

          <div className="rounded-3xl bg-slate-100 p-8 text-center">
            <h3 className="text-5xl font-bold text-amber-600">120+</h3>
            <p className="mt-3 text-slate-600">Oral Histories</p>
          </div>

          <div className="rounded-3xl bg-slate-100 p-8 text-center">
            <h3 className="text-5xl font-bold text-amber-600">250+</h3>
            <p className="mt-3 text-slate-600">Historic Photographs</p>
          </div>

          <div className="rounded-3xl bg-slate-100 p-8 text-center">
            <h3 className="text-5xl font-bold text-amber-600">50+</h3>
            <p className="mt-3 text-slate-600">Community Partners</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-bold">
            Help Write the Next Chapter
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Every family has a story worth preserving. Share your memories and
            become part of our growing living archive.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/share-your-memory"
              className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600"
            >
              Share Your Memory
            </a>

            <a
              href="/stories"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Explore Stories
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}