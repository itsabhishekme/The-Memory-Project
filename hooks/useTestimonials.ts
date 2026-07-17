"use client";

import { useEffect, useMemo, useState } from "react";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Historian",
    location: "Jaipur, Rajasthan",
    image: "/images/testimonials/aarav.jpg",
    quote:
      "The Memory Project helped preserve my grandparents' stories forever. It has become a priceless gift for our entire family.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Teacher",
    location: "Lucknow, Uttar Pradesh",
    image: "/images/testimonials/priya.jpg",
    quote:
      "Recording our village's oral history connected students with their roots and inspired them to value their heritage.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "Volunteer",
    location: "Ahmedabad, Gujarat",
    image: "/images/testimonials/rahul.jpg",
    quote:
      "Every story we collected reminded us that ordinary people create extraordinary history through their lives.",
    rating: 5,
  },
  {
    id: 4,
    name: "Meera Nair",
    role: "Community Leader",
    location: "Kochi, Kerala",
    image: "/images/testimonials/meera.jpg",
    quote:
      "The platform gave our elders a voice and ensured their memories will never be forgotten.",
    rating: 5,
  },
];

export function useTestimonials(autoPlay: boolean = true) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || testimonialsData.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const previous = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const goTo = (index: number) => {
    if (index >= 0 && index < testimonialsData.length) {
      setActiveIndex(index);
    }
  };

  const activeTestimonial = useMemo(
    () => testimonialsData[activeIndex],
    [activeIndex]
  );

  return {
    testimonials: testimonialsData,
    activeIndex,
    activeTestimonial,
    next,
    previous,
    goTo,
  };
}

export default useTestimonials;