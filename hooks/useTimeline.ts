"use client";

import { useEffect, useMemo, useState } from "react";

export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  location?: string;
}

const timelineData: TimelineEvent[] = [
  {
    id: 1,
    year: "1947",
    title: "A New Beginning",
    description:
      "Families rebuilt their lives after independence, creating stories of resilience, hope, and unity that continue to inspire future generations.",
    category: "History",
    location: "India",
    image: "/images/timeline/1947.jpg",
  },
  {
    id: 2,
    year: "1965",
    title: "Village Traditions",
    description:
      "Communities preserved folk songs, oral traditions, and local customs by passing them from one generation to the next.",
    category: "Culture",
    location: "Rural India",
    image: "/images/timeline/1965.jpg",
  },
  {
    id: 3,
    year: "1980",
    title: "Family Heritage",
    description:
      "Photographs, handwritten letters, and family albums became treasured memories connecting grandparents, parents, and children.",
    category: "Family",
    location: "Across India",
    image: "/images/timeline/1980.jpg",
  },
  {
    id: 4,
    year: "2005",
    title: "Digital Preservation",
    description:
      "Communities began digitizing historical records and photographs to ensure long-term preservation.",
    category: "Technology",
    location: "Worldwide",
    image: "/images/timeline/2005.jpg",
  },
  {
    id: 5,
    year: "Today",
    title: "The Memory Project",
    description:
      "Collecting oral histories, family archives, and personal memories to create a living archive for future generations.",
    category: "Legacy",
    location: "Global",
    image: "/images/timeline/today.jpg",
  },
];

export default function useTimeline() {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEvents(timelineData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const totalEvents = useMemo(() => events.length, [events]);

  const categories = useMemo(() => {
    return [...new Set(events.map((event) => event.category))];
  }, [events]);

  const years = useMemo(() => {
    return events.map((event) => event.year);
  }, [events]);

  const latestEvent = useMemo(() => {
    return events.at(-1) ?? null;
  }, [events]);

  const getEventsByCategory = (category: string) => {
    return events.filter(
      (event) =>
        event.category.toLowerCase() === category.toLowerCase()
    );
  };

  const getEventById = (id: number) => {
    return events.find((event) => event.id === id);
  };

  return {
    events,
    loading,
    totalEvents,
    categories,
    years,
    latestEvent,
    getEventsByCategory,
    getEventById,
  };
}