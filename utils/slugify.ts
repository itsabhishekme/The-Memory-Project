/**
 * Convert text into a URL-friendly slug.
 *
 * Example:
 * slugify("The Memory Project")
 * // "the-memory-project"
 */

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .normalize("NFD") // Separate accented characters
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Remove duplicate hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Generate a unique slug by checking against existing slugs.
 *
 * Example:
 * uniqueSlug("My Story", ["my-story", "my-story-1"])
 * // "my-story-2"
 */
export function uniqueSlug(
  text: string,
  existingSlugs: string[] = []
): string {
  const baseSlug = slugify(text);

  if (!existingSlugs.includes(baseSlug)) {
    return baseSlug;
  }

  let counter = 1;
  let newSlug = `${baseSlug}-${counter}`;

  while (existingSlugs.includes(newSlug)) {
    counter++;
    newSlug = `${baseSlug}-${counter}`;
  }

  return newSlug;
}

/**
 * Convert a slug back into a readable title.
 *
 * Example:
 * unslugify("the-memory-project")
 * // "The Memory Project"
 */
export function unslugify(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Check if a slug is valid.
 *
 * Rules:
 * - lowercase letters
 * - numbers
 * - hyphens
 */
export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

/**
 * Create a slug with a maximum length.
 */
export function slugifyWithLimit(
  text: string,
  maxLength = 60
): string {
  const slug = slugify(text);

  if (slug.length <= maxLength) {
    return slug;
  }

  return slug.slice(0, maxLength).replace(/-+$/, "");
}