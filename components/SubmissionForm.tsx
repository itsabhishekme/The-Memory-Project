"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Mic,
  Image,
  FileText,
  Send,
  CheckCircle,
} from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  category: string;
  title: string;
  story: string;
}

const initialState: FormData = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  category: "Personal Story",
  title: "",
  story: "",
};

const categories = [
  "Personal Story",
  "Family History",
  "Oral History",
  "Historic Photograph",
  "Letter or Diary",
  "Community Memory",
  "Cultural Tradition",
  "Freedom Fighter Story",
  "Local History",
  "Other",
];

export default function SubmissionForm() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace this with your backend/API integration
    console.log(formData);

    setSubmitted(true);
    setFormData(initialState);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Share Your Memory
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Preserve Your Story Forever
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Every memory matters. Help us preserve family stories, oral
            histories, traditions, photographs, and letters for future
            generations.
          </p>
        </div>

        {submitted && (
          <div className="mb-8 flex items-center gap-3 rounded-2xl border border-green-300 bg-green-50 p-5 text-green-700">
            <CheckCircle className="h-6 w-6" />
            <p className="font-medium">
              Thank you! Your story has been submitted successfully.
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* Name */}
            <div>
              <label className="mb-2 block font-medium">
                Full Name
              </label>

              <div className="relative">
                <User className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block font-medium">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block font-medium">
                Phone Number
              </label>

              <div className="relative">
                <Phone className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block font-medium">
                Location
              </label>

              <div className="relative">
                <MapPin className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, State, Country"
                  className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950"
                />
              </div>
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block font-medium">
              Story Category
            </label>

            <div className="relative">
              <BookOpen className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950"
              >
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Story Title */}
          <div>
            <label className="mb-2 block font-medium">
              Story Title
            </label>

            <input
              type="text"
              required
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="A Journey Through Time"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950"
            />
          </div>

          {/* Story */}
          <div>
            <label className="mb-2 block font-medium">
              Tell Your Story
            </label>

            <textarea
              required
              rows={8}
              name="story"
              value={formData.story}
              onChange={handleChange}
              placeholder="Write your story here..."
              className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950"
            />
          </div>

          {/* Attachments */}
          <div className="rounded-2xl bg-slate-100 p-6 dark:bg-slate-800">
            <h3 className="mb-4 text-lg font-semibold">
              You Can Also Share
            </h3>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-slate-900">
                <Mic className="text-amber-600" />
                <span>Audio Recording</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-slate-900">
                <Image className="text-amber-600" />
                <span>Photographs</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-slate-900">
                <FileText className="text-amber-600" />
                <span>Letters & Documents</span>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              File upload support can be connected later using your preferred
              storage solution (AWS S3, Cloudinary, Firebase Storage, etc.).
            </p>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-amber-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-amber-700"
          >
            <Send className="h-5 w-5" />
            Submit Your Story
          </button>
        </form>
      </div>
    </section>
  );
}