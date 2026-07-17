
"use client";

import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Anita Sharma",
    role: "Family Story Contributor",
    location: "Jaipur, Rajasthan",
    quote:
      "Recording my grandmother's stories through The Memory Project has become one of the greatest gifts for our family. Her voice and memories will now live on for generations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Community Volunteer",
    location: "Patna, Bihar",
    quote:
      "Every interview reminded me that history is not only found in books. It lives in the people around us, waiting to be preserved before it is forgotten.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Meera Kapoor",
    role: "Historian",
    location: "New Delhi",
    quote:
      "The Memory Project is creating a remarkable archive of everyday lives. Future generations will understand our culture through these authentic voices.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ayesha Khan",
    role: "Student Researcher",
    location: "Lucknow, Uttar Pradesh",
    quote:
      "Listening to oral histories completely changed how I see local heritage. Every family has stories worth preserving.",
    rating: 5,
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Documentary Filmmaker",
    location: "London, United Kingdom",
    quote:
      "The stories collected here are deeply human. They remind us that memories connect people beyond borders and generations.",
    rating: 5,
  },
  {
    id: 6,
    name: "Priya Nair",
    role: "Teacher",
    location: "Kochi, Kerala",
    quote:
      "Our students interviewed grandparents and elders as part of a school project. It became an unforgettable learning experience for everyone involved.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
            Community Voices
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Stories from Our Community
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Families, volunteers, educators, historians, and storytellers are
            helping preserve memories that inspire future generations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
            >
              <Quote className="h-12 w-12 text-amber-500" />

              <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
                "{testimonial.quote}"
              </p>

              <div className="mt-6 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {testimonial.role}
                </p>

                <p className="mt-1 text-sm text-amber-600 dark:text-amber-400">
                  {testimonial.location}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-10 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold">
            Every Memory Makes a Difference
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90">
            Join thousands of families and volunteers who are preserving
            personal stories, traditions, and voices for future generations.
          </p>

          <a
            href="/share-your-memory"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
          >
            Share Your Story
          </a>
        </div>
      </div>
    </section>
  );
}