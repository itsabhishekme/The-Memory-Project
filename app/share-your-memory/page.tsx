
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Share Your Memory",
  description:
    "Share your family's history, oral traditions, photographs, legacy letters, and untold human stories with The Memory Project. Help preserve memories for future generations.",
  keywords: [
    "Share Your Memory",
    "Submit Story",
    "Oral History",
    "Family Archive",
    "Historic Photographs",
    "Legacy Letters",
    "Human Stories",
    "The Memory Project",
  ],
};

export default function ShareYourMemoryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Hero */}
      <Hero />

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          title="Share Your Memory"
          subtitle="Every family has a story worth preserving."
        />

        <div className="mx-auto mt-10 max-w-4xl space-y-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
          <p>
            Memories connect generations. Whether it is a family tradition, a
            historic photograph, a handwritten letter, or an inspiring life
            experience, your story deserves to become part of our living archive.
          </p>

          <p>
            The Memory Project welcomes contributions from individuals,
            families, communities, educators, historians, and storytellers who
            wish to preserve authentic human experiences.
          </p>

          <p>
            Together we can ensure that meaningful stories are never forgotten
            and remain accessible for future generations.
          </p>
        </div>
      </section>

      {/* Share Memory */}
      <section className="bg-slate-50 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            title="Ways You Can Contribute"
            subtitle="Every contribution helps preserve history."
          />

          <ShareMemory />
        </div>
      </section>

      {/* Submission Form */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          title="Submit Your Story"
          subtitle="Fill out the form below and begin preserving your legacy."
        />

        <SubmissionForm />
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            title="How It Works"
            subtitle="A simple process to preserve your memories."
          />

          <HowItWorks />
        </div>
      </section>

      {/* Guidelines */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          title="Submission Guidelines"
          subtitle="Help us maintain a meaningful and authentic archive."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Authentic Stories",
              description:
                "Share genuine personal or family experiences with accurate details.",
            },
            {
              title: "Photographs",
              description:
                "Upload clear historical or family photographs whenever possible.",
            },
            {
              title: "Letters & Documents",
              description:
                "Preserve handwritten letters, diaries, journals, or historical documents.",
            },
            {
              title: "Respect & Privacy",
              description:
                "Only submit stories and media you have permission to share.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="mb-4 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="leading-7 text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before submitting."
          />

          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
          Share your family's story
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          Preserve memories for generations.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Submit your legacy, photographs, letters, and oral histories to help build a lasting archive.
        </p>
      </div>
    </section>
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
        {subtitle}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
    </div>
  );
}

function ShareMemory() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {[
        {
          title: "Tell a Story",
          description: "Submit family memories, oral histories, or personal narratives.",
        },
        {
          title: "Share Images",
          description: "Upload photographs, documents, or keepsakes that illustrate your story.",
        },
        {
          title: "Preserve a Legacy",
          description: "Help future generations understand their roots and heritage.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950"
        >
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            {item.title}
          </h3>
          <p className="leading-7 text-slate-600 dark:text-slate-400">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function SubmissionForm() {
  return (
    <form className="mt-10 grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Name
          <input
            type="text"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Email
          <input
            type="email"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
        Story Title
        <input
          type="text"
          className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          placeholder="A memorable family moment"
        />
      </label>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
        Your Story
        <textarea
          rows={5}
          className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          placeholder="Share the details of your memory..."
        />
      </label>
      <button
        type="submit"
        className="inline-flex justify-center rounded-2xl bg-sky-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
      >
        Submit Story
      </button>
    </form>
  );
}

function HowItWorks() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {[
        {
          title: "Submit",
          description: "Send your memories through our simple contribution form.",
        },
        {
          title: "Review",
          description: "Our team reviews each submission to preserve accuracy and context.",
        },
        {
          title: "Preserve",
          description: "Your story becomes part of a shared archive for future generations.",
        },
      ].map((item) => (
        <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            {item.title}
          </h3>
          <p className="leading-7 text-slate-600 dark:text-slate-400">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function FAQ() {
  return (
    <div className="mt-10 space-y-6">
      {[
        {
          question: "What kind of stories can I share?",
          answer: "Personal narratives, family histories, photographs, letters, and oral traditions are all welcome.",
        },
        {
          question: "Can I submit media attachments?",
          answer: "Yes. Please include images or documents that support your story where possible.",
        },
      ].map((item) => (
        <div key={item.question} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            {item.question}
          </h3>
          <p className="text-slate-600 dark:text-slate-400">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}

function CTA() {
  return (
    <section className="bg-slate-950 py-20 text-center text-white">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
          Ready to share?
        </p>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
          Add your memory to The Memory Project.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Every story strengthens our archive and keeps family traditions alive.
        </p>
      </div>
    </section>
  );
}
