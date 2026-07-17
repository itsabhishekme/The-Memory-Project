export interface LegacyLetter {
  id: string;
  title: string;
  author: string;
  recipient: string;
  relationship: string;
  date: string;
  location: string;
  category: string;
  summary: string;
  content: string;
  tags: string[];
  image: string;
  featured: boolean;
}

export const legacyLetters: LegacyLetter[] = [
  {
    id: "letter-001",
    title: "A Father's Advice",
    author: "Ramesh Kumar",
    recipient: "My Son",
    relationship: "Father to Son",
    date: "12 June 1988",
    location: "Patna, Bihar",
    category: "Family",
    summary:
      "A heartfelt letter encouraging integrity, education, and compassion.",
    content:
      "My dear son, life will offer both success and failure. Remain humble in victory and patient in hardship. Education gives knowledge, but kindness earns respect. Carry our family's values wherever you go.",
    tags: ["Family", "Advice", "Father", "Legacy"],
    image: "/images/letters/father-advice.jpg",
    featured: true,
  },
  {
    id: "letter-002",
    title: "Letters From Home",
    author: "Savitri Devi",
    recipient: "My Daughter",
    relationship: "Mother to Daughter",
    date: "3 March 1995",
    location: "Varanasi, Uttar Pradesh",
    category: "Family",
    summary:
      "A mother's words reminding her daughter that home is always with her.",
    content:
      "Distance may separate us, but love never fades. Remember where you came from and always keep your heart open to others.",
    tags: ["Mother", "Love", "Home"],
    image: "/images/letters/mother-letter.jpg",
    featured: true,
  },
  {
    id: "letter-003",
    title: "The Village Teacher",
    author: "Hari Prasad",
    recipient: "Future Students",
    relationship: "Teacher to Students",
    date: "15 August 1972",
    location: "Nalanda, Bihar",
    category: "Education",
    summary:
      "A message encouraging lifelong learning and service to society.",
    content:
      "Books teach lessons, but character is built through honesty, discipline, and service. Learn not only for yourself but also for your community.",
    tags: ["Education", "Teacher", "Inspiration"],
    image: "/images/letters/teacher-letter.jpg",
    featured: false,
  },
  {
    id: "letter-004",
    title: "A Soldier's Promise",
    author: "Captain Arjun Singh",
    recipient: "My Family",
    relationship: "Soldier to Family",
    date: "26 January 1999",
    location: "New Delhi",
    category: "Service",
    summary:
      "A letter expressing courage, hope, and devotion to both family and country.",
    content:
      "No matter where duty takes me, my greatest strength is knowing that our family stands together with love and faith.",
    tags: ["Army", "Patriotism", "Family"],
    image: "/images/letters/soldier-letter.jpg",
    featured: true,
  },
  {
    id: "letter-005",
    title: "Grandmother's Blessing",
    author: "Kamla Devi",
    recipient: "My Grandchildren",
    relationship: "Grandmother to Grandchildren",
    date: "1 January 2001",
    location: "Jaipur, Rajasthan",
    category: "Tradition",
    summary:
      "Words of wisdom passed from one generation to the next.",
    content:
      "Respect your elders, protect your traditions, and never forget that the greatest wealth is a loving family.",
    tags: ["Grandmother", "Tradition", "Wisdom"],
    image: "/images/letters/grandmother-letter.jpg",
    featured: false,
  },
  {
    id: "letter-006",
    title: "Hope for Tomorrow",
    author: "Anita Sharma",
    recipient: "Future Generation",
    relationship: "Citizen to Future",
    date: "14 November 2015",
    location: "Bengaluru, Karnataka",
    category: "Hope",
    summary:
      "A message encouraging future generations to preserve humanity, culture, and memories.",
    content:
      "Technology will continue to change the world, but never allow it to replace empathy, kindness, and the stories that make us human.",
    tags: ["Future", "Hope", "Humanity"],
    image: "/images/letters/future-letter.jpg",
    featured: true,
  },
];

export function getAllLegacyLetters(): LegacyLetter[] {
  return legacyLetters;
}

export function getFeaturedLegacyLetters(): LegacyLetter[] {
  return legacyLetters.filter((letter) => letter.featured);
}

export function getLegacyLetterById(
  id: string
): LegacyLetter | undefined {
  return legacyLetters.find((letter) => letter.id === id);
}

export function getLegacyLettersByCategory(
  category: string
): LegacyLetter[] {
  return legacyLetters.filter(
    (letter) =>
      letter.category.toLowerCase() === category.toLowerCase()
  );
}

export function searchLegacyLetters(
  query: string
): LegacyLetter[] {
  const search = query.toLowerCase();

  return legacyLetters.filter(
    (letter) =>
      letter.title.toLowerCase().includes(search) ||
      letter.author.toLowerCase().includes(search) ||
      letter.recipient.toLowerCase().includes(search) ||
      letter.summary.toLowerCase().includes(search) ||
      letter.tags.some((tag) =>
        tag.toLowerCase().includes(search)
      )
  );
}