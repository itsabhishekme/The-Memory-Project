"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface ImpactCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  duration?: number;
}

export default function ImpactCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  description,
  duration = 2.5,
}: ImpactCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <div
      ref={ref}
      className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="mb-3 text-5xl font-extrabold tracking-tight text-amber-600 dark:text-amber-400">
        {prefix}
        {inView ? (
          <CountUp
            end={value}
            duration={duration}
            separator=","
          />
        ) : (
          0
        )}
        {suffix}
      </div>

      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
        {label}
      </h3>

      {description && (
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}