
"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Mail } from "lucide-react";
import type { LegacyLetter } from "@/types/memory";

interface LetterCardProps {
  letter: LegacyLetter;
}

export default function LetterCard({ letter }: LetterCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      {letter.image && (
        <div className="relative h-60 overflow-hidden">
          <Image
            src={letter.image}
            alt={letter.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-6">
        <div className="mb-4 flex items-center gap-2 text-amber-600">
          <Mail className="h-5 w-5" />
          <span className="text-sm font-semibold uppercase tracking-wide">
            Legacy Letter
          </span>
        </div>

        <h3 className="mb-4 text-2xl font-bold text-slate-900 transition-colors group-hover:text-amber-600 dark:text-white">
          {letter.title}
        </h3>

        <div className="mb-5 space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <p>
            <span className="font-semibold">From:</span> {letter.sender}
          </p>

          <p>
            <span className="font-semibold">To:</span> {letter.receiver}
          </p>

          {"year" in letter && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{(letter as { year?: string | number }).year}</span>
            </div>
          )}
        </div>

        <p className="line-clamp-4 leading-7 text-slate-600 dark:text-slate-300">
          {(letter as any).content}
        </p>

        <Link
          href={`/letters/${letter.id}`}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-amber-600 transition hover:gap-3"
        >
          Read Letter
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}