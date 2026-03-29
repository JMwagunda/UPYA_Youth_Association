import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowLeft, ArrowRight, Video, Users, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { upcomingEvents } from "@/data/upcomingEvents";

const Events = () => {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative bg-charcoal pt-[76px] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,hsl(var(--accent)/0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--primary)/0.25),transparent_50%)]" />
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
              What's Coming Up
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h1 className="font-head text-[clamp(36px,5vw,60px)] font-extrabold text-primary-foreground leading-[1.08] tracking-[-2px] mb-5">
              Upcoming Events
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-[600px]">
              Join us — community events, mentorship sessions, and talent showcases that transform lives.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Events List */}
      <div className="max-w-[1000px] mx-auto px-6 md:px-[60px] py-16">
        <div className="space-y-8">
          {upcomingEvents.map((event, i) => (
            <AnimatedSection key={event.id} delay={i * 0.12}>
              <motion.div
                layout
                className="group rounded-[24px] overflow-hidden border border-border bg-card hover:border-primary transition-all duration-400 hover:shadow-[0_24px_60px_rgba(26,140,78,0.1)]"
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-[340px] h-[240px] md:h-auto relative overflow-hidden shrink-0">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10 z-[1]" />
                    
                    {/* Event type badge */}
                    <div className="absolute top-4 left-4 z-[2] flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase ${
                        event.type === "virtual"
                          ? "bg-blue-500/90 text-primary-foreground"
                          : "bg-accent text-accent-foreground"
                      }`}>
                        {event.type === "virtual" ? <Video className="w-3 h-3" /> : <Users className="w-3 h-3" />}
                        {event.type === "virtual" ? "Virtual" : "In-Person"}
                      </span>
                    </div>

                    {/* Date card */}
                    <div className="absolute bottom-4 left-4 z-[2] bg-card/95 backdrop-blur-sm rounded-2xl px-4 py-3 text-center min-w-[70px] shadow-lg">
                      <div className="text-[11px] font-bold text-primary uppercase tracking-wider">
                        {event.date.split(",")[0]?.split(" ")[0]}
                      </div>
                      <div className="font-head text-[26px] font-extrabold text-charcoal leading-none">
                        {event.date.match(/\d+/)?.[0]}
                      </div>
                      <div className="text-[10px] text-muted-foreground font-medium">
                        {event.date.split(",")[1]?.trim().split(" ").pop()}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <div className="mb-1">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{event.category}</span>
                    </div>
                    <h2 className="font-head text-[22px] md:text-[26px] font-extrabold text-charcoal leading-tight mb-3">
                      {event.title}
                    </h2>
                    <p className="text-primary font-semibold text-[15px] italic mb-4 leading-relaxed">
                      "{event.tagline}"
                    </p>
                    <div className="flex flex-wrap gap-4 mb-5">
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        {event.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        {event.date}
                      </span>
                    </div>

                    {expandedId === event.id ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-sm text-muted-foreground leading-[1.8] mb-5">{event.description}</p>
                      </motion.div>
                    ) : null}

                    <div className="flex flex-wrap items-center gap-3 mt-auto pt-2">
                      <button
                        onClick={() => setExpandedId(expandedId === event.id ? null : event.id)}
                        className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all duration-300"
                      >
                        {expandedId === event.id ? "Show Less" : "Read More"}
                        <ArrowRight className={`w-4 h-4 transition-transform ${expandedId === event.id ? "rotate-90" : ""}`} />
                      </button>
                      <span className="text-border">|</span>
                      <a
                        href="#"
                        className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold text-sm inline-flex items-center gap-2 transition-all duration-300 hover:bg-primary-mid hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(26,140,78,0.3)]"
                      >
                        {event.type === "virtual" ? "Join Online" : "Register Now"}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Empty State Placeholder */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-green-light text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-4">
              <Clock className="w-4 h-4" />
              More events coming soon
            </div>
            <p className="text-muted-foreground text-sm max-w-[400px] mx-auto">
              Follow us on social media to stay updated on upcoming UPYA events and community activities.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Events;
