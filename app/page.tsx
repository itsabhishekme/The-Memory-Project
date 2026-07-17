import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Collections from "@/components/Collections";
import FeaturedStories from "@/components/FeaturedStories";
import MemoryCategories from "@/components/MemoryCategories";
import OralHistory from "@/components/OralHistory";
import FamilyArchive from "@/components/FamilyArchive";
import HistoricPhotos from "@/components/HistoricPhotos";
import LegacyLetters from "@/components/LegacyLetters";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import Impact from "@/components/Impact";
import Partners from "@/components/Partners";
import Volunteers from "@/components/Volunteers";
import FAQ from "@/components/FAQ";
import ShareMemory from "@/components/ShareMemory";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";

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