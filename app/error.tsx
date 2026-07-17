"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AlertTriangle, ArrowLeft, Home, RefreshCw } from "lucide-react";

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50 px-6 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-2xl dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-100 dark:bg-red-950/30">
          <AlertTriangle className="h-12 w-12 text-red-600" />
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
          Something Went Wrong
        </p>

        <h1 className="mb-6 text-4xl font-bold text-slate-900 dark:text-white">
          Oops! We couldn't load this page.
        </h1>

        <p className="mx-auto max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          The Memory Project is dedicated to preserving stories that matter.
          Unfortunately, an unexpected error occurred while loading this page.
          Please try again or return to the homepage.
        </p>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-4 text-left dark:border-red-900 dark:bg-red-950/20">
            <p className="mb-2 font-semibold text-red-700 dark:text-red-400">
              Development Error
            </p>

            <pre className="overflow-auto whitespace-pre-wrap break-words text-sm text-red-600 dark:text-red-300">
              {error.message}
            </pre>

            {error.digest && (
              <p className="mt-3 text-xs text-slate-500">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700"
          >
            <RefreshCw className="h-5 w-5" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <Home className="h-5 w-5" />
            Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
          <p className="text-sm text-slate-500">
            If the problem continues, please contact our team or try again later.
          </p>
        </div>
      </div>
    </main>
  );
}