import {
  Building2,
  GraduationCap,
  Landmark,
  HeartHandshake,
  Globe2,
  Library,
  Camera,
  BookOpen,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface Partner {
  id: number;
  name: string;
  category: string;
  description: string;
  location: string;
  website: string;
  email: string;
  logo: string;
  established: number;
  icon: LucideIcon;
  featured: boolean;
}

export const partners: Partner[] = [
  {
    id: 1,
    name: "Heritage Foundation India",
    category: "Cultural Organization",
    description:
      "Working to preserve India's diverse cultural heritage, oral traditions, and community memories for future generations.",
    location: "New Delhi, India",
    website: "https://heritagefoundation.org",
    email: "contact@heritagefoundation.org",
    logo: "/images/partners/heritage-foundation.png",
    established: 2005,
    icon: Landmark,
    featured: true,
  },
  {
    id: 2,
    name: "National Oral History Network",
    category: "Research Institute",
    description:
      "Dedicated to collecting, preserving, and sharing oral histories from communities across the country.",
    location: "Mumbai, India",
    website: "https://oralhistorynetwork.org",
    email: "hello@oralhistorynetwork.org",
    logo: "/images/partners/oral-history-network.png",
    established: 2012,
    icon: BookOpen,
    featured: true,
  },
  {
    id: 3,
    name: "Memory Keepers Collective",
    category: "Community Organization",
    description:
      "Supporting volunteers and local communities in documenting family histories and personal memories.",
    location: "Bengaluru, India",
    website: "https://memorykeepers.org",
    email: "team@memorykeepers.org",
    logo: "/images/partners/memory-keepers.png",
    established: 2018,
    icon: Users,
    featured: true,
  },
  {
    id: 4,
    name: "Archive Preservation Society",
    category: "Archive",
    description:
      "Digitizing photographs, letters, manuscripts, and historical documents for long-term preservation.",
    location: "Kolkata, India",
    website: "https://archivesociety.org",
    email: "info@archivesociety.org",
    logo: "/images/partners/archive-society.png",
    established: 1998,
    icon: Library,
    featured: false,
  },
  {
    id: 5,
    name: "Voices of Humanity",
    category: "NGO",
    description:
      "Recording inspiring life stories from elders, freedom fighters, educators, artists, and community leaders.",
    location: "Chennai, India",
    website: "https://voicesofhumanity.org",
    email: "support@voicesofhumanity.org",
    logo: "/images/partners/voices-humanity.png",
    established: 2015,
    icon: HeartHandshake,
    featured: true,
  },
  {
    id: 6,
    name: "Global Storytelling Initiative",
    category: "International",
    description:
      "Connecting storytellers, filmmakers, historians, and volunteers across the world to preserve human experiences.",
    location: "Global",
    website: "https://globalstories.org",
    email: "connect@globalstories.org",
    logo: "/images/partners/global-storytelling.png",
    established: 2020,
    icon: Globe2,
    featured: false,
  },
  {
    id: 7,
    name: "University Heritage Research Centre",
    category: "University",
    description:
      "Academic research focused on oral history, anthropology, archives, and cultural documentation.",
    location: "Pune, India",
    website: "https://heritageresearch.edu",
    email: "research@heritageresearch.edu",
    logo: "/images/partners/university-heritage.png",
    established: 2009,
    icon: GraduationCap,
    featured: false,
  },
  {
    id: 8,
    name: "Community Photo Archive",
    category: "Photography",
    description:
      "Preserving historical photographs, family albums, and visual memories through digital restoration.",
    location: "Jaipur, India",
    website: "https://communityphotoarchive.org",
    email: "photos@communityarchive.org",
    logo: "/images/partners/photo-archive.png",
    established: 2017,
    icon: Camera,
    featured: false,
  },
  {
    id: 9,
    name: "Corporate Heritage Alliance",
    category: "Corporate",
    description:
      "Helping organizations preserve their history, values, milestones, and legacy through storytelling.",
    location: "Hyderabad, India",
    website: "https://corporateheritage.org",
    email: "partners@corporateheritage.org",
    logo: "/images/partners/corporate-heritage.png",
    established: 2011,
    icon: Building2,
    featured: false,
  },
];

export const featuredPartners = partners.filter(
  (partner) => partner.featured
);

export const partnerCategories = [
  "All",
  "Archive",
  "Community Organization",
  "Corporate",
  "Cultural Organization",
  "International",
  "NGO",
  "Photography",
  "Research Institute",
  "University",
];

export function getPartnerById(id: number): Partner | undefined {
  return partners.find((partner) => partner.id === id);
}

export function getPartnersByCategory(category: string): Partner[] {
  if (category === "All") {
    return partners;
  }

  return partners.filter(
    (partner) => partner.category.toLowerCase() === category.toLowerCase()
  );
}