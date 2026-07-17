/**
 * Formats a date into a readable string.
 * Example:
 * January 15, 2026
 */

export function formatDate(
  date: Date | string | number,
  locale: string = "en-US"
): string {
  const parsedDate = date instanceof Date ? date : new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return "Invalid Date";
  }

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parsedDate);
}

/**
 * Formats a date with weekday.
 * Example:
 * Thursday, January 15, 2026
 */

export function formatDateWithWeekday(
  date: Date | string | number,
  locale: string = "en-US"
): string {
  const parsedDate = date instanceof Date ? date : new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return "Invalid Date";
  }

  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parsedDate);
}

/**
 * Formats date as:
 * 15 Jan 2026
 */

export function formatShortDate(
  date: Date | string |number,
  locale: string = "en-US"
): string {
  const parsedDate = date instanceof Date ? date : new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return "Invalid Date";
  }

  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
}

/**
 * Formats date for inputs.
 * Example:
 * 2026-01-15
 */

export function formatInputDate(
  date: Date | string | number
): string {
  const parsedDate = date instanceof Date ? date : new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return "";
  }

  return parsedDate.toISOString().split("T")[0];
}

/**
 * Returns relative time.
 * Examples:
 * Today
 * Yesterday
 * 5 days ago
 * 2 months ago
 */

export function formatRelativeDate(
  date: Date | string | number
): string {
  const parsedDate = date instanceof Date ? date : new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return "Invalid Date";
  }

  const now = new Date();

  const seconds = Math.floor(
    (now.getTime() - parsedDate.getTime()) / 1000
  );

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  if (seconds < minute) return "Just now";

  if (seconds < hour) {
    const minutes = Math.floor(seconds / minute);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  }

  if (seconds < day) {
    const hours = Math.floor(seconds / hour);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  }

  if (seconds < day * 2) {
    return "Yesterday";
  }

  if (seconds < month) {
    const days = Math.floor(seconds / day);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }

  if (seconds < year) {
    const months = Math.floor(seconds / month);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  }

  const years = Math.floor(seconds / year);
  return `${years} year${years !== 1 ? "s" : ""} ago`;
}

/**
 * Formats date & time.
 * Example:
 * January 15, 2026, 10:30 AM
 */

export function formatDateTime(
  date: Date | string | number,
  locale: string = "en-US"
): string {
  const parsedDate = date instanceof Date ? date : new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return "Invalid Date";
  }

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(parsedDate);
}