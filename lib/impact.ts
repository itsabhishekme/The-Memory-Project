export interface ImpactStatistic {
  id: number;
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
  icon: string;
}

export const impactStatistics: ImpactStatistic[] = [
  {
    id: 1,
    title: "Stories Preserved",
    value: 1250,
    suffix: "+",
    description:
      "Personal stories, life experiences, and memories documented for future generations.",
    icon: "📖",
  },
  {
    id: 2,
    title: "Oral Histories",
    value: 480,
    suffix: "+",
    description:
      "Recorded conversations preserving voices, traditions, and local history.",
    icon: "🎙️",
  },
  {
    id: 3,
    title: "Historic Photographs",
    value: 3200,
    suffix: "+",
    description:
      "Photographs carefully archived to preserve visual memories and heritage.",
    icon: "📸",
  },
  {
    id: 4,
    title: "Legacy Letters",
    value: 175,
    suffix: "+",
    description:
      "Handwritten letters and family documents digitally preserved.",
    icon: "✉️",
  },
  {
    id: 5,
    title: "Families Connected",
    value: 860,
    suffix: "+",
    description:
      "Families contributing memories and preserving their shared legacy.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    id: 6,
    title: "Volunteers",
    value: 210,
    suffix: "+",
    description:
      "Dedicated volunteers helping collect, organize, and preserve memories.",
    icon: "🤝",
  },
  {
    id: 7,
    title: "Community Partners",
    value: 42,
    suffix: "+",
    description:
      "Museums, schools, NGOs, and organizations collaborating with the project.",
    icon: "🏛️",
  },
  {
    id: 8,
    title: "Countries Reached",
    value: 18,
    suffix: "",
    description:
      "Communities from around the world contributing to our living archive.",
    icon: "🌍",
  },
];

export const projectImpact = {
  mission:
    "Preserve humanity's stories, memories, and cultural heritage for future generations through digital archiving and community participation.",

  vision:
    "Create the world's most inclusive digital archive of personal histories, family memories, and cultural traditions.",

  goals: [
    "Preserve oral histories",
    "Digitize family archives",
    "Protect historical photographs",
    "Document cultural traditions",
    "Inspire future generations",
    "Build a global memory archive",
  ],

  achievements: [
    "Thousands of memories preserved",
    "Hundreds of oral history interviews",
    "Growing international community",
    "Educational partnerships established",
    "Volunteer-led preservation initiatives",
    "Digital heritage accessible worldwide",
  ],
};

export function getTotalImpact(): number {
  return impactStatistics.reduce((total, item) => total + item.value, 0);
}

export function getImpactByTitle(
  title: string
): ImpactStatistic | undefined {
  return impactStatistics.find(
    (item) => item.title.toLowerCase() === title.toLowerCase()
  );
}