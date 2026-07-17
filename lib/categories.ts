import {
  Archive,
  BookOpen,
  Camera,
  Mic,
  Users,
  Mail,
  Landmark,
  Heart,
  Globe,
  Clock,
  Home,
  Baby,
} from "lucide-react";

export interface MemoryCategory {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: typeof Archive;
  image: string;
  color: string;
  totalStories: number;
}

export const categories: MemoryCategory[] = [
  {
    id: 1,
    slug: "oral-histories",
    title: "Oral Histories",
    description:
      "Recorded conversations preserving voices, traditions, and life experiences across generations.",
    icon: Mic,
    image: "/images/categories/oral-histories.jpg",
    color: "bg-amber-100 text-amber-700",
    totalStories: 124,
  },
  {
    id: 2,
    slug: "family-archives",
    title: "Family Archives",
    description:
      "Cherished family records, heirlooms, documents, and personal collections preserved for future generations.",
    icon: Archive,
    image: "/images/categories/family-archives.jpg",
    color: "bg-orange-100 text-orange-700",
    totalStories: 86,
  },
  {
    id: 3,
    slug: "historic-photographs",
    title: "Historic Photographs",
    description:
      "Rare photographs capturing people, places, traditions, and unforgettable moments in history.",
    icon: Camera,
    image: "/images/categories/historic-photographs.jpg",
    color: "bg-blue-100 text-blue-700",
    totalStories: 203,
  },
  {
    id: 4,
    slug: "legacy-letters",
    title: "Legacy Letters",
    description:
      "Letters, diaries, journals, and handwritten memories passed from one generation to another.",
    icon: Mail,
    image: "/images/categories/legacy-letters.jpg",
    color: "bg-emerald-100 text-emerald-700",
    totalStories: 91,
  },
  {
    id: 5,
    slug: "community-stories",
    title: "Community Stories",
    description:
      "Stories celebrating neighborhoods, villages, traditions, festivals, and collective memories.",
    icon: Users,
    image: "/images/categories/community-stories.jpg",
    color: "bg-purple-100 text-purple-700",
    totalStories: 167,
  },
  {
    id: 6,
    slug: "cultural-heritage",
    title: "Cultural Heritage",
    description:
      "Preserving customs, rituals, languages, folklore, and cultural practices from around the world.",
    icon: Landmark,
    image: "/images/categories/cultural-heritage.jpg",
    color: "bg-red-100 text-red-700",
    totalStories: 145,
  },
  {
    id: 7,
    slug: "personal-memories",
    title: "Personal Memories",
    description:
      "Life-changing experiences, achievements, struggles, and unforgettable personal journeys.",
    icon: Heart,
    image: "/images/categories/personal-memories.jpg",
    color: "bg-pink-100 text-pink-700",
    totalStories: 318,
  },
  {
    id: 8,
    slug: "world-memories",
    title: "World Memories",
    description:
      "Stories connecting people, cultures, and communities from every corner of the globe.",
    icon: Globe,
    image: "/images/categories/world-memories.jpg",
    color: "bg-cyan-100 text-cyan-700",
    totalStories: 74,
  },
  {
    id: 9,
    slug: "historical-events",
    title: "Historical Events",
    description:
      "First-hand accounts of important historical events and moments that shaped society.",
    icon: Clock,
    image: "/images/categories/historical-events.jpg",
    color: "bg-indigo-100 text-indigo-700",
    totalStories: 59,
  },
  {
    id: 10,
    slug: "childhood-memories",
    title: "Childhood Memories",
    description:
      "Stories of growing up, friendships, school life, games, and cherished childhood experiences.",
    icon: Baby,
    image: "/images/categories/childhood-memories.jpg",
    color: "bg-yellow-100 text-yellow-700",
    totalStories: 182,
  },
  {
    id: 11,
    slug: "ancestral-homes",
    title: "Ancestral Homes",
    description:
      "Historic homes, family roots, hometowns, and places that hold generations of memories.",
    icon: Home,
    image: "/images/categories/ancestral-homes.jpg",
    color: "bg-teal-100 text-teal-700",
    totalStories: 63,
  },
  {
    id: 12,
    slug: "written-histories",
    title: "Written Histories",
    description:
      "Books, manuscripts, memoirs, journals, and historical writings documenting the past.",
    icon: BookOpen,
    image: "/images/categories/written-histories.jpg",
    color: "bg-slate-100 text-slate-700",
    totalStories: 108,
  },
];

export const featuredCategories = categories.slice(0, 6);

export const totalCategories = categories.length;

export const totalStories = categories.reduce(
  (total, category) => total + category.totalStories,
  0
);

export function getCategoryBySlug(slug: string): MemoryCategory | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryById(id: number): MemoryCategory | undefined {
  return categories.find((category) => category.id === id);
}