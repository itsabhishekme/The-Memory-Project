import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thememoryproject.org"),

  title: {
    default: "The Memory Project",
    template: "%s | The Memory Project",
  },

  description:
    "The Memory Project preserves family histories, oral traditions, personal memories, photographs, legacy letters, and untold human stories—creating a living archive for future generations.",

  keywords: [
    "The Memory Project",
    "Human Stories",
    "Storytelling",
    "Family History",
    "Family Archives",
    "Oral Histories",
    "Historic Photographs",
    "Legacy Letters",
    "Living Archive",
    "Heritage",
    "Culture",
    "History",
    "Memories",
    "India",
    "Community",
    "Documentary",
    "Preservation",
    "Future Generations",
  ],

  authors: [
    {
      name: "The Memory Project",
    },
  ],

  creator: "The Memory Project",
  publisher: "The Memory Project",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thememoryproject.org",
    siteName: "The Memory Project",
    title: "The Memory Project",
    description:
      "Preserving memories, stories, traditions, and humanity for generations to come.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Memory Project",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Memory Project",
    description:
      "A living archive preserving memories, oral histories, family heritage, and untold human stories.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
        <div className="flex min-h-screen flex-col">
          {/* Global Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Global Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}