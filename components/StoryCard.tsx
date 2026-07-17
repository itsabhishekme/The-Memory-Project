
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

export interface StoryCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export default function StoryCard({
  title,
  excerpt,
  author,
  category,
  date,
  readTime,
  image,
  slug,
}: StoryCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">
      {/* Story Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority={false}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4 rounded-full bg-amber-500 px-4 py-1 text-sm font-semibold text-white shadow-lg">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>{author}</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{date}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-amber-600 dark:text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
          {excerpt}
        </p>

        {/* Read More */}
        <Link
          href={`/stories/${slug}`}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-amber-600 transition-all duration-300 hover:gap-3"
        >
          Read Story
          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}