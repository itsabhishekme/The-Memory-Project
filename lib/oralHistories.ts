export interface OralHistory {
  id: string;
  slug: string;
  title: string;
  narrator: string;
  location: string;
  category:
    | "Freedom Movement"
    | "Family Heritage"
    | "Village Life"
    | "Culture & Traditions"
    | "Migration"
    | "Education"
    | "Women Stories"
    | "Community";
  year: string;
  duration: string;
  language: string;
  image: string;
  excerpt: string;
  story: string;
  featured: boolean;
  tags: string[];
}

export const oralHistories: OralHistory[] = [
  {
    id: "OH001",
    slug: "grandmothers-kitchen-memories",
    title: "Grandmother's Kitchen Memories",
    narrator: "Savitri Devi",
    location: "Chapra, Bihar",
    category: "Family Heritage",
    year: "1968",
    duration: "18 min",
    language: "Hindi",
    image: "/images/oral-histories/grandmother.jpg",
    excerpt:
      "A heartfelt journey through traditional cooking, family gatherings, and the warmth of a village kitchen.",
    story:
      "Savitri Devi shares unforgettable memories of preparing meals using clay stoves, preserving traditional recipes, celebrating festivals, and strengthening family bonds through food and storytelling.",
    featured: true,
    tags: ["Family", "Food", "Traditions", "Heritage"],
  },
  {
    id: "OH002",
    slug: "memories-of-independence",
    title: "Memories of Independence",
    narrator: "Ramesh Prasad",
    location: "Patna, Bihar",
    category: "Freedom Movement",
    year: "1947",
    duration: "24 min",
    language: "Hindi",
    image: "/images/oral-histories/independence.jpg",
    excerpt:
      "Personal memories of witnessing India's independence and the celebrations that followed.",
    story:
      "Ramesh Prasad recounts the emotions, sacrifices, and hopes experienced during India's independence, providing a valuable first-hand historical perspective.",
    featured: true,
    tags: ["History", "Freedom", "India", "Legacy"],
  },
  {
    id: "OH003",
    slug: "life-in-the-village",
    title: "Life in the Village",
    narrator: "Kamla Kumari",
    location: "Siwan, Bihar",
    category: "Village Life",
    year: "1975",
    duration: "15 min",
    language: "Hindi",
    image: "/images/oral-histories/village-life.jpg",
    excerpt:
      "Stories about farming, festivals, childhood games, and strong community relationships.",
    story:
      "Kamla Kumari reflects on the simplicity of village life, highlighting agriculture, local traditions, and the importance of neighbors supporting one another.",
    featured: false,
    tags: ["Village", "Community", "Agriculture"],
  },
  {
    id: "OH004",
    slug: "traditional-festivals",
    title: "Traditional Festivals Through Generations",
    narrator: "Harish Chandra",
    location: "Varanasi, Uttar Pradesh",
    category: "Culture & Traditions",
    year: "1980",
    duration: "20 min",
    language: "Hindi",
    image: "/images/oral-histories/festivals.jpg",
    excerpt:
      "A collection of memories celebrating festivals, rituals, and cultural heritage.",
    story:
      "Harish Chandra explains how festivals united families and communities, preserving customs that continue to inspire future generations.",
    featured: true,
    tags: ["Festivals", "Culture", "Traditions"],
  },
  {
    id: "OH005",
    slug: "journey-to-the-city",
    title: "Journey to the City",
    narrator: "Sunil Kumar",
    location: "Delhi",
    category: "Migration",
    year: "1992",
    duration: "16 min",
    language: "Hindi",
    image: "/images/oral-histories/migration.jpg",
    excerpt:
      "An inspiring story of leaving home in search of better opportunities.",
    story:
      "Sunil Kumar describes the challenges of migration, adapting to city life, and maintaining strong ties with his hometown and family.",
    featured: false,
    tags: ["Migration", "Family", "Hope"],
  },
  {
    id: "OH006",
    slug: "education-changed-my-life",
    title: "Education Changed My Life",
    narrator: "Anita Sharma",
    location: "Jaipur, Rajasthan",
    category: "Education",
    year: "1998",
    duration: "17 min",
    language: "Hindi",
    image: "/images/oral-histories/education.jpg",
    excerpt:
      "A story about overcoming barriers and the power of education.",
    story:
      "Anita Sharma reflects on the opportunities education created for her family and community, inspiring future generations to pursue learning.",
    featured: true,
    tags: ["Education", "Inspiration", "Women"],
  },
  {
    id: "OH007",
    slug: "voices-of-women",
    title: "Voices of Women",
    narrator: "Shanti Devi",
    location: "Lucknow, Uttar Pradesh",
    category: "Women Stories",
    year: "1987",
    duration: "19 min",
    language: "Hindi",
    image: "/images/oral-histories/women.jpg",
    excerpt:
      "Stories of resilience, family, leadership, and community service.",
    story:
      "Shanti Devi shares experiences of balancing family responsibilities while contributing to social progress and preserving traditions.",
    featured: false,
    tags: ["Women", "Leadership", "Community"],
  },
  {
    id: "OH008",
    slug: "community-that-cared",
    title: "The Community That Cared",
    narrator: "Mohammad Arif",
    location: "Hyderabad, Telangana",
    category: "Community",
    year: "2001",
    duration: "21 min",
    language: "Urdu",
    image: "/images/oral-histories/community.jpg",
    excerpt:
      "A moving story about unity, kindness, and helping one another.",
    story:
      "Mohammad Arif remembers how neighbors stood together during difficult times, demonstrating the strength of compassion and shared responsibility.",
    featured: true,
    tags: ["Community", "Hope", "Unity", "Humanity"],
  },
];

// Helper Functions

export const getAllOralHistories = (): OralHistory[] => oralHistories;

export const getFeaturedOralHistories = (): OralHistory[] =>
  oralHistories.filter((history) => history.featured);

export const getOralHistoryBySlug = (
  slug: string
): OralHistory | undefined =>
  oralHistories.find((history) => history.slug === slug);

export const getOralHistoriesByCategory = (
  category: OralHistory["category"]
): OralHistory[] =>
  oralHistories.filter((history) => history.category === category);

export const searchOralHistories = (query: string): OralHistory[] => {
  const search = query.toLowerCase();

  return oralHistories.filter(
    (history) =>
      history.title.toLowerCase().includes(search) ||
      history.narrator.toLowerCase().includes(search) ||
      history.location.toLowerCase().includes(search) ||
      history.category.toLowerCase().includes(search) ||
      history.tags.some((tag) => tag.toLowerCase().includes(search))
  );
};