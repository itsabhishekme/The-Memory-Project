import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  location: string;
  image?: string;
  quote: string;
  rating?: number;
}

export default function TestimonialCard({
  name,
  role,
  location,
  image,
  quote,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      {/* Quote Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition-colors group-hover:bg-amber-600 group-hover:text-white">
        <Quote className="h-7 w-7" />
      </div>

      {/* Rating */}
      <div className="mt-6 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              index < rating
                ? "fill-amber-400 text-amber-400"
                : "text-slate-300 dark:text-slate-600"
            }`}
          />
        ))}
      </div>

      {/* Testimonial */}
      <blockquote className="mt-6 flex-1 text-lg leading-8 text-slate-600 dark:text-slate-300">
        “{quote}”
      </blockquote>

      {/* Divider */}
      <div className="my-8 h-px bg-slate-200 dark:bg-slate-700" />

      {/* Author */}
      <div className="flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-16 w-16 rounded-full object-cover ring-2 ring-amber-400"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-xl font-bold text-white">
            {name.charAt(0).toUpperCase()}
          </div>
        )}

        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {name}
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            {role}
          </p>

          <p className="mt-1 text-sm font-medium text-amber-600 dark:text-amber-400">
            {location}
          </p>
        </div>
      </div>
    </article>
  );
}