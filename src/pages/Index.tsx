import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBand from "@/components/MarqueeBand";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import EventsGallerySection from "@/components/EventsGallerySection";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import ImpactSection from "@/components/ImpactSection";
import DonateSection from "@/components/DonateSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import CTABanner from "@/components/CTABanner";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <MarqueeBand />
    <AboutSection />
    <StatsSection />
    <EventsGallerySection />
    <UpcomingEventsSection />
    <ImpactSection />
    <DonateSection />
    <TeamSection />
    <TestimonialsSection />
    <BlogSection />
    <CTABanner />
    <PartnersSection />
    <Footer />
  </div>
);

export default Index;
