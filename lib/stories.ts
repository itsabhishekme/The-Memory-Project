export interface Story {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  location: string;
  category: string;
  image: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
  featured: boolean;
  tags: string[];
  excerpt: string;
  content: string;
}

export const stories: Story[] = [
  {
    id: 1,
    slug: "grandmothers-kitchen",
    title: "Grandmother's Kitchen",
    subtitle: "Where every recipe carried a family story",
    author: "The Memory Project",
    location: "Patna, Bihar",
    category: "Family Heritage",
    image: "/images/stories/grandmother-kitchen.jpg",
    coverImage: "/images/stories/grandmother-kitchen-cover.jpg",
    publishedAt: "2026-07-01",
    readTime: "6 min read",
    featured: true,
    tags: ["Family", "Food", "Tradition"],
    excerpt:
      "A story about handwritten recipes, warm kitchens, and the memories passed down through generations.",
    content: `
For many families, the kitchen is more than a place to cook—it is where love,
tradition, and memories come together.

Every handwritten recipe tells the story of those who came before us. Through
shared meals and family gatherings, traditions continue to live in every home.
`,
  },
  {
    id: 2,
    slug: "last-letter-from-home",
    title: "The Last Letter From Home",
    subtitle: "Words that survived generations",
    author: "The Memory Project",
    location: "Chapra, Bihar",
    category: "Letters",
    image: "/images/stories/letter.jpg",
    coverImage: "/images/stories/letter-cover.jpg",
    publishedAt: "2026-07-03",
    readTime: "5 min read",
    featured: true,
    tags: ["Letters", "History", "Family"],
    excerpt:
      "A handwritten letter preserved for decades becomes the strongest connection between generations.",
    content: `
Before phones and instant messages, letters carried emotions across cities,
villages, and countries.

Each letter became a piece of history, preserving relationships that continue
to inspire future generations.
`,
  },
  {
    id: 3,
    slug: "village-storyteller",
    title: "The Village Storyteller",
    subtitle: "Keeping oral traditions alive",
    author: "The Memory Project",
    location: "Varanasi, Uttar Pradesh",
    category: "Oral History",
    image: "/images/stories/storyteller.jpg",
    coverImage: "/images/stories/storyteller-cover.jpg",
    publishedAt: "2026-07-05",
    readTime: "8 min read",
    featured: true,
    tags: ["Culture", "Oral History", "Heritage"],
    excerpt:
      "One elder's voice preserves decades of local history, traditions, and forgotten folklore.",
    content: `
Every village has someone who remembers everything.

Their stories connect the past with the present and remind us that history is
not only written in books but also spoken from memory.
`,
  },
  {
    id: 4,
    slug: "photograph-of-1947",
    title: "A Photograph From 1947",
    subtitle: "One image, countless memories",
    author: "The Memory Project",
    location: "Delhi",
    category: "Historic Photographs",
    image: "/images/stories/photograph.jpg",
    coverImage: "/images/stories/photograph-cover.jpg",
    publishedAt: "2026-07-07",
    readTime: "7 min read",
    featured: false,
    tags: ["Photography", "History"],
    excerpt:
      "A faded photograph reveals forgotten faces, untold stories, and the passage of time.",
    content: `
Old photographs freeze moments that words cannot fully describe.

Each face carries dreams, struggles, and memories that deserve to be remembered.
`,
  },
  {
    id: 5,
    slug: "festival-of-homecoming",
    title: "Festival of Homecoming",
    subtitle: "Returning to our roots",
    author: "The Memory Project",
    location: "Jaipur, Rajasthan",
    category: "Culture",
    image: "/images/stories/festival.jpg",
    coverImage: "/images/stories/festival-cover.jpg",
    publishedAt: "2026-07-10",
    readTime: "4 min read",
    featured: false,
    tags: ["Festival", "Tradition", "Community"],
    excerpt:
      "Annual celebrations reconnect families, preserve traditions, and strengthen communities.",
    content: `
Festivals are not only celebrations—they are living memories shared across
generations.

They remind us of who we are and where we belong.
`,
  },
  {
    id: 6,
    slug: "echoes-of-childhood",
    title: "Echoes of Childhood",
    subtitle: "Remembering simpler days",
    author: "The Memory Project",
    location: "Kolkata, West Bengal",
    category: "Personal Memories",
    image: "/images/stories/childhood.jpg",
    coverImage: "/images/stories/childhood-cover.jpg",
    publishedAt: "2026-07-12",
    readTime: "5 min read",
    featured: false,
    tags: ["Childhood", "Family", "Memories"],
    excerpt:
      "Simple childhood moments often become the memories we treasure the most.",
    content: `
Childhood memories stay with us forever.

The games we played, the people we loved, and the places we called home become
part of our identity.
`,
  },
];

/**
 * Featured Stories
 */
export const featuredStories = stories.filter(
  (story) => story.featured
);

/**
 * Get Story By Slug
 */
export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}

/**
 * Get Stories By Category
 */
export function getStoriesByCategory(category: string): Story[] {
  return stories.filter(
    (story) => story.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Search Stories
 */
export function searchStories(query: string): Story[] {
  const value = query.toLowerCase();

  return stories.filter(
    (story) =>
      story.title.toLowerCase().includes(value) ||
      story.subtitle.toLowerCase().includes(value) ||
      story.category.toLowerCase().includes(value) ||
      story.location.toLowerCase().includes(value) ||
      story.tags.some((tag) => tag.toLowerCase().includes(value))
  );
}

/**
 * Get Latest Stories
 */
export function getLatestStories(limit = 3): Story[] {
  return [...stories]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}