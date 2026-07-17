import type { Metadata } from "next";
import Link from "next/link";
import {
  HelpCircle,
  BookOpen,
  Users,
  Archive,
  Camera,
  Mail,
  Heart,
  Shield,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about The Memory Project, including how to share stories, preserve memories, volunteer, partner, and contribute to our living archive.",
};

const faqs = [
  {
    category: "General",
    icon: HelpCircle,
    questions: [
      {
        question: "What is The Memory Project?",
        answer:
          "The Memory Project is a living archive dedicated to preserving human stories, family histories, oral traditions, photographs, letters, and cultural memories for future generations.",
      },
      {
        question: "Why was The Memory Project created?",
        answer:
          "Our mission is to ensure that valuable memories, experiences, traditions, and voices are never lost. Every story becomes part of a shared human legacy.",
      },
    ],
  },
  {
    category: "Stories & Memories",
    icon: BookOpen,
    questions: [
      {
        question: "Can anyone submit a story?",
        answer:
          "Yes. Individuals, families, educators, researchers, and communities are welcome to contribute meaningful stories and memories.",
      },
      {
        question: "What kinds of stories can I share?",
        answer:
          "You can share family histories, childhood memories, travel experiences, cultural traditions, inspiring life journeys, community stories, and historical events.",
      },
      {
        question: "Can I include photographs or videos?",
        answer:
          "Yes. You can submit photographs, scanned documents, audio recordings, and videos alongside your written story.",
      },
    ],
  },
  {
    category: "Family Archives",
    icon: Archive,
    questions: [
      {
        question: "What is a Family Archive?",
        answer:
          "A Family Archive is a collection of stories, photographs, letters, documents, and memories that preserve your family's history across generations.",
      },
      {
        question: "Can I preserve an entire family collection?",
        answer:
          "Absolutely. We encourage families to preserve complete collections of memories and historical records.",
      },
    ],
  },
  {
    category: "Historic Photographs",
    icon: Camera,
    questions: [
      {
        question: "Can I upload old photographs?",
        answer:
          "Yes. Historic photographs are an important part of preserving cultural and family heritage.",
      },
      {
        question: "Do photographs need descriptions?",
        answer:
          "Providing names, locations, approximate dates, and the story behind each photograph helps future generations understand its significance.",
      },
    ],
  },
  {
    category: "Community",
    icon: Users,
    questions: [
      {
        question: "Can I volunteer?",
        answer:
          "Yes. Volunteers help document stories, digitize archives, conduct interviews, organize collections, and support community outreach.",
      },
      {
        question: "Can organizations partner with The Memory Project?",
        answer:
          "Yes. We welcome partnerships with museums, libraries, schools, NGOs, universities, and cultural organizations.",
      },
    ],
  },
  {
    category: "Privacy",
    icon: Shield,
    questions: [
      {
        question: "Who owns the submitted stories?",
        answer:
          "Contributors retain ownership of their original content. Permissions for publication or preservation are handled according to the contributor's consent.",
      },
      {
        question: "Can I request edits or removal later?",
        answer:
          "Yes. Contributors may contact us to request updates or removal of their submissions, subject to our preservation policies.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950">
      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
            <HelpCircle className="h-10 w-10 text-amber-600" />
          </div>

          <h1 className="text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Everything you need to know about preserving memories, sharing
            stories, contributing to our archive, volunteering, and becoming a
            part of The Memory Project.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-12">
          {faqs.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.category}
                className="rounded-3xl border bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-8 flex items-center gap-4">
                  <div className="rounded-xl bg-amber-100 p-3 dark:bg-amber-900/30">
                    <Icon className="h-7 w-7 text-amber-600" />
                  </div>

                  <h2 className="text-2xl font-bold">
                    {section.category}
                  </h2>
                </div>

                <div className="space-y-6">
                  {section.questions.map((item) => (
                    <div
                      key={item.question}
                      className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700"
                    >
                      <h3 className="text-lg font-semibold">
                        {item.question}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Heart className="mx-auto mb-6 h-14 w-14 text-amber-400" />

          <h2 className="text-4xl font-bold">
            Still Have Questions?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            We'd love to hear from you. Reach out with your questions, ideas, or
            if you're ready to preserve a meaningful story.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/share-your-memory"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              Share Your Memory
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/partners"
              className="inline-flex items-center justify-center rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
            >
              Partner With Us
            </Link>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-3 text-slate-300">
              <Mail className="h-5 w-5 text-amber-400" />
              <span>hello@thememoryproject.org</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}