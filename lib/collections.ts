export interface Collection {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  featured: boolean;
  stories: number;
  location: string;
  year: string;
}

export const collections: Collection[] = [
  {
    id: 1,
    slug: "family-legacy",
    title: "Family Legacy",
    description:
      "A collection of family memories, traditions, photographs, handwritten letters, recipes, and personal stories passed from one generation to another.",
    category: "Family",
    image: "/images/collections/family-legacy.jpg",
    featured: true,
    stories: 245,
    location: "India",
    year: "2026",
  },
  {
    id: 2,
    slug: "oral-histories",
    title: "Oral Histories",
    description:
      "Recorded conversations capturing the wisdom, experiences, and voices of elders, community leaders, and everyday people.",
    category: "History",
    image: "/images/collections/oral-histories.jpg",
    featured: true,
    stories: 180,
    location: "India",
    year: "2026",
  },
  {
    id: 3,
    slug: "historic-photographs",
    title: "Historic Photographs",
    description:
      "Photographs preserving family moments, cultural celebrations, historical landmarks, and everyday life across generations.",
    category: "Photography",
    image: "/images/collections/historic-photographs.jpg",
    featured: true,
    stories: 320,
    location: "Global",
    year: "2026",
  },
  {
    id: 4,
    slug: "legacy-letters",
    title: "Legacy Letters",
    description:
      "Handwritten letters, postcards, journals, diaries, and personal notes that preserve emotions and history through words.",
    category: "Letters",
    image: "/images/collections/legacy-letters.jpg",
    featured: false,
    stories: 140,
    location: "Worldwide",
    year: "2026",
  },
  {
    id: 5,
    slug: "community-memories",
    title: "Community Memories",
    description:
      "Stories documenting local traditions, festivals, neighborhoods, schools, markets, and community life.",
    category: "Community",
    image: "/images/collections/community-memories.jpg",
    featured: true,
    stories: 210,
    location: "South Asia",
    year: "2026",
  },
  {
    id: 6,
    slug: "cultural-heritage",
    title: "Cultural Heritage",
    description:
      "A growing archive of customs, rituals, folklore, crafts, music, dance, and traditions that define cultural identity.",
    category: "Culture",
    image: "/images/collections/cultural-heritage.jpg",
    featured: false,
    stories: 175,
    location: "Global",
    year: "2026",
  },
  {
    id: 7,
    slug: "migration-stories",
    title: "Migration Stories",
    description:
      "Personal journeys of migration, resilience, identity, adaptation, and hope shared by families around the world.",
    category: "Migration",
    image: "/images/collections/migration-stories.jpg",
    featured: false,
    stories: 98,
    location: "Worldwide",
    year: "2026",
  },
  {
    id: 8,
    slug: "voices-of-change",
    title: "Voices of Change",
    description:
      "Inspiring stories of individuals and communities creating positive social, cultural, and environmental impact.",
    category: "Inspiration",
    image: "/images/collections/voices-of-change.jpg",
    featured: true,
    stories: 132,
    location: "Global",
    year: "2026",
  },
];

/**
 * Featured collections
 */
export const featuredCollections = collections.filter(
  (collection) => collection.featured
);

/**
 * Find a collection by slug
 */
export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}

/**
 * Find collections by category
 */
export function getCollectionsByCategory(category: string): Collection[] {
  return collections.filter(
    (collection) =>
      collection.category.toLowerCase() === category.toLowerCase()
  );
}