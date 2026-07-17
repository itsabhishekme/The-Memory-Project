/**
 * Calculates the estimated reading time for a given text.
 * Assumes an average reading speed of 200 words per minute.
 */

const WORDS_PER_MINUTE = 200;

/**
 * Get estimated reading time.
 *
 * @param text - The text content.
 * @returns A formatted reading time string (e.g. "3 min read")
 */
export function readingTime(text: string): string {
  if (!text || text.trim().length === 0) {
    return "0 min read";
  }

  const words = text
    .trim()
    .replace(/\s+/g, " ")
    .split(" ").length;

  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));

  return `${minutes} min read`;
}

/**
 * Returns detailed reading statistics.
 *
 * @param text - The text content.
 */
export function readingStats(text: string) {
  if (!text || text.trim().length === 0) {
    return {
      words: 0,
      minutes: 0,
      label: "0 min read",
    };
  }

  const words = text
    .trim()
    .replace(/\s+/g, " ")
    .split(" ").length;

  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));

  return {
    words,
    minutes,
    label: `${minutes} min read`,
  };
}

/**
 * Returns the total word count.
 *
 * @param text - The text content.
 */
export function wordCount(text: string): number {
  if (!text || text.trim().length === 0) {
    return 0;
  }

  return text
    .trim()
    .replace(/\s+/g, " ")
    .split(" ").length;
}

/**
 * Returns the total character count (excluding leading/trailing whitespace).
 *
 * @param text - The text content.
 */
export function characterCount(text: string): number {
  if (!text) {
    return 0;
  }

  return text.trim().length;
}

/**
 * Returns the total character count including spaces.
 *
 * @param text - The text content.
 */
export function characterCountWithSpaces(text: string): number {
  return text?.length ?? 0;
}