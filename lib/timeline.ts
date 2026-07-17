export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export const timeline: TimelineEvent[] = [
  {
    id: 1,
    year: "1857",
    title: "Stories of the First War of Independence",
    description:
      "Personal memories, family narratives, and oral traditions passed through generations preserving the sacrifices and courage of India's freedom fighters.",
    category: "History",
    image: "/images/timeline/1857.jpg",
  },
  {
    id: 2,
    year: "1947",
    title: "Partition Memories",
    description:
      "First-hand accounts documenting migration, resilience, hope, and the rebuilding of lives during India's partition.",
    category: "Oral History",
    image: "/images/timeline/1947.jpg",
  },
  {
    id: 3,
    year: "1960s",
    title: "Growing Rural India",
    description:
      "Traditional farming practices, village life, festivals, and everyday experiences recorded from elders across the country.",
    category: "Community",
    image: "/images/timeline/1960s.jpg",
  },
  {
    id: 4,
    year: "1980s",
    title: "Family Traditions",
    description:
      "Celebrating homemade recipes, festivals, weddings, and customs that shaped family identity across generations.",
    category: "Culture",
    image: "/images/timeline/1980s.jpg",
  },
  {
    id: 5,
    year: "1990s",
    title: "Letters & Photographs",
    description:
      "Preserving handwritten letters, treasured photographs, postcards, and keepsakes before they disappear forever.",
    category: "Archive",
    image: "/images/timeline/1990s.jpg",
  },
  {
    id: 6,
    year: "2000s",
    title: "Digital Memories",
    description:
      "Digitizing family albums, interviews, documents, and historical collections to ensure long-term preservation.",
    category: "Digital Archive",
    image: "/images/timeline/2000s.jpg",
  },
  {
    id: 7,
    year: "Today",
    title: "The Memory Project",
    description:
      "A living archive where every individual can preserve personal stories, oral histories, photographs, letters, traditions, and memories for future generations.",
    category: "Legacy",
    image: "/images/timeline/today.jpg",
  },
];

export const timelineCategories = [
  "All",
  "History",
  "Oral History",
  "Community",
  "Culture",
  "Archive",
  "Digital Archive",
  "Legacy",
];

export function getTimelineEvents() {
  return timeline;
}

export function getTimelineByCategory(category: string) {
  if (category === "All") {
    return timeline;
  }

  return timeline.filter((event) => event.category === category);
}

export function getTimelineEvent(id: number) {
  return timeline.find((event) => event.id === id);
}

export function getLatestTimelineEvent() {
  return timeline[timeline.length - 1];
}