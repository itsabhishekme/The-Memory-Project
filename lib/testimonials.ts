export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  quote: string;
  contribution: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anita Sharma",
    role: "Family Story Contributor",
    location: "Jaipur, Rajasthan",
    image: "/images/testimonials/anita-sharma.jpg",
    quote:
      "The Memory Project helped our family preserve my grandmother's stories before they were lost forever. Today, our children can listen to her voice and understand where they come from.",
    contribution: "Recorded three generations of family oral histories.",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Community Volunteer",
    location: "Patna, Bihar",
    image: "/images/testimonials/rajesh-kumar.jpg",
    quote:
      "Every elder has a lifetime of wisdom. Recording their memories has become one of the most meaningful experiences of my life.",
    contribution: "Collected more than 100 community interviews.",
  },
  {
    id: 3,
    name: "Dr. Meera Iyer",
    role: "Historian",
    location: "Chennai, Tamil Nadu",
    image: "/images/testimonials/meera-iyer.jpg",
    quote:
      "These stories preserve local traditions that rarely appear in history books. The archive will become an invaluable resource for future generations.",
    contribution: "Curated regional history and heritage collections.",
  },
  {
    id: 4,
    name: "Ayesha Khan",
    role: "Photographer",
    location: "Lucknow, Uttar Pradesh",
    image: "/images/testimonials/ayesha-khan.jpg",
    quote:
      "Photographs capture moments, but stories give them meaning. Combining both creates memories that last forever.",
    contribution: "Digitized and restored over 2,000 family photographs.",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Research Partner",
    location: "London, United Kingdom",
    image: "/images/testimonials/david-wilson.jpg",
    quote:
      "The Memory Project is creating a global archive of humanity—one conversation, one photograph, and one memory at a time.",
    contribution: "Supported international oral history collaborations.",
  },
  {
    id: 6,
    name: "Priya Nair",
    role: "University Student",
    location: "Kochi, Kerala",
    image: "/images/testimonials/priya-nair.jpg",
    quote:
      "Interviewing my grandparents changed the way I see my family's history. Their memories are now something future generations can experience.",
    contribution: "Created a digital archive of family interviews.",
  },
];

export default testimonials;