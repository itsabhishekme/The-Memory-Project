import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  ArrowLeft,
  Share2,
  BookOpen,
  Tag,
} from "lucide-react";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const stories = [
  {
    slug: "grandmothers-kitchen",
    title: "Grandmother's Kitchen",
    author: "Ananya Sharma",
    location: "Jaipur, Rajasthan",
    date: "12 July 2026",
    readingTime: "6 min read",
    category: "Family Heritage",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80",
    excerpt:
      "A story about memories, food, love, and traditions passed through generations.",
    content: [
      "Every family has stories that deserve to be remembered. Some live in photographs, while others survive only in conversations around the dining table.",
      "For me, those memories always begin in my grandmother's kitchen. Every spice carried a story, every recipe held a lesson, and every meal brought the family together.",
      "She never measured ingredients. Instead, she relied on experience, intuition, and generations of inherited wisdom.",
      "Today, that kitchen no longer exists, but its memories continue to shape our family. Recording stories like these helps future generations understand not just what we cooked, but who we were.",
      "The Memory Project exists to preserve these voices before they disappear forever.",
    ],
    tags: [
      "Family",
      "Tradition",
      "Food",
      "Culture",
      "Heritage",
    ],
  },
  {
    slug: "voices-of-the-village",
    title: "Voices of the Village",
    author: "Rahul Singh",
    location: "Varanasi, Uttar Pradesh",
    date: "5 July 2026",
    readingTime: "8 min read",
    category: "Oral History",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80",
    excerpt:
      "Capturing stories from elders whose memories preserve local history.",
    content: [
      "Before newspapers and the internet, history travelled by word of mouth.",
      "Village elders carried stories of migration, festivals, struggles, and celebrations that were never written in books.",
      "Listening to these voices reminds us that every community has historians whose memories deserve preservation.",
      "Documenting oral histories ensures these priceless experiences continue inspiring future generations.",
    ],
    tags: [
      "Village",
      "History",
      "Community",
      "Stories",
    ],
  },
];

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const story = stories.find((item) => item.slug === slug);

  if (!story) {
    return {
      title: "Story Not Found",
    };
  }

  return {
    title: story.title,
    description: story.excerpt,
  };
}

export async function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export default async function StoryPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const story = stories.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <section className="relative h-[500px] overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 text-white">
            <Link
              href="/stories"
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur hover:bg-white/20"
            >
              <ArrowLeft size={18} />
              Back to Stories
            </Link>

            <span className="inline-flex rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold">
              {story.category}
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
              {story.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-slate-200">
              {story.excerpt}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 flex flex-wrap gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-2">
            <User size={18} />
            <span>{story.author}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>{story.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{story.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>{story.readingTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <BookOpen size={18} />
            <span>{story.category}</span>
          </div>

          <button className="ml-auto flex items-center gap-2 rounded-full border px-4 py-2 transition hover:bg-slate-100 dark:hover:bg-slate-800">
            <Share2 size={18} />
            Share
          </button>
        </div>

        <article className="prose prose-lg max-w-none dark:prose-invert">
          {story.content.map((paragraph, index) => (
            <p
              key={index}
              className="mb-8 text-lg leading-9 text-slate-700 dark:text-slate-300"
            >
              {paragraph}
            </p>
          ))}
        </article>

        <div className="mt-16 border-t pt-10">
          <div className="mb-4 flex items-center gap-2">
            <Tag size={18} />
            <h3 className="text-xl font-semibold">
              Story Tags
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {story.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-12 text-center text-white">
          <h2 className="text-3xl font-bold">
            Preserve Your Story
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Every family, every community, and every individual has memories
            worth preserving. Share your story and become part of our living
            archive.
          </p>

          <Link
            href="/share-your-memory"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
          >
            Share Your Memory
          </Link>
        </div>
      </section>
    </main>
  );
}