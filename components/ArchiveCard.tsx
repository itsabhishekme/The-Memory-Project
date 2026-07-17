"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Archive,
} from "lucide-react";

export interface ArchiveCardProps {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  familyName: string;
  generation: string;
  members: number;
  createdAt: string;
  href?: string;
}

export default function ArchiveCard({
  id,
  title,
  description,
  coverImage,
  familyName,
  generation,
  members,
  createdAt,
  href,
}: ArchiveCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      {/* Cover Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          priority={false}
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute left-5 top-5 rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold text-white shadow-lg">
          Family Archive
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Archive className="h-4 w-4 text-amber-600" />
          <span>{familyName}</span>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 transition group-hover:text-amber-600 dark:text-white">
          {title}
        </h3>

        <p className="leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-amber-500" />
            <span>{members} Members</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-amber-500" />
            <span>{generation}</span>
          </div>

          <div className="col-span-2 flex items-center gap-2">
            <Calendar className="h-4 w-4 text-amber-500" />
            <span>{createdAt}</span>
          </div>
        </div>

        <Link
          href={href ?? `/family-archives/${id}`}
          className="inline-flex items-center gap-2 font-semibold text-amber-600 transition hover:gap-3"
        >
          Explore Archive
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </article>
  );
}