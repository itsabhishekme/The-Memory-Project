"use client";

import { useEffect, useMemo, useState } from "react";
import type { MemoryStory } from "@/types/memory";
import { stories as initialStories } from "@/lib/stories";

export interface UseStoriesOptions {
  category?: string;
  featuredOnly?: boolean;
  search?: string;
}

export function useStories(options: UseStoriesOptions = {}) {
  const { category, featuredOnly = false, search = "" } = options;

  const [stories, setStories] = useState<MemoryStory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading from an API or database.
    const timer = setTimeout(() => {
      setStories(initialStories as unknown as MemoryStory[]);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const filteredStories = useMemo(() => {
    let data = [...stories];

    if (category) {
      data = data.filter(
        (story) =>
          story.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (featuredOnly) {
      data = data.filter((story) => story.featured);
    }

    if (search.trim()) {
      const keyword = search.toLowerCase();

      data = data.filter((story) => {
        return (
          story.title.toLowerCase().includes(keyword) ||
          story.author.toLowerCase().includes(keyword) ||
          story.summary.toLowerCase().includes(keyword) ||
          story.location.toLowerCase().includes(keyword)
        );
      });
    }

    return data;
  }, [stories, category, featuredOnly, search]);

  return {
    stories: filteredStories,
    loading,
    totalStories: filteredStories.length,
  };
}

export default useStories;