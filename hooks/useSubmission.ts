"use client";

import { useState } from "react";

export interface SubmissionData {
  fullName: string;
  email: string;
  phone?: string;
  location?: string;
  title: string;
  category: string;
  story: string;
  consent: boolean;
}

interface SubmissionResult {
  success: boolean;
  message: string;
}

export default function useSubmission() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const submitStory = async (
    data: SubmissionData
  ): Promise<SubmissionResult> => {
    setLoading(true);
    setSuccess(false);
    setError("");
    setMessage("");

    try {
      // Replace this URL with your actual API endpoint.
      const response = await fetch("/api/share-memory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to submit your memory."
        );
      }

      setSuccess(true);
      setMessage(
        result.message ||
          "Thank you! Your memory has been submitted successfully."
      );

      return {
        success: true,
        message:
          result.message ||
          "Thank you! Your memory has been submitted successfully.",
      };
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";

      setError(errorMessage);

      return {
        success: false,
        message: errorMessage,
      };
    } finally {
      setLoading(false);
    }
  };

  const resetSubmission = () => {
    setLoading(false);
    setSuccess(false);
    setError("");
    setMessage("");
  };

  return {
    loading,
    success,
    error,
    message,
    submitStory,
    resetSubmission,
  };
}