export interface HistoricPhoto {
  id: string;
  title: string;
  year: string;
  location: string;
  photographer: string;
  category: string;
  image: string;
  description: string;
  story: string;
  tags: string[];
  featured: boolean;
}

export const historicPhotos: HistoricPhoto[] = [
  {
    id: "photo-001",
    title: "A Village Morning",
    year: "1958",
    location: "Bihar, India",
    photographer: "Unknown",
    category: "Village Life",
    image: "/images/memory-project/photographs/village-morning.jpg",
    description:
      "A peaceful sunrise capturing everyday life in a traditional Indian village.",
    story:
      "This photograph reflects the rhythm of rural life, where families gathered at dawn, children played barefoot, and communities shared a close connection with nature.",
    tags: ["Village", "India", "Family", "Heritage"],
    featured: true,
  },
  {
    id: "photo-002",
    title: "Grandmother's Kitchen",
    year: "1972",
    location: "Rajasthan, India",
    photographer: "Family Collection",
    category: "Family",
    image: "/images/memory-project/photographs/grandmother-kitchen.jpg",
    description:
      "Preparing traditional meals using recipes passed down through generations.",
    story:
      "The kitchen was more than a place to cook—it was where stories, traditions, and family values were shared every day.",
    tags: ["Cooking", "Family", "Tradition"],
    featured: true,
  },
  {
    id: "photo-003",
    title: "School Days",
    year: "1984",
    location: "Karnataka, India",
    photographer: "Community Archive",
    category: "Education",
    image: "/images/memory-project/photographs/school-days.jpg",
    description:
      "Students gathered outside a government school after morning assembly.",
    story:
      "Education transformed countless lives. This image captures the hopes and dreams of an entire generation.",
    tags: ["School", "Children", "Education"],
    featured: false,
  },
  {
    id: "photo-004",
    title: "Festival Celebration",
    year: "1968",
    location: "West Bengal, India",
    photographer: "Unknown",
    category: "Culture",
    image: "/images/memory-project/photographs/festival.jpg",
    description:
      "Families celebrating a local cultural festival together.",
    story:
      "Festivals brought together neighbors, relatives, and communities, strengthening traditions that continue today.",
    tags: ["Festival", "Culture", "Community"],
    featured: true,
  },
  {
    id: "photo-005",
    title: "The Old Marketplace",
    year: "1949",
    location: "Delhi, India",
    photographer: "Historical Archive",
    category: "History",
    image: "/images/memory-project/photographs/marketplace.jpg",
    description:
      "A busy marketplace shortly after India's independence.",
    story:
      "The marketplace symbolized resilience, entrepreneurship, and the rebuilding of communities during a transformative period.",
    tags: ["Market", "History", "Independence"],
    featured: false,
  },
  {
    id: "photo-006",
    title: "Family Portrait",
    year: "1963",
    location: "Uttar Pradesh, India",
    photographer: "Private Collection",
    category: "Family",
    image: "/images/memory-project/photographs/family-portrait.jpg",
    description:
      "A multi-generational family gathered for a rare portrait.",
    story:
      "Photographs like these preserve faces, relationships, and memories that continue to inspire future generations.",
    tags: ["Portrait", "Family", "Legacy"],
    featured: true,
  },
];

export const featuredHistoricPhotos = historicPhotos.filter(
  (photo) => photo.featured
);

export const familyHistoricPhotos = historicPhotos.filter(
  (photo) => photo.category === "Family"
);

export const culturalHistoricPhotos = historicPhotos.filter(
  (photo) => photo.category === "Culture"
);

export const educationalHistoricPhotos = historicPhotos.filter(
  (photo) => photo.category === "Education"
);

export const historicalHistoricPhotos = historicPhotos.filter(
  (photo) => photo.category === "History"
);

export function getHistoricPhotoById(id: string): HistoricPhoto | undefined {
  return historicPhotos.find((photo) => photo.id === id);
}

export function getHistoricPhotosByCategory(
  category: string
): HistoricPhoto[] {
  return historicPhotos.filter(
    (photo) => photo.category.toLowerCase() === category.toLowerCase()
  );
}

export function searchHistoricPhotos(query: string): HistoricPhoto[] {
  const search = query.toLowerCase();

  return historicPhotos.filter((photo) => {
    return (
      photo.title.toLowerCase().includes(search) ||
      photo.location.toLowerCase().includes(search) ||
      photo.category.toLowerCase().includes(search) ||
      photo.year.toLowerCase().includes(search) ||
      photo.description.toLowerCase().includes(search) ||
      photo.story.toLowerCase().includes(search) ||
      photo.tags.some((tag) => tag.toLowerCase().includes(search))
    );
  });
}