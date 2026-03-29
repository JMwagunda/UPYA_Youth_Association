import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ArrowRight, ArrowLeft, Search } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GalleryModal from "@/components/GalleryModal";
import { galleryEvents, eventCategories, type GalleryEvent } from "@/data/galleryEvents";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filtered = galleryEvents.filter((e) => {
    const matchesCategory = activeFilter === "All" || e.tag === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative bg-charcoal pt-[76px] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.2),transparent_50%)]" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-[60px] py-16 md:py-24">
          <AnimatedSection>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="inline-flex items-center gap-2 text-accent text-xs font-bold tracking-[2px] uppercase mb-4">
              <span className="w-5 h-0.5 bg-accent" />
              Events & Moments
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h1 className="font-head text-[clamp(36px,5vw,60px)] font-extrabold text-primary-foreground leading-[1.08] tracking-[-2px] mb-5">
              Our Gallery
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-[600px]">
              Every event tells a story — of impact, connection, and the relentless pursuit of a better tomorrow for Kenyan youth.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Filters + Search */}
      <div className="sticky top-[76px] z-30 bg-card/95 backdrop-blur-xl border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-[60px] py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex gap-2 overflow-x-auto pb-1 w-full sm:w-auto scrollbar-hide">
              {eventCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`shrink-0 px-5 py-2 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 ${
                    activeFilter === cat
                      ? "bg-primary text-primary-foreground shadow-[0_4px_16px_rgba(26,140,78,0.3)]"
                      : "bg-muted text-muted-foreground hover:bg-secondary hover:text-charcoal"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-[260px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-[60px] py-14">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-5">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-head text-xl font-bold text-charcoal mb-2">No events found</h3>
              <p className="text-muted-foreground text-sm">Try adjusting your search or filter criteria.</p>
            </motion.div>
          ) : (
            <motion.div
              key={activeFilter + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((event, i) => (
                <AnimatedSection key={event.id} delay={(i % 3) * 0.08}>
                  <div className="group rounded-[20px] overflow-hidden border border-border bg-card transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_32px_60px_rgba(26,140,78,0.12)] hover:border-primary h-full flex flex-col">
                    <div className="h-[220px] relative overflow-hidden">
                      <img
                        src={event.images[0]}
                        alt={event.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-[1]" />
                      <span className="absolute top-4 left-4 z-[2] bg-accent text-accent-foreground px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase">
                        {event.tag}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-head text-[19px] font-bold text-charcoal mb-2">{event.title}</h3>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          {event.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {event.date}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3 flex-1">
                        {event.shortDesc}
                      </p>
                      <button
                        onClick={() => setSelectedEvent(event)}
                        className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group/btn hover:gap-2.5 transition-all duration-300 mt-auto"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <GalleryModal
        event={selectedEvent}
        open={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
};

export default Gallery;
