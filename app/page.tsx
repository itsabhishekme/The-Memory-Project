import Hero from "@/components/the-memory-project/Hero";
import Mission from "@/components/the-memory-project/Mission";
import Collections from "@/components/the-memory-project/Collections";
import FeaturedStories from "@/components/the-memory-project/FeaturedStories";
import MemoryCategories from "@/components/the-memory-project/MemoryCategories";
import OralHistory from "@/components/the-memory-project/OralHistory";
import FamilyArchive from "@/components/the-memory-project/FamilyArchive";
import HistoricPhotos from "@/components/the-memory-project/HistoricPhotos";
import LegacyLetters from "@/components/the-memory-project/LegacyLetters";
import Timeline from "@/components/the-memory-project/Timeline";
import Testimonials from "@/components/the-memory-project/Testimonials";
import Impact from "@/components/the-memory-project/Impact";
import Partners from "@/components/the-memory-project/Partners";
import Volunteers from "@/components/the-memory-project/Volunteers";
import FAQ from "@/components/the-memory-project/FAQ";
import ShareMemory from "@/components/the-memory-project/ShareMemory";
import HowItWorks from "@/components/the-memory-project/HowItWorks";
import CTA from "@/components/the-memory-project/CTA";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">

      {/* Hero */}
      <Hero />

      {/* Mission */}
      <Mission />

      {/* Story Collections */}
      <Collections />

      {/* Featured Human Stories */}
      <FeaturedStories />

      {/* Memory Categories */}
      <MemoryCategories />

      {/* Oral Histories */}
      <OralHistory />

      {/* Family Archives */}
      <FamilyArchive />

      {/* Historic Photographs */}
      <HistoricPhotos />

      {/* Legacy Letters */}
      <LegacyLetters />

      {/* Timeline */}
      <Timeline />

      {/* Testimonials */}
      <Testimonials />

      {/* Impact Statistics */}
      <Impact />

      {/* Partner Organizations */}
      <Partners />

      {/* Volunteers */}
      <Volunteers />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Share Your Memory */}
      <ShareMemory />

      {/* How It Works */}
      <HowItWorks />

      {/* Call To Action */}
      <CTA />

    </main>
  );
}