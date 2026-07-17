
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Testimonials | The Memory Project",
  description:
    "Read inspiring testimonials from families, volunteers, researchers, educators, and community members whose stories have become part of The Memory Project.",
};

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Family Contributor",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    quote:
      "The Memory Project helped us preserve my grandmother's life story. Future generations of our family will now always know where we came from.",
  },
  {
    name: "Rahul Verma",
    role: "Volunteer",
    location: "Varanasi, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    quote:
      "Recording oral histories has been one of the most meaningful experiences of my life. Every interview teaches something unforgettable.",
  },
  {
    name: "Meera Patel",
    role: "Historian",
    location: "Ahmedabad, Gujarat",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    quote:
      "These personal stories are invaluable historical records. They preserve voices that traditional history often overlooks.",
  },
  {
    name: "Arjun Singh",
    role: "Documentary Filmmaker",
    location: "New Delhi",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    quote:
      "Every memory has the power to inspire empathy. This initiative beautifully connects storytelling with cultural preservation.",
  },
  {
    name: "Priya Nair",
    role: "Teacher",
    location: "Kochi, Kerala",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    quote:
      "Our students discovered their family heritage by interviewing grandparents. It became the most memorable learning experience of the year.",
  },
  {
    name: "Sanjay Kumar",
    role: "Community Leader",
    location: "Patna, Bihar",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400",
    quote:
      "The Memory Project is preserving more than stories—it is preserving identity, culture, and human dignity.",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">
            Community Voices
          </span>

          <h1 className="mt-8 text-5xl font-extrabold md:text-6xl">
            Testimonials
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Every story preserved creates a lasting impact. Hear from families,
            volunteers, educators, researchers, and community members who have
            become part of The Memory Project.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={72}
                    height={72}
                    className="h-18 w-18 rounded-full object-cover"
                  />

                  <div>
                    <h2 className="text-xl font-semibold">
                      {testimonial.name}
                    </h2>

                    <p className="text-sm text-amber-600">
                      {testimonial.role}
                    </p>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <p className="mt-8 leading-8 text-slate-600 dark:text-slate-300">
                  “{testimonial.quote}”
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 text-center md:grid-cols-4">
            <div>
              <h3 className="text-5xl font-bold text-amber-600">2,500+</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Stories Preserved
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-amber-600">800+</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Families Connected
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-amber-600">120+</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Volunteers
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-amber-600">30+</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Partner Organizations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-20 text-center text-white">
          <h2 className="text-4xl font-bold md:text-5xl">
            Your Story Matters
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Join thousands of families and storytellers preserving memories for
            future generations. Every voice deserves to be remembered.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/share-your-memory"
              className="rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
            >
              Share Your Story
            </a>

            <a
              href="/volunteers"
              className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
            >
              Become a Volunteer
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}