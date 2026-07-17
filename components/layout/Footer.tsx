import Link from "next/link";
import {
  Archive,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const initiatives = [
  {
    title: "Human Stories",
    href: "/stories",
    description: "Real stories that preserve memories, identities, and human experiences.",
  },
  {
    title: "Oral Histories",
    href: "/oral-histories",
    description: "Recording voices, traditions, and life experiences for future generations.",
  },
  {
    title: "Family Archives",
    href: "/family-archives",
    description: "Protecting family photographs, documents, and personal histories.",
  },
  {
    title: "Historic Photographs",
    href: "/photographs",
    description: "Preserving rare images that capture moments in history.",
  },
  {
    title: "Legacy Letters",
    href: "/letters",
    description: "Keeping handwritten memories and heartfelt letters alive.",
  },
];

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "Collections", href: "/collections" },
  { title: "Timeline", href: "/timeline" },
  { title: "Partners", href: "/partners" },
  { title: "Volunteers", href: "/volunteers" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "FAQ", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 text-stone-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full bg-amber-500/10 p-3">
                <Archive className="h-7 w-7 text-amber-500" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  The Memory Project
                </h2>

                <p className="text-sm text-stone-400">
                  Preserving Stories. Protecting Legacy.
                </p>
              </div>
            </div>

            <p className="leading-7 text-stone-400">
              The Memory Project is a living archive dedicated to preserving
              family histories, oral traditions, photographs, handwritten
              letters, and untold human stories so future generations never
              lose their roots.
            </p>

            <Link
              href="/share-your-memory"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700"
            >
              Share Your Memory
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Initiatives */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Our Collections
            </h3>

            <ul className="space-y-5">
              {initiatives.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group block"
                  >
                    <h4 className="font-medium text-white transition group-hover:text-amber-400">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-stone-400">
                      {item.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="transition hover:text-amber-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/share-your-memory"
                  className="transition hover:text-amber-400"
                >
                  Share Your Memory
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-amber-500" />

                <div>
                  <p className="font-medium text-white">Email</p>

                  <a
                    href="mailto:hello@thememoryproject.org"
                    className="text-stone-400 hover:text-amber-400"
                  >
                    hello@thememoryproject.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-amber-500" />

                <div>
                  <p className="font-medium text-white">Phone</p>

                  <p className="text-stone-400">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-amber-500" />

                <div>
                  <p className="font-medium text-white">Location</p>

                  <p className="text-stone-400">
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-stone-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-5 text-center text-sm text-stone-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} The Memory Project. All Rights
              Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/privacy-policy"
                className="hover:text-amber-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="hover:text-amber-400"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/faq"
                className="hover:text-amber-400"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}