
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  ArrowUpRight,
  MapPin,
  Building2,
} from "lucide-react";

export interface PartnerCardProps {
  name: string;
  logo: string;
  description: string;
  website: string;
  location?: string;
  category?: string;
}

export default function PartnerCard({
  name,
  logo,
  description,
  website,
  location,
  category,
}: PartnerCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      {/* Logo */}
      <div className="flex h-56 items-center justify-center border-b border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-950">
        <Image
          src={logo}
          alt={name}
          width={180}
          height={180}
          className="max-h-36 w-auto object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-5 p-7">
        {category && (
          <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
            <Building2 className="mr-2 h-3.5 w-3.5" />
            {category}
          </span>
        )}

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {name}
        </h3>

        <p className="leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>

        {location && (
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <MapPin className="h-4 w-4" />
            {location}
          </div>
        )}

        <Link
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-amber-600 transition hover:gap-3 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
        >
          <Globe className="h-5 w-5" />
          Visit Website
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}