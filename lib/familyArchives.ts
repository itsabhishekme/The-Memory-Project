export interface FamilyArchive {
  id: number;
  slug: string;
  title: string;
  familyName: string;
  location: string;
  state: string;
  country: string;
  yearEstablished: number;
  category: string;
  coverImage: string;
  gallery: string[];
  description: string;
  story: string;
  significance: string;
  preservedItems: string[];
  generations: number;
  contributors: string[];
  featured: boolean;
}

export const familyArchives: FamilyArchive[] = [
  {
    id: 1,
    slug: "sharma-family-archive",
    title: "The Sharma Family Archive",
    familyName: "Sharma Family",
    location: "Jaipur",
    state: "Rajasthan",
    country: "India",
    yearEstablished: 1942,
    category: "Family Heritage",
    coverImage: "/images/family-archives/sharma.jpg",
    gallery: [
      "/images/family-archives/sharma-1.jpg",
      "/images/family-archives/sharma-2.jpg",
      "/images/family-archives/sharma-3.jpg",
    ],
    description:
      "A collection of photographs, handwritten letters, family records, and heirlooms spanning more than eighty years.",
    story:
      "The Sharma family carefully preserved memories across four generations, documenting celebrations, traditions, education, migration, and community life.",
    significance:
      "An inspiring example of how family archives connect the past with future generations.",
    preservedItems: [
      "Photographs",
      "Letters",
      "Marriage Certificates",
      "Family Tree",
      "Personal Diaries",
    ],
    generations: 4,
    contributors: [
      "Rajesh Sharma",
      "Anita Sharma",
      "Rohan Sharma",
    ],
    featured: true,
  },
  {
    id: 2,
    slug: "iyer-family-legacy",
    title: "The Iyer Family Legacy",
    familyName: "Iyer Family",
    location: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    yearEstablished: 1935,
    category: "Oral History",
    coverImage: "/images/family-archives/iyer.jpg",
    gallery: [
      "/images/family-archives/iyer-1.jpg",
      "/images/family-archives/iyer-2.jpg",
    ],
    description:
      "A family archive preserving stories, recipes, music, and traditions passed through generations.",
    story:
      "Grandparents recorded their memories, preserving language, festivals, and rituals for younger generations.",
    significance:
      "An important archive celebrating India's diverse cultural traditions.",
    preservedItems: [
      "Audio Interviews",
      "Traditional Recipes",
      "Old Photographs",
      "Festival Records",
    ],
    generations: 5,
    contributors: [
      "Lakshmi Iyer",
      "Suresh Iyer",
    ],
    featured: true,
  },
  {
    id: 3,
    slug: "singh-family-history",
    title: "The Singh Family History",
    familyName: "Singh Family",
    location: "Patna",
    state: "Bihar",
    country: "India",
    yearEstablished: 1951,
    category: "Historical Documents",
    coverImage: "/images/family-archives/singh.jpg",
    gallery: [
      "/images/family-archives/singh-1.jpg",
      "/images/family-archives/singh-2.jpg",
      "/images/family-archives/singh-3.jpg",
    ],
    description:
      "Historical documents, journals, certificates, and community records collected over several decades.",
    story:
      "The archive reflects family milestones alongside regional history, education, agriculture, and social service.",
    significance:
      "Shows how ordinary families contribute to extraordinary historical narratives.",
    preservedItems: [
      "Certificates",
      "Land Records",
      "Journals",
      "Community Documents",
    ],
    generations: 3,
    contributors: [
      "Amit Singh",
      "Neha Singh",
    ],
    featured: false,
  },
  {
    id: 4,
    slug: "fernandes-family-memories",
    title: "The Fernandes Family Memories",
    familyName: "Fernandes Family",
    location: "Goa",
    state: "Goa",
    country: "India",
    yearEstablished: 1928,
    category: "Photographs",
    coverImage: "/images/family-archives/fernandes.jpg",
    gallery: [
      "/images/family-archives/fernandes-1.jpg",
      "/images/family-archives/fernandes-2.jpg",
    ],
    description:
      "A visual archive documenting family life, travel, festivals, and community celebrations across generations.",
    story:
      "More than ninety years of carefully preserved photographs tell the family's remarkable journey.",
    significance:
      "Demonstrates the value of photographs in preserving cultural identity.",
    preservedItems: [
      "Photo Albums",
      "Postcards",
      "Travel Journals",
      "Family Portraits",
    ],
    generations: 4,
    contributors: [
      "Maria Fernandes",
      "Joseph Fernandes",
    ],
    featured: false,
  },
  {
    id: 5,
    slug: "khan-family-archive",
    title: "The Khan Family Archive",
    familyName: "Khan Family",
    location: "Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    yearEstablished: 1948,
    category: "Cultural Heritage",
    coverImage: "/images/family-archives/khan.jpg",
    gallery: [
      "/images/family-archives/khan-1.jpg",
      "/images/family-archives/khan-2.jpg",
      "/images/family-archives/khan-3.jpg",
    ],
    description:
      "A collection celebrating family traditions, craftsmanship, education, poetry, and community service.",
    story:
      "Each generation contributed memories that now form a shared historical archive for descendants.",
    significance:
      "Highlights the importance of preserving cultural identity through personal stories.",
    preservedItems: [
      "Poetry",
      "Letters",
      "Family Recipes",
      "Craftsmanship Records",
      "Photographs",
    ],
    generations: 5,
    contributors: [
      "Imran Khan",
      "Ayesha Khan",
      "Sara Khan",
    ],
    featured: true,
  },
];

/* -------------------------------------------------------------------------- */
/*                                  Helpers                                   */
/* -------------------------------------------------------------------------- */

export const featuredFamilyArchives = familyArchives.filter(
  (archive) => archive.featured
);

export const getFamilyArchiveBySlug = (slug: string) =>
  familyArchives.find((archive) => archive.slug === slug);

export const getFamilyArchivesByCategory = (category: string) =>
  familyArchives.filter(
    (archive) => archive.category.toLowerCase() === category.toLowerCase()
  );

export const getFamilyArchivesByState = (state: string) =>
  familyArchives.filter(
    (archive) => archive.state.toLowerCase() === state.toLowerCase()
  );

export const totalFamilyArchives = familyArchives.length;