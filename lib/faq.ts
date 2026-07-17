export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    category: "General",
    question: "What is The Memory Project?",
    answer:
      "The Memory Project is a digital initiative dedicated to preserving human stories, oral histories, family archives, photographs, letters, and cultural heritage so they can be shared with future generations.",
  },
  {
    id: 2,
    category: "General",
    question: "Why is preserving memories important?",
    answer:
      "Every family, community, and culture carries unique experiences that help us understand our past, strengthen our present, and inspire future generations. Preserving memories prevents valuable stories from being lost over time.",
  },
  {
    id: 3,
    category: "Stories",
    question: "Who can share a story?",
    answer:
      "Anyone can contribute. Individuals, families, educators, historians, students, community organizations, and cultural institutions are all welcome to share meaningful stories and memories.",
  },
  {
    id: 4,
    category: "Stories",
    question: "What types of memories can I submit?",
    answer:
      "You can submit personal experiences, family histories, oral interviews, traditional practices, photographs, letters, historical documents, cultural events, or community stories.",
  },
  {
    id: 5,
    category: "Submission",
    question: "Can I upload photographs and documents?",
    answer:
      "Yes. Contributors can upload photographs, scanned letters, certificates, journals, newspapers, and other historical materials that help preserve personal and community history.",
  },
  {
    id: 6,
    category: "Submission",
    question: "Can I record an oral history?",
    answer:
      "Yes. Audio and video recordings are encouraged to preserve authentic voices, languages, traditions, and personal experiences.",
  },
  {
    id: 7,
    category: "Privacy",
    question: "Will my personal information remain private?",
    answer:
      "You control what information is shared publicly. Sensitive information can remain private, and contributors may choose how their stories are displayed.",
  },
  {
    id: 8,
    category: "Privacy",
    question: "Can I edit or remove my submission later?",
    answer:
      "Yes. You may request updates, corrections, or removal of your submitted content at any time by contacting our team.",
  },
  {
    id: 9,
    category: "Partnerships",
    question: "Can organizations partner with The Memory Project?",
    answer:
      "Absolutely. Museums, archives, schools, universities, nonprofits, cultural organizations, libraries, and businesses are welcome to collaborate on preservation initiatives.",
  },
  {
    id: 10,
    category: "Volunteering",
    question: "How can I become a volunteer?",
    answer:
      "You can join as a volunteer by helping collect stories, conduct interviews, digitize historical records, translate content, or organize community events.",
  },
  {
    id: 11,
    category: "Technology",
    question: "How are memories preserved digitally?",
    answer:
      "Stories, photographs, audio recordings, videos, and documents are securely organized in a structured digital archive, making them searchable and accessible for future generations.",
  },
  {
    id: 12,
    category: "Community",
    question: "How can I support The Memory Project?",
    answer:
      "You can support the project by sharing your story, volunteering, partnering with us, donating resources, or encouraging others to preserve their family and community history.",
  },
];

export const faqCategories = [
  "General",
  "Stories",
  "Submission",
  "Privacy",
  "Partnerships",
  "Volunteering",
  "Technology",
  "Community",
];

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter((faq) => faq.category === category);
}

export function getFAQById(id: number): FAQ | undefined {
  return faqs.find((faq) => faq.id === id);
}

export function searchFAQs(query: string): FAQ[] {
  const searchTerm = query.toLowerCase();

  return faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm) ||
      faq.answer.toLowerCase().includes(searchTerm) ||
      faq.category.toLowerCase().includes(searchTerm)
  );
}