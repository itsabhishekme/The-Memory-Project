import Link from "next/link";
import { ArchiveX, ArrowLeft, Home, Search } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | The Memory Project",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gradient-to-b from-stone-50 via-white to-amber-50 px-6 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-3xl text-center">
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/20">
          <ArchiveX className="h-12 w-12 text-amber-600" />
        </div>

        {/* Error Code */}
        <span className="inline-flex rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
          Error 404
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-6xl">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          The memory you're looking for may have been moved, renamed, or
          doesn't exist yet. Explore our living archive and discover inspiring
          stories, family histories, oral traditions, and preserved memories.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>

          <Link
            href="/stories"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-amber-600 hover:text-amber-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          >
            <Search className="h-5 w-5" />
            Browse Stories
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
            Explore The Memory Project
          </h2>

          <div className="grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/stories"
              className="rounded-xl border border-slate-200 p-4 transition hover:border-amber-500 hover:bg-amber-50 dark:border-slate-800 dark:hover:bg-slate-800"
            >
              <h3 className="font-semibold">📖 Human Stories</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Discover authentic stories from people across generations.
              </p>
            </Link>

            <Link
              href="/oral-histories"
              className="rounded-xl border border-slate-200 p-4 transition hover:border-amber-500 hover:bg-amber-50 dark:border-slate-800 dark:hover:bg-slate-800"
            >
              <h3 className="font-semibold">🎙 Oral Histories</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Listen to voices preserving culture and lived experiences.
              </p>
            </Link>

            <Link
              href="/family-archives"
              className="rounded-xl border border-slate-200 p-4 transition hover:border-amber-500 hover:bg-amber-50 dark:border-slate-800 dark:hover:bg-slate-800"
            >
              <h3 className="font-semibold">👨‍👩‍👧 Family Archives</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Explore preserved family histories and treasured memories.
              </p>
            </Link>

            <Link
              href="/photographs"
              className="rounded-xl border border-slate-200 p-4 transition hover:border-amber-500 hover:bg-amber-50 dark:border-slate-800 dark:hover:bg-slate-800"
            >
              <h3 className="font-semibold">📷 Historic Photographs</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Experience moments frozen in time through photography.
              </p>
            </Link>

            <Link
              href="/letters"
              className="rounded-xl border border-slate-200 p-4 transition hover:border-amber-500 hover:bg-amber-50 dark:border-slate-800 dark:hover:bg-slate-800"
            >
              <h3 className="font-semibold">✉ Legacy Letters</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Read letters carrying emotions, history, and wisdom.
              </p>
            </Link>

            <Link
              href="/share-your-memory"
              className="rounded-xl border border-amber-300 bg-amber-50 p-4 transition hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-900/20"
            >
              <h3 className="font-semibold text-amber-700 dark:text-amber-300">
                ❤️ Share Your Memory
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Help preserve history by contributing your own story.
              </p>
            </Link>
          </div>
        </div>

        {/* Bottom Link */}
        <Link
          href="/"
          className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-amber-600 dark:text-slate-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Return to Homepage
        </Link>
      </div>
    </main>
  );
}