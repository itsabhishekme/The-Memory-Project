/**
 * Common validation utilities for The Memory Project
 */

export interface ValidationResult {
  valid: boolean;
  message?: string;
}

/* -------------------------------------------------------------------------- */
/*                               Basic Validators                             */
/* -------------------------------------------------------------------------- */

export function isRequired(value: unknown): ValidationResult {
  if (
    value === null ||
    value === undefined ||
    String(value).trim() === ""
  ) {
    return {
      valid: false,
      message: "This field is required.",
    };
  }

  return { valid: true };
}

export function validateName(name: string): ValidationResult {
  const value = name.trim();

  if (!value) {
    return {
      valid: false,
      message: "Name is required.",
    };
  }

  if (value.length < 2) {
    return {
      valid: false,
      message: "Name must be at least 2 characters.",
    };
  }

  if (value.length > 100) {
    return {
      valid: false,
      message: "Name cannot exceed 100 characters.",
    };
  }

  const regex = /^[A-Za-zÀ-ÿ' -]+$/;

  if (!regex.test(value)) {
    return {
      valid: false,
      message: "Name contains invalid characters.",
    };
  }

  return { valid: true };
}

export function validateEmail(email: string): ValidationResult {
  const value = email.trim();

  if (!value) {
    return {
      valid: false,
      message: "Email is required.",
    };
  }

  const regex =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!regex.test(value)) {
    return {
      valid: false,
      message: "Please enter a valid email address.",
    };
  }

  return { valid: true };
}

export function validatePhone(phone: string): ValidationResult {
  const value = phone.trim();

  if (!value) {
    return {
      valid: false,
      message: "Phone number is required.",
    };
  }

  const digits = value.replace(/\D/g, "");

  if (digits.length !== 10) {
    return {
      valid: false,
      message: "Phone number must contain 10 digits.",
    };
  }

  return { valid: true };
}

export function validateUrl(url: string): ValidationResult {
  const value = url.trim();

  if (!value) {
    return { valid: true };
  }

  try {
    new URL(value);

    return { valid: true };
  } catch {
    return {
      valid: false,
      message: "Please enter a valid URL.",
    };
  }
}

/* -------------------------------------------------------------------------- */
/*                              Story Validators                              */
/* -------------------------------------------------------------------------- */

export function validateTitle(title: string): ValidationResult {
  const value = title.trim();

  if (!value) {
    return {
      valid: false,
      message: "Title is required.",
    };
  }

  if (value.length < 5) {
    return {
      valid: false,
      message: "Title must be at least 5 characters.",
    };
  }

  if (value.length > 150) {
    return {
      valid: false,
      message: "Title cannot exceed 150 characters.",
    };
  }

  return { valid: true };
}

export function validateStory(story: string): ValidationResult {
  const value = story.trim();

  if (!value) {
    return {
      valid: false,
      message: "Story cannot be empty.",
    };
  }

  if (value.length < 100) {
    return {
      valid: false,
      message: "Story should contain at least 100 characters.",
    };
  }

  if (value.length > 10000) {
    return {
      valid: false,
      message: "Story is too long.",
    };
  }

  return { valid: true };
}

export function validateLocation(location: string): ValidationResult {
  const value = location.trim();

  if (!value) {
    return {
      valid: false,
      message: "Location is required.",
    };
  }

  if (value.length > 120) {
    return {
      valid: false,
      message: "Location is too long.",
    };
  }

  return { valid: true };
}

export function validateYear(year: number): ValidationResult {
  const currentYear = new Date().getFullYear();

  if (!Number.isInteger(year)) {
    return {
      valid: false,
      message: "Invalid year.",
    };
  }

  if (year < 1800 || year > currentYear) {
    return {
      valid: false,
      message: `Year must be between 1800 and ${currentYear}.`,
    };
  }

  return { valid: true };
}

/* -------------------------------------------------------------------------- */
/*                              File Validation                               */
/* -------------------------------------------------------------------------- */

export function validateImage(file: File): ValidationResult {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/jpg",
  ];

  const maxSize = 5 * 1024 * 1024;

  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      message: "Only JPG, PNG and WEBP images are allowed.",
    };
  }

  if (file.size > maxSize) {
    return {
      valid: false,
      message: "Image size must be under 5 MB.",
    };
  }

  return { valid: true };
}

export function validateAudio(file: File): ValidationResult {
  const allowedTypes = [
    "audio/mpeg",
    "audio/mp3",
    "audio/wav",
    "audio/x-wav",
    "audio/ogg",
    "audio/mp4",
  ];

  const maxSize = 100 * 1024 * 1024;

  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      message: "Unsupported audio format.",
    };
  }

  if (file.size > maxSize) {
    return {
      valid: false,
      message: "Audio file exceeds 100 MB.",
    };
  }

  return { valid: true };
}

/* -------------------------------------------------------------------------- */
/*                             Generic Utilities                              */
/* -------------------------------------------------------------------------- */

export function validateLength(
  value: string,
  min: number,
  max: number
): ValidationResult {
  const text = value.trim();

  if (text.length < min) {
    return {
      valid: false,
      message: `Minimum ${min} characters required.`,
    };
  }

  if (text.length > max) {
    return {
      valid: false,
      message: `Maximum ${max} characters allowed.`,
    };
  }

  return { valid: true };
}

export function validatePositiveNumber(
  value: number
): ValidationResult {
  if (Number.isNaN(value) || value <= 0) {
    return {
      valid: false,
      message: "Value must be greater than zero.",
    };
  }

  return { valid: true };
}

export function validateSlug(slug: string): ValidationResult {
  const regex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

  if (!regex.test(slug)) {
    return {
      valid: false,
      message:
        "Slug may only contain lowercase letters, numbers and hyphens.",
    };
  }

  return { valid: true };
}