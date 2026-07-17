
import Link from "next/link";
import {
  Clock,
  MapPin,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";

export interface VolunteerCardProps {
  title: string;
  description: string;
  location: string;
  commitment: string;
  icon?: React.ElementType;
  href?: string;
}

export default function VolunteerCard({
  title,
  description,
  location,
  commitment,
  icon: Icon = HeartHandshake,
  href = "/volunteers/apply",
}: VolunteerCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition-colors duration-300 group-hover:bg-amber-600 group-hover:text-white">
        <Icon size={30} />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 flex-grow leading-7 text-slate-600 dark:text-slate-400">
        {description}
      </p>

      {/* Details */}
      <div className="mt-8 space-y-3">
        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
          <MapPin size={18} className="text-amber-600" />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
          <Clock size={18} className="text-amber-600" />
          <span>{commitment}</span>
        </div>
      </div>

      {/* CTA */}
      <Link
        href={href}
        className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-600 transition-all duration-300 hover:gap-3"
      >
        Apply Now
        <ArrowRight size={18} />
      </Link>
    </article>
  );
}