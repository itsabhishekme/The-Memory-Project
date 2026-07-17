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

    // Memory & Heritage
    "Digital Archive",
    "Historical Archive",
    "Memory Preservation",
    "Community Archive",
    "Personal History",
    "Life Stories",
    "Family Legacy",
    "Genealogy",
    "Ancestry",
    "Family Tree",
    "Cultural Heritage",
    "Traditional Knowledge",
    "Indigenous Knowledge",
    "Oral Tradition",
    "Local History",
    "Social History",
    "Historical Records",
    "Historical Documentation",
    "Heritage Preservation",
    "Cultural Preservation",

    // Storytelling
    "Real Stories",
    "True Stories",
    "Inspirational Stories",
    "Personal Narratives",
    "Human Experiences",
    "Life Experiences",
    "Story Collection",
    "Story Archive",
    "Community Storytelling",
    "Memory Collection",
    "Digital Storytelling",
    "Voices of the Past",
    "Voices of the People",
    "Shared Memories",
    "Every Story Matters",

    // Archives
    "Historical Documents",
    "Digital Preservation",
    "Archive Collection",
    "Family Documents",
    "Old Letters",
    "Historic Letters",
    "Personal Letters",
    "Photo Archive",
    "Vintage Photographs",
    "Historical Photography",
    "Family Albums",
    "Archive Restoration",
    "Digital Heritage",
    "Memory Vault",

    // Research
    "Historical Research",
    "Family Research",
    "Genealogy Research",
    "Oral History Research",
    "Cultural Research",
    "Community Research",
    "Academic Research",
    "Historical Education",
    "Museum Archive",
    "Digital Museum",
    "Public History",

    // Community
    "Volunteers",
    "Community Volunteers",
    "Story Collectors",
    "Community Leaders",
    "Researchers",
    "Archivists",
    "Historians",
    "Documentarians",
    "Photographers",
    "Students",
    "Educators",
    "Families",

    // Education
    "Learning History",
    "Educational Resources",
    "History Education",
    "Heritage Education",
    "Culture Education",
    "Museum Learning",
    "Historical Awareness",
    "Cultural Awareness",

    // Technology
    "Cloud Archive",
    "Digital Library",
    "Knowledge Repository",
    "Open Archive",
    "Online Archive",
    "Digital Collection",
    "Metadata",
    "Digital Records",
    "Preservation Technology",

    // India
    "Indian Heritage",
    "Indian Culture",
    "Indian Traditions",
    "Indian History",
    "Rural India",
    "Urban India",
    "Village Stories",
    "Local Communities",
    "Regional Heritage",
    "Indian Families",

    // Mission
    "Save Memories",
    "Preserve Stories",
    "Remember Together",
    "Living Legacy",
    "Legacy Preservation",
    "Protect Heritage",
    "Human Connection",
    "Community Impact",
    "Social Good",
    "Nonprofit",
    "Archive for Future",
    "Preserving Humanity",
    "Memories That Matter",
    "Stories That Inspire",
    "Every Voice Matters",
    "Every Memory Counts",
    "Preserving the Past",
    "Connecting Generations",
    "Building a Living Archive",
    "Keeping History Alive",
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