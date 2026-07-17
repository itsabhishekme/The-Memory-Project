import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  MapPin,
  User,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Human Stories | The Memory Project",
  description:
    "Explore authentic human stories, inspiring journeys, oral histories, and memories preserved by The Memory Project.",
};

const featuredStory = {
  title: "The Last Letter From Home",
  author: "The Memory Project",
  location: "Bihar, India",
  readTime: "8 min read",
  image: "/images/memory-project/stories/featured-story.jpg",
  excerpt:
    "A heartfelt story about a handwritten letter that became a family's most treasured memory across three generations.",
};

const stories = [
  {
    title: "Grandmother's Kitchen",
    category: "Family Heritage",
    location: "Rajasthan",
    readTime: "6 min",
    image: "/images/memory-project/stories/story-1.jpg",
    description:
      "A journey through recipes, traditions, and memories passed down from one generation to the next.",
  },
  {
    title: "Voices of the Village",
    category: "Oral History",
    location: "Assam",
    readTime: "9 min",
    image: "/images/memory-project/stories/story-2.jpg",
    description:
      "Elders share stories that reveal forgotten customs and the history of their community.",
  },
  {
    title: "A Letter That Changed Everything",
    category: "Legacy Letter",
    location: "Punjab",
    readTime: "7 min",
    image: "/images/memory-project/stories/story-3.jpg",
    description:
      "An emotional handwritten letter reconnects a family after decades apart.",
  },
  {
    title: "The Old Family Album",
    category: "Historic Photograph",
    location: "Kerala",
    readTime: "5 min",
    image: "/images/memory-project/stories/story-4.jpg",
    description:
      "Every photograph tells a story that words alone can never fully capture.",
  },
  {
    title: "The Teacher Everyone Remembers",
    category: "Community Story",
    location: "Uttar Pradesh",
    readTime: "10 min",
    image: "/images/memory-project/stories/story-5.jpg",
    description:
      "One teacher transformed generations through kindness, dedication, and hope.",
  },
  {
    title: "Memories by the River",
    category: "Childhood",
    location: "West Bengal",
    readTime: "6 min",
    image: "/images/memory-project/stories/story-6.jpg",
    description:
      "A nostalgic reflection on childhood, friendship, and a disappearing landscape.",
  },
];

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              <BookOpen className="mr-2 h-4 w-4" />
              Human Stories
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl">
              Every Story Deserves to Be Remembered
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Discover authentic memories, personal journeys, oral histories,
              family traditions, and inspiring human experiences preserved for
              future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900 lg:grid lg:grid-cols-2">
          <div className="h-80 bg-slate-200 dark:bg-slate-800">
            <img
              src={featuredStory.image}
              alt={featuredStory.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-10">
            <span className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              Featured Story
            </span>

            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              {featuredStory.title}
            </h2>

            <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <User size={16} />
                {featuredStory.author}
              </span>

              <span className="flex items-center gap-2">
                <MapPin size={16} />
                {featuredStory.location}
              </span>

              <span className="flex items-center gap-2">
                <Clock3 size={16} />
                {featuredStory.readTime}
              </span>
            </div>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {featuredStory.excerpt}
            </p>

            <Link
              href="#"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-600 hover:text-amber-700"
            >
              Read Story
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Explore More Stories
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            Stories from families, communities, historians, volunteers, and
            everyday people preserving memories that matter.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="h-60 bg-slate-200 dark:bg-slate-800">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  {story.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
                  {story.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {story.description}
                </p>

                <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {story.location}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock3 size={16} />
                    {story.readTime}
                  </span>
                </div>

                <Link
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-600 hover:text-amber-700"
                >
                  Read Story
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}