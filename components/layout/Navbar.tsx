"use client";

import Link from "next/link";
import { Menu, X, Archive } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Stories", href: "/stories" },
  { name: "Collections", href: "/collections" },
  { name: "Photographs", href: "/photographs" },
  { name: "Letters", href: "/letters" },
  { name: "Timeline", href: "/timeline" },
  { name: "Volunteers", href: "/volunteers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold"
        >
          <Archive className="h-7 w-7 text-amber-600" />
          <span>The Memory Project</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-amber-600 dark:text-slate-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/share-your-memory"
          className="hidden rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-amber-700 lg:block"
        >
          Share Your Memory
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="space-y-2 p-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/share-your-memory"
              className="mt-3 block rounded-lg bg-amber-600 px-4 py-3 text-center font-semibold text-white"
            >
              Share Your Memory
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}