
"use client";

import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  User,
  MapPin,
  BookOpen,
} from "lucide-react";

type Story = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  location: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

const stories: Story[] = [
  {
    id: 1,
    title: "Grandmother's Kitchen",
    excerpt:
      "A collection of family recipes, traditions, and stories passed down through generations, preserving the taste and emotions of home.",
    author: "Ananya Sharma",
    location: "Jaipur, Rajasthan",
    category: "Family Heritage",
    date: "12 June 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
  },
  {
    id: 2,
    title: "Letters From My Father",
    excerpt:
      "A journey through handwritten letters that documented love, sacrifice, and hope over several decades.",
    author: "Rahul Verma",
    location: "Patna, Bihar",
    category: "Legacy Letters",
    date: "28 May 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80",
  },
  {
    id: 3,
    title: "Voices of the Village",
    excerpt:
      "Elders share memories of festivals, farming, and everyday life that shaped their community for generations.",
    author: "Priya Singh",
    location: "Varanasi, Uttar Pradesh",
    category: "Oral History",
    date: "05 April 2026",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
  },
  {
    id: 4,
    title: "The Wedding Album",
    excerpt:
      "Old photographs tell a remarkable story of love, family, traditions, and changing times.",
    author: "Meera Patel",
    location: "Ahmedabad, Gujarat",
    category: "Historic Photographs",
    date: "19 March 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
  },
  {
    id: 5,
    title: "Stories of Independence",
    excerpt:
      "Remembering local heroes whose courage shaped the nation's history through first-hand accounts.",
    author: "Arjun Kumar",
    location: "Delhi",
    category: "History",
    date: "02 February 2026",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=1200&q=80",
  },
  {
    id: 6,
    title: "The Last Family Diary",
    excerpt:
      "An old diary uncovers forgotten memories, childhood adventures, and lessons that still inspire today.",
    author: "Sneha Roy",
    location: "Kolkata, West Bengal",
    category: "Personal Memories",
    date: "14 January 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80",
  },
];

export default function StoryGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Story Collection
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Explore Inspiring Human Stories
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            Discover memories, traditions, oral histories, family archives, and
            inspiring stories shared by people from different cultures and
            communities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white">
                  {story.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {story.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {story.excerpt}
                </p>

                <div className="mt-6 space-y-3 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{story.author}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{story.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{story.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{story.readTime}</span>
                  </div>
                </div>

                <Link
                  href={`/stories/${story.id}`}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-600 transition hover:gap-3"
                >
                  <BookOpen size={18} />
                  Read Story
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600"
          >
            View All Stories
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}