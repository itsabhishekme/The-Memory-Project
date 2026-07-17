import { Archive } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="flex flex-col items-center text-center">
        {/* Logo */}
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-amber-400/30" />

          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600 shadow-2xl">
            <Archive className="h-12 w-12 text-white" />
          </div>
        </div>

        {/* Project Name */}
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          The Memory Project
        </h1>

        <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400">
          Preserving family histories, oral traditions, photographs, legacy
          letters, and untold human stories for future generations.
        </p>

        {/* Loading Dots */}
        <div className="mt-10 flex items-center gap-3">
          <span className="h-3 w-3 animate-bounce rounded-full bg-amber-500 [animation-delay:-0.3s]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-amber-500 [animation-delay:-0.15s]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-amber-500" />
        </div>

        <p className="mt-6 text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
          Loading memories...
        </p>
      </div>
    </main>
  );
}