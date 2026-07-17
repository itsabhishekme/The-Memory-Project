export type MemoryCategory =
  | "Oral History"
  | "Family Archive"
  | "Photograph"
  | "Letter"
  | "Diary"
  | "Tradition"
  | "Culture"
  | "Historical Event"
  | "Community Story"
  | "Personal Journey";

export interface MemoryStory {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  authorImage?: string;
  coverImage: string;
  category: MemoryCategory;
  tags: string[];
  location: string;
  language: string;
  publishedAt: string;
  readingTime: number;
  featured: boolean;
  verified: boolean;
}

export interface OralHistory {
  id: string;
  title: string;
  narrator: string;
  interviewer: string;
  age?: number;
  location: string;
  language: string;
  duration: string;
  audioUrl?: string;
  videoUrl?: string;
  transcript?: string;
  thumbnail: string;
  recordedAt: string;
  summary: string;
  featured: boolean;
}

export interface FamilyArchive {
  id: string;
  title: string;
  familyName: string;
  description: string;
  location: string;
  establishedYear?: number;
  coverImage: string;
  images: string[];
  documents: string[];
  stories: string[];
}

export interface HistoricPhoto {
  id: string;
  title: string;
  image: string;
  caption: string;
  location: string;
  year?: number;
  photographer?: string;
  contributor: string;
  category: MemoryCategory;
}

export interface LegacyLetter {
  id: string;
  title: string;
  sender: string;
  receiver: string;
  date: string;
  location: string;
  image: string;
  transcript: string;
  summary: string;
}

export interface MemoryCollection {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  totalItems: number;
  curator: string;
  createdAt: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  image?: string;
  location?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization?: string;
  image: string;
  message: string;
  rating: number;
}

export interface Volunteer {
  id: string;
  name: string;
  role: string;
  location: string;
  image: string;
  bio: string;
  joinedAt: string;
}

export interface PartnerOrganization {
  id: string;
  name: string;
  type:
    | "NGO"
    | "University"
    | "Museum"
    | "Library"
    | "Corporate"
    | "Government"
    | "Community";
  logo: string;
  website?: string;
  description: string;
}

export interface ImpactStat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  description?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface SubmissionForm {
  fullName: string;
  email: string;
  phone?: string;
  title: string;
  category: MemoryCategory;
  location: string;
  language: string;
  story: string;
  consent: boolean;
}

export interface NavigationItem {
  id: string;
  title: string;
  href: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  image: string;
  alt: string;
  location: string;
  year?: number;
}

export interface FeaturedMemory {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  category: MemoryCategory;
}

export interface NewsletterSubscriber {
  email: string;
  subscribedAt: string;
}

export interface ContactInformation {
  address: string;
  email: string;
  phone: string;
  website: string;
}

export interface SiteStatistics {
  stories: number;
  oralHistories: number;
  photographs: number;
  letters: number;
  volunteers: number;
  partners: number;
  countries: number;
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  category: MemoryCategory;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface CTASection {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryButton: string;
  primaryLink: string;
  secondaryButton: string;
  secondaryLink: string;
}