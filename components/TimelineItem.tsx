
import { CalendarDays, MapPin } from "lucide-react";

export interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  location?: string;
  image?: string;
  index?: number;
}

export default function TimelineItem({
  year,
  title,
  description,
  location,
  image,
  index = 0,
}: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex w-full items-center ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
    >
      {/* Content */}
      <div className="w-full md:w-1/2 px-4 py-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-4 inline-flex items-center rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
            <CalendarDays className="mr-2 h-4 w-4" />
            {year}
          </div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
            {description}
          </p>

          {location && (
            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              <MapPin className="h-4 w-4 text-amber-500" />
              {location}
            </div>
          )}

          {image && (
            <div className="mt-6 overflow-hidden rounded-2xl">
              <img
                src={image}
                alt={title}
                className="h-64 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          )}
        </div>
      </div>

      {/* Center Dot */}
      <div className="relative z-10 hidden md:flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-amber-500 shadow-lg dark:border-slate-950">
        <div className="h-2.5 w-2.5 rounded-full bg-white" />
      </div>

      {/* Empty Side */}
      <div className="hidden md:block md:w-1/2" />
    </div>
  );
}