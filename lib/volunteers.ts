export interface Volunteer {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  bio: string;
  skills: string[];
  experience: string;
  joined: string;
  featured: boolean;
}

export const volunteers: Volunteer[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Community Story Collector",
    location: "Jaipur, Rajasthan",
    image: "/images/volunteers/aarav-sharma.jpg",
    bio: "Aarav works with local communities to record oral histories, preserve traditions, and document family stories before they are lost.",
    skills: [
      "Story Collection",
      "Community Outreach",
      "Interviewing",
      "Documentation",
    ],
    experience: "4 Years",
    joined: "2022",
    featured: true,
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Oral History Interviewer",
    location: "Lucknow, Uttar Pradesh",
    image: "/images/volunteers/priya-verma.jpg",
    bio: "Priya records inspiring life experiences from elders and community leaders, helping preserve valuable memories for future generations.",
    skills: [
      "Audio Recording",
      "Interviewing",
      "Editing",
      "Research",
    ],
    experience: "3 Years",
    joined: "2023",
    featured: true,
  },
  {
    id: 3,
    name: "Rahul Singh",
    role: "Archive Coordinator",
    location: "Patna, Bihar",
    image: "/images/volunteers/rahul-singh.jpg",
    bio: "Rahul organizes photographs, letters, and historical documents into a searchable digital archive.",
    skills: [
      "Digital Archiving",
      "Metadata",
      "Scanning",
      "Cataloguing",
    ],
    experience: "5 Years",
    joined: "2021",
    featured: false,
  },
  {
    id: 4,
    name: "Neha Patel",
    role: "Photography Volunteer",
    location: "Ahmedabad, Gujarat",
    image: "/images/volunteers/neha-patel.jpg",
    bio: "Neha captures portraits, heritage sites, and cultural events to preserve visual memories for future generations.",
    skills: [
      "Photography",
      "Photo Editing",
      "Documentation",
      "Creative Design",
    ],
    experience: "6 Years",
    joined: "2020",
    featured: true,
  },
  {
    id: 5,
    name: "Arjun Kumar",
    role: "Digital Preservation Specialist",
    location: "Bengaluru, Karnataka",
    image: "/images/volunteers/arjun-kumar.jpg",
    bio: "Arjun ensures valuable historical records remain secure through digital preservation and cloud-based archival systems.",
    skills: [
      "Cloud Storage",
      "Digital Preservation",
      "Data Management",
      "Automation",
    ],
    experience: "7 Years",
    joined: "2019",
    featured: false,
  },
  {
    id: 6,
    name: "Meera Iyer",
    role: "Community Outreach Coordinator",
    location: "Chennai, Tamil Nadu",
    image: "/images/volunteers/meera-iyer.jpg",
    bio: "Meera connects with families, schools, and organizations to encourage participation in The Memory Project.",
    skills: [
      "Public Speaking",
      "Community Engagement",
      "Event Planning",
      "Volunteer Management",
    ],
    experience: "5 Years",
    joined: "2021",
    featured: true,
  },
];

export const featuredVolunteers = volunteers.filter(
  (volunteer) => volunteer.featured
);

export function getVolunteerById(id: number): Volunteer | undefined {
  return volunteers.find((volunteer) => volunteer.id === id);
}

export function getVolunteerByName(name: string): Volunteer | undefined {
  return volunteers.find(
    (volunteer) => volunteer.name.toLowerCase() === name.toLowerCase()
  );
}

export function getVolunteersByLocation(location: string): Volunteer[] {
  return volunteers.filter((volunteer) =>
    volunteer.location.toLowerCase().includes(location.toLowerCase())
  );
}

export function getVolunteersByRole(role: string): Volunteer[] {
  return volunteers.filter((volunteer) =>
    volunteer.role.toLowerCase().includes(role.toLowerCase())
  );
}

export function searchVolunteers(keyword: string): Volunteer[] {
  const search = keyword.toLowerCase();

  return volunteers.filter(
    (volunteer) =>
      volunteer.name.toLowerCase().includes(search) ||
      volunteer.role.toLowerCase().includes(search) ||
      volunteer.location.toLowerCase().includes(search) ||
      volunteer.bio.toLowerCase().includes(search) ||
      volunteer.skills.some((skill) =>
        skill.toLowerCase().includes(search)
      )
  );
}