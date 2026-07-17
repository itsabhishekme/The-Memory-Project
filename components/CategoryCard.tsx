"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  stories?: number;
}

export default function CategoryCard({
  title,
  description,
  image,
  href,
  stories = 0,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {stories > 0 && (
          <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
            {stories} Stories
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <h3 className="text-2xl font-bold text-slate-900 transition group-hover:text-amber-600 dark:text-white">
          {title}
        </h3>

        <p className="leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>

        <div className="flex items-center gap-2 font-semibold text-amber-600">
          Explore Category

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </div>
      </div>
    </Link>
  );
}