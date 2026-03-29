import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  preview: string;
  fullDescription: string;
  img: string;
  category: "innovation" | "mentorship" | "celebration" | "civic";
}

const events: Event[] = [
  {
    id: "innovation-maseno",
    title: "Innovation and Collaboration",
    location: "Maseno University",
    date: "NOV 2025",
    preview: "A collaborative engagement where we interacted with young innovators, exchanged ideas, and explored new partnership opportunities.",
    fullDescription: "This landmark event at Maseno University brought together over 150 young innovators, entrepreneurs, and thought leaders. We facilitated dynamic workshops on emerging technologies, startup ecosystems, and collaborative innovation. Participants networked with industry leaders and left with actionable insights and new partnership opportunities. The event reinforced UPYA's commitment to fostering a culture of innovation among youth.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=75",
    category: "innovation",
  },
  {
    id: "mentorship-nyamgun",
    title: "Student Mentorship",
    location: "Nyamgun Secondary - Seme",
    date: "OCT 2025",
    preview: "Mentors, workshops and group coaching sessions aimed at empowering the next generation of leaders.",
    fullDescription: "Our mentorship program at Nyamgun Secondary School reached 120 students through intensive mentorship sessions, interactive workshops, and group coaching. We covered topics including academic excellence, career planning, leadership skills, and personal development. Each student was paired with a mentor for one-on-one guidance. The program fostered meaningful relationships and provided students with the tools they need to succeed in their academic and professional journeys.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=75",
    category: "mentorship",
  },
  {
    id: "anniversary-livingworld",
    title: "UPYA Anniversary Celebration",
    location: "Living World Children's Home - Seme",
    date: "APRIL 2025",
    preview: "Celebrating a year of existence and the impact we've created in communities across the region.",
    fullDescription: "UPYA marked its anniversary with a vibrant celebration at Living World Children's Home, bringing together staff, partners, beneficiaries, and supporters. The event featured inspiring stories from youth whose lives have been transformed through our programs, live performances, awards recognizing outstanding contributors, and a community service initiative. We reflected on our achievements—over 5,000 youth impacted, 45 partnerships formed, and countless lives changed—while recommitting to our mission of youth empowerment.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=75",
    category: "celebration",
  },
  {
    id: "civic-education-kisumu",
    title: "Civic Education",
    location: "Kisumu County Assembly",
    date: "MAY 2024",
    preview: "We successfully organized a youth mentorship and civic education trip to the Kisumu County Assembly, providing first-hand knowledge on governance processes and leadership skills.",
    fullDescription: "In May 2024, UPYA organized an impactful civic education program that took 200 youth to the Kisumu County Assembly. Participants engaged with county legislators, observed assembly proceedings, and participated in hands-on workshops on governance, civic participation, and youth advocacy. The program equipped young people with essential knowledge about democratic processes, policy-making, and how they can influence governance. Follow-up surveys showed 95% of participants feeling more confident in their civic engagement capabilities.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=75",
    category: "civic",
  },
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    innovation: "bg-blue-100 text-blue-700",
    mentorship: "bg-purple-100 text-purple-700",
    celebration: "bg-pink-100 text-pink-700",
    civic: "bg-green-100 text-green-700",
  };
  return colors[category] || "bg-accent text-charcoal";
};

const getCategoryLabel = (category: string) => {
  const labels: Record<string, string> = {
    innovation: "Innovation",
    mentorship: "Mentorship",
    celebration: "Celebration",
    civic: "Civic",
  };
  return labels[category] || "Event";
};

const EventsGallerySection = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <>
      <section className="py-[100px] px-6 md:px-[60px]" id="events">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-14 gap-6">
            <div>
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[2px] uppercase mb-4">
                  <span className="w-5 h-0.5 bg-primary" />
                  Events & Moments
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="font-head text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] text-charcoal tracking-[-1.5px] mb-4">
                  Our Gallery
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="text-[16.5px] text-muted-foreground leading-relaxed max-w-[520px]">
                  Explore the moments, events, and celebrations that define our journey of empowering youth across the region.
                </p>
              </AnimatedSection>
            </div>
            <AnimatedSection>
              <a
                href="#"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-[15px] inline-flex items-center gap-2 transition-all duration-300 hover:bg-primary-mid hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(26,140,78,0.35)] shrink-0"
              >
                View All Events →
              </a>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {events.map((event, i) => (
              <AnimatedSection key={event.id} delay={(i % 2) * 0.1}>
                <div className="group rounded-[20px] overflow-hidden border border-border bg-card transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_32px_60px_rgba(26,140,78,0.12)] hover:border-primary">
                  {/* Image Section */}
                  <div className="h-[240px] relative overflow-hidden">
                    <img
                      src={event.img}
                      alt={event.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-[1]" />
                    <span
                      className={`absolute top-4 left-4 z-[2] ${getCategoryColor(
                        event.category
                      )} px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase`}
                    >
                      {getCategoryLabel(event.category)}
                    </span>

                    {/* Date Badge */}
                    <div className="absolute bottom-4 left-4 z-[2] bg-white/95 backdrop-blur px-3 py-2 rounded-lg">
                      <p className="text-xs font-bold text-charcoal">{event.date}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="font-head text-[19px] font-bold text-charcoal mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-primary font-semibold mb-3 flex items-center gap-1">
                      📍 {event.location}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                      {event.preview}
                    </p>

                    {/* Read More Button */}
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm transition-all duration-300 hover:gap-3 hover:text-primary-mid"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <div className="relative h-[250px] -m-6 mb-6 overflow-hidden rounded-t-lg">
                <img
                  src={selectedEvent.img}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="px-6 pb-6">
                <div className="flex items-start justify-between mb-3 gap-3">
                  <div>
                    <p className={`inline-block ${getCategoryColor(selectedEvent.category)} px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3`}>
                      {getCategoryLabel(selectedEvent.category)}
                    </p>
                    <DialogTitle className="text-2xl font-bold text-charcoal">
                      {selectedEvent.title}
                    </DialogTitle>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-6 text-sm">
                  <p className="text-primary font-semibold flex items-center gap-2">
                    📍 {selectedEvent.location}
                  </p>
                  <p className="text-muted-foreground font-semibold flex items-center gap-2">
                    📅 {selectedEvent.date}
                  </p>
                </div>

                <DialogDescription className="text-base leading-relaxed text-charcoal space-y-4">
                  <p>{selectedEvent.fullDescription}</p>
                  <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                    "This event was a significant milestone in UPYA's journey of empowering youth and creating lasting impact in our communities."
                  </p>
                </DialogDescription>

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="mt-6 w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-mid"
                >
                  Close
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EventsGallerySection;
